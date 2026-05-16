import Link from "next/link";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 bg-contour-rings" />
      <div className="absolute inset-0 bg-glow" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-24 text-center">
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent sm:text-6xl lg:text-7xl">
          IF.Link —— 从「可能性」到「连接」的创客起点。
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          在这里，我们打破技术壁垒。作品与行动力远比背景更重要，每个人都有机会成为改变的发生器。
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="https://ncnewq4y9q21.feishu.cn/share/base/form/shrcnaIKkKECG9FuqfUmA3hxz7c"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-green-500 px-8 text-base font-semibold text-zinc-900 shadow-[0_0_24px_rgba(34,197,94,0.45)] transition-all duration-300 hover:bg-green-400 hover:shadow-[0_0_36px_rgba(34,197,94,0.65)] hover:scale-105 active:scale-100"
          >
            立即报名
          </Link>
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-500/50 px-8 text-base font-semibold text-zinc-300 transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] hover:scale-105 active:scale-100"
          >
            探索矩阵
          </Link>
        </div>
      </div>
    </section>
  );
}