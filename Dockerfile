# ============================================================
# 阶段 1：依赖安装 (deps)
#   只复制 package.json / package-lock.json，安装生产依赖。
#   Docker 构建缓存会根据这两个文件的哈希值判定是否命中，
#   不常变的依赖层会被缓存，大幅加速后续构建。
# ============================================================
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# ============================================================
# 阶段 2：构建 (builder)
#   复制全部源代码，安装所有依赖（含 devDependencies），
#   执行 next build 生成 .next/standalone。
#   output: "standalone" 会自动裁剪出运行所需的最小文件集。
# ============================================================
FROM node:22-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

# ============================================================
# 阶段 3：运行 (runner)
#   从 builder 中复制 standalone 产物 + 静态资源，
#   切换到非 root 用户运行，保证容器内最小权限。
# ============================================================
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# 创建非特权用户并分配目录所有权
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# 从 builder 复制 standalone 产物
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# 所有权移交至非特权用户
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

# Exec 格式：进程 PID=1，能正确接收 SIGTERM 优雅退出
CMD ["node", "server.js"]