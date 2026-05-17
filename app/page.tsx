import Link from "next/link";
import Image from "next/image";

const modules = [
  {
    image: "/images/ifcommunity.jpg",
    tag: "Community",
    title: "IF.Link Community",
    description:
      "轻松的氛围里聊前沿热点、分享踩坑经验，偶尔还请业界嘉宾来唠唠嗑。",
  },
  {
    image: "/images/ifworkshop.jpg",
    tag: "Workshop",
    title: "IF.Learn Workshop",
    description:
      "零基础也能上手的实战工作坊，从调 API 到 AI 全栈开发，手把手带你迈出第一步。五月份，我们与 TRAE on Campus 达成合作，在赛前开展三场两校区的 workshop，带大家从零起步开始 AI 探索之旅。",
    schedule: [
      "5月10、13日：本地 AI Coding 入门",
      "5月16、17日：两个校区两场 AI Coding 方法论",
      "5月23、24日：办公、学术场景、黑客松经验分享",
    ],
  },
  {
    image: "/images/ifhackathon.jpg",
    tag: "Hackathon",
    title: "IF.Land Hackathon",
    description:
      "36 小时把想法变成 Demo，你的疯狂点子值得落地的机会。",
  },
  {
    image: "/images/ifdemoday.jpg",
    tag: "Demo Day",
    title: "IF.Launch Demo Day",
    description:
      "在黑客松和社区中孕育的较为成熟的项目，我们会集中路演，为大家的梦想对接资本助力。",
  },
];

export default function Home() {
  return (
    <main className="bg-zinc-950">
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
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
            <a
              href="#modules"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-500/50 px-8 text-base font-semibold text-zinc-300 transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)] hover:scale-105 active:scale-100"
            >
              探索矩阵
            </a>
          </div>

          <a
            href="#modules"
            className="mt-12 animate-bounce text-zinc-500 transition-colors hover:text-zinc-300"
            aria-label="Scroll to modules"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </section>

      <section
        id="modules"
        className="relative min-h-screen px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-50 sm:text-5xl">
              四大核心模块
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
              从社区交流到实战演练，从黑客松到项目路演——IF.Link 为创客打造完整成长路径。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {modules.map((mod) => (
              <article
                key={mod.tag}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 transition-all duration-500 hover:border-green-500/40 hover:shadow-[0_0_32px_rgba(34,197,94,0.12)]"
              >
                <div className="relative h-56 w-full overflow-hidden sm:h-64">
                  <Image
                    src={mod.image}
                    alt={mod.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-green-500/90 px-3 py-1 text-xs font-semibold text-zinc-900">
                    {mod.tag}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-zinc-50 sm:text-2xl">
                    {mod.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-zinc-400">
                    {mod.description}
                  </p>

                  {"schedule" in mod && mod.schedule && (
                    <ul className="mt-4 space-y-2 border-l-2 border-green-500/40 pl-4">
                      {mod.schedule.map((item) => (
                        <li
                          key={item}
                          className="text-sm leading-relaxed text-zinc-300"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}