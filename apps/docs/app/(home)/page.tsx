import { cva } from 'class-variance-authority';
import {
  BatteryChargingIcon,
  CpuIcon,
  FileEditIcon,
  FileTextIcon,
  Heart,
  KeyboardIcon,
  LayoutIcon,
  LibraryIcon,
  type LucideIcon,
  MousePointer,
  PaperclipIcon,
  PersonStandingIcon,
  RocketIcon,
  SearchIcon,
  ServerIcon,
  Terminal,
  TimerIcon,
} from 'lucide-react';
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import Link from 'next/link';
import type { HTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';
import { CodeBlock } from '@/components/code-block';
import { UwuHero } from '@/app/(home)/uwu';
import SourceImage from '@/public/source.png';
import ContributorCounter from '@/components/contributor-count';
import {
  CreateAppAnimation,
  PreviewImages,
  WhyInteractive,
} from './page.client';
import { NetlifyLogo, VercelLogo } from './icons';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import { owner, repo } from '@/lib/github';
import { Marquee } from '@/app/(home)/marquee';
import ArchImg from './arch.png';

const badgeVariants = cva(
  'inline-flex size-7 items-center justify-center rounded-full bg-fd-primary font-medium text-fd-primary-foreground',
);

export default function Page() {
  const gridColor =
    'color-mix(in oklab, var(--color-fd-primary) 10%, transparent)';

  return (
    <>
      <div
        className="absolute inset-x-0 top-[360px] h-[250px] max-md:hidden"
        style={{
          background: `repeating-linear-gradient(to right, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px), repeating-linear-gradient(to bottom, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px)`,
        }}
      />
      <main className="container relative max-w-[1100px] px-2 py-4 z-2 lg:py-8">
        <div
          style={{
            background:
              'repeating-linear-gradient(to bottom, transparent, color-mix(in oklab, var(--color-fd-primary) 1%, transparent) 500px, transparent 1000px)',
          }}
        >
          <div className="relative">
            <Hero />
            <UwuHero />
          </div>
          <Feedback />
          <Introduction />
          <div
            className="relative overflow-hidden border-x border-t px-8 py-16 sm:py-24"
            style={{
              backgroundImage:
                'radial-gradient(circle at center, var(--color-fd-secondary), var(--color-fd-background) 40%)',
            }}
          >
            <h2 className="text-center text-2xl font-semibold sm:text-3xl">
              深受用户喜爱。
              <br />
              为开发者打造。
            </h2>
          </div>
          <Features />
          <Highlights />
          <Architecture />
          <Why />
          <Contributing />
          <End />
        </div>
      </main>
    </>
  );
}

function Architecture() {
  return (
    <div className="flex flex-col gap-4 border-x border-t p-8 md:px-12 lg:flex-row">
      <div className="text-start">
        <p className="px-2 py-1 text-sm font-mono bg-fd-primary text-fd-primary-foreground font-bold w-fit mb-4">
          源于热爱，用心设计
        </p>
        <h2 className="text-2xl font-semibold mb-4">一个可拆解的框架。</h2>
        <p className="text-fd-muted-foreground mb-6">
          Fumadocs 让你轻松构建优美的文档、撰写内容，
          并将内容转换为数据，服务于你的 React.js 框架， 无论是 Next.js 还是
          React Router。
        </p>
      </div>
      <Image
        src={ArchImg}
        alt="Architecture"
        className="mx-auto -my-16 w-full max-w-[400px] invert dark:invert-0 lg:mx-0"
      />
    </div>
  );
}

async function Why() {
  return (
    <div className="relative overflow-hidden border-x border-t p-2">
      <WhyInteractive
        typeTable={
          <TypeTable
            type={{
              name: {
                type: 'string',
                description: 'The name of player',
                default: 'hello',
              },
              code: {
                type: 'string',
                description: (
                  <CodeBlock lang="ts" code='console.log("Hello World")' />
                ),
              },
            }}
          />
        }
        codeblockSearchRouter={
          <CodeBlock
            lang="ts"
            code={`import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
 
export const { GET } = createFromSource(source);`}
          />
        }
        codeblockTheme={
          <CodeBlock
            lang="css"
            code={`@import 'tailwindcss';
@import 'fumadocs-ui/css/neutral.css';
@import 'fumadocs-ui/css/preset.css';`}
          />
        }
        codeblockInteractive={
          <CodeBlock
            lang="tsx"
            code={`import { File, Folder, Files } from 'fumadocs-ui/components/files';
 
<Files>
  <Folder name="app" defaultOpen>
    <File name="layout.tsx" />
    <File name="page.tsx" />
    <File name="global.css" />
  </Folder>
  <File name="package.json" />
</Files>`}
          />
        }
        codeblockMdx={
          <CodeBlock
            lang="tsx"
            code={`import { db } from '@/server/db';

export function ProductTable() {
  const products = db.getProducts()
    
  return (
    <ul>
      {products.map(product => <li key={product.key}>{product.name}</li>)}
    </ul>
  );
}

## Products

<ProductTable />`}
          />
        }
      />
    </div>
  );
}

function End() {
  return (
    <div className="flex flex-col border-b border-r md:flex-row *:border-l *:border-t">
      <div className="group flex flex-col min-w-0 flex-1 pt-8 **:transition-colors">
        <h2 className="text-3xl text-center font-extrabold font-mono uppercase text-fd-muted-foreground mb-4 lg:text-4xl group-hover:text-blue-500">
          构建你的文档
        </h2>
        <p className="text-center font-mono text-xs text-fd-foreground/60 mb-8 group-hover:text-blue-500/80">
          轻盈华美，宛若明月。
        </p>
        <div className="h-[200px] overflow-hidden p-8 bg-gradient-to-b from-fd-primary/10 group-hover:from-blue-500/10">
          <div className="mx-auto bg-radial-[circle_at_0%_100%] from-60% from-transparent to-fd-primary size-[500px] rounded-full group-hover:from-blue-500 group-hover:to-blue-600/10" />
        </div>
      </div>
      <ul className="flex flex-col gap-4 p-6 pt-8">
        <li>
          <span className="flex flex-row items-center gap-2 font-medium">
            <BatteryChargingIcon className="size-5" />
            电池有保障。
          </span>
          <span className="mt-2 text-sm text-fd-muted-foreground">
            持续维护，开放贡献。
          </span>
        </li>

        <li>
          <span className="flex flex-row items-center gap-2 font-medium">
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            完全开源。
          </span>
          <span className="mt-2 text-sm text-fd-muted-foreground">
            开源项目，可在 GitHub 获取。
          </span>
        </li>

        <li>
          <span className="flex flex-row items-center gap-2 font-medium">
            <TimerIcon className="size-5" />
            只需数秒。
          </span>
          <span className="mt-2 text-sm text-fd-muted-foreground">
            使用 CLI 即刻初始化新项目。
          </span>
        </li>

        <li className="flex flex-row flex-wrap gap-2 mt-auto">
          <Link href="/docs" className={cn(buttonVariants())}>
            阅读文档
          </Link>
          <a
            href="https://stackblitz.com/~/github.com/fuma-nama/fumadocs-ui-template"
            rel="noreferrer noopener"
            className={cn(
              buttonVariants({
                variant: 'outline',
              }),
            )}
          >
            打开 Demo
          </a>
        </li>
      </ul>
    </div>
  );
}

const searchItemVariants = cva(
  'flex flex-row items-center gap-2 rounded-md p-2 text-sm text-fd-popover-foreground',
);

function Search(): React.ReactElement {
  return (
    <div className="mt-6 rounded-lg bg-gradient-to-b from-fd-border p-px">
      <div className="flex select-none flex-col rounded-[inherit] bg-gradient-to-b from-fd-popover">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-sm text-fd-muted-foreground">
          <SearchIcon className="size-4" />
          Search...
        </div>
        <div className="border-t p-2">
          {[
            'Getting Started',
            'Components',
            'MDX Content',
            'User Guide',
            'Javascript SDK',
          ].map((v, i) => (
            <div
              key={v}
              className={cn(
                searchItemVariants({
                  className: i === 0 ? 'bg-fd-accent' : '',
                }),
              )}
            >
              <FileTextIcon className="size-4 text-fd-muted-foreground" />
              {v}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Highlights() {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-full flex flex-row items-start justify-center border-l border-t p-8 pb-2 text-center">
        <h2 className="bg-fd-primary text-fd-primary-foreground px-1 text-2xl font-semibold">
          亮点
        </h2>
        <MousePointer className="-ml-1 mt-8" />
      </div>

      <Highlight icon={TimerIcon} heading="轻量 & 快速。">
        基于 React Server Components，默认优化图片。
      </Highlight>

      <Highlight icon={RocketIcon} heading="框架无关。">
        使用 Next.js、React Router 或 Tanstack Start 构建文档站点。
      </Highlight>

      <Highlight icon={LayoutIcon} heading="优先考虑可访问性与体验。">
        专注于用户体验和无障碍设计。
      </Highlight>

      <Highlight icon={ServerIcon} heading="以服务器为先。">
        无缝集成 CMS，支持与服务器结合的动态内容。
      </Highlight>

      <Highlight icon={KeyboardIcon} heading="支持 Markdown & MDX。">
        提供 Shiki 语法高亮、Typescript Twoslash、OpenAPI 文档生成等功能。
      </Highlight>

      <Highlight icon={PersonStandingIcon} heading="个性化。">
        提供高级选项，让你轻松自定义主题。
      </Highlight>
    </div>
  );
}

function Highlight({
  icon: Icon,
  heading,
  children,
}: {
  icon: LucideIcon;
  heading: ReactNode;
  children: ReactNode;
}): React.ReactElement {
  return (
    <div className="border-l border-t px-6 py-12">
      <div className="mb-4 flex flex-row items-center gap-2 text-fd-muted-foreground">
        <Icon className="size-4" />
        <h2 className="text-sm font-medium">{heading}</h2>
      </div>
      <span className="font-medium">{children}</span>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative z-2 flex flex-col border-x border-t bg-fd-background/80 px-4 pt-12 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden overflow-hidden">
      <div
        className="absolute inset-0 z-[-1] blur-2xl hidden dark:block"
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent, white, transparent)',
          background:
            'repeating-linear-gradient(65deg, var(--color-blue-500), var(--color-blue-500) 12px, color-mix(in oklab, var(--color-blue-600) 30%, transparent) 20px, transparent 200px)',
        }}
      />
      <div
        className="absolute inset-0 z-[-1] blur-2xl dark:hidden"
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent, white, transparent)',
          background:
            'repeating-linear-gradient(65deg, var(--color-purple-300), var(--color-purple-300) 12px, color-mix(in oklab, var(--color-blue-600) 30%, transparent) 20px, transparent 200px)',
        }}
      />
      <h1 className="mb-8 text-4xl font-medium md:hidden">构建你的文档</h1>
      <h1 className="mb-8 max-w-[600px] text-4xl font-medium max-md:hidden">
        轻松构建出色文档
        <br />
        用更少的精力
      </h1>

      <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
        Fumadocs 是一个优美的开发者文档框架，灵活、高性能， 可在你的 React
        框架上运行。
      </p>

      <div className="inline-flex items-center gap-3 max-md:mx-auto">
        <Link
          href="/docs/ui"
          className={cn(
            buttonVariants({ size: 'lg', className: 'rounded-full' }),
          )}
        >
          快速开始
        </Link>
        <a
          href="https://stackblitz.com/~/github.com/fuma-nama/fumadocs-ui-template"
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            buttonVariants({
              size: 'lg',
              variant: 'outline',
              className: 'rounded-full bg-fd-background',
            }),
          )}
        >
          在 StackBlitz 中打开
        </a>
      </div>
      <PreviewImages />
    </div>
  );
}

const feedback = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/124599',
    user: 'shadcn',
    role: 'Shadcn UI 创始人',
    message: `你是否经历过每次开始新项目都得重建整个文档站点？  

Fumadocs 解决了这个问题，提供了你需要的所有模块，你只需组合即可。  

就像无头文档，让你精确构建所需内容。`,
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/35677084',
    user: 'Anthony Shew',
    role: 'Vercel Turbo DX',
    message: `特别感谢 @fuma_nama 制作了 Fumadocs，这个漂亮的文档框架能完美组合到 App Router 中。`,
  },
  {
    user: 'Aiden Bai',
    avatar: 'https://avatars.githubusercontent.com/u/38025074',
    role: 'Million.js 创始人',
    message: 'Fumadocs 是最棒的 Next.js 文档框架',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/10645823',
    user: 'David Blass',
    role: 'Arktype 创始人',
    message: `没有它，我根本不可能把 @arktypeio 的文档做得一半这么好 😍`,
  },
];

function Feedback() {
  return (
    <div className="relative border-x border-t pt-8 bg-fd-background">
      <div className="flex flex-row gap-6 justify-between px-6 mb-6 items-center">
        <p className="text-sm font-medium md:text-lg">
          受到优秀团队和开发者的信赖
        </p>
        <Link
          href="/showcase"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          展示案例
        </Link>
      </div>
      <Marquee className="pb-8 [mask-image:linear-gradient(to_right,transparent,white_20px,white_calc(100%-20px),transparent)]">
        {feedback.map((item) => (
          <div
            key={item.user}
            className="flex flex-col rounded-xl border bg-gradient-to-b from-fd-card p-4 shadow-lg w-[320px]"
          >
            <p className="text-sm whitespace-pre-wrap">{item.message}</p>

            <div className="mt-auto flex flex-row items-center gap-2 pt-4">
              <Image
                src={item.avatar}
                alt="avatar"
                width="32"
                height="32"
                unoptimized
                className="size-8 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">{item.user}</p>
                <p className="text-xs text-fd-muted-foreground">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

function Introduction(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2">
      <div className="flex flex-col gap-2 border-l border-t px-6 py-12 md:py-16">
        <div className={cn(badgeVariants())}>1</div>
        <h3 className="text-xl font-semibold">Create it.</h3>
        <p className="mb-8 text-fd-muted-foreground">通过命令初始化新文档</p>
        <CreateAppAnimation />
      </div>
      <div className="flex flex-col gap-2 border-l border-t px-6 py-12 md:py-16">
        <div className={cn(badgeVariants())}>2</div>
        <h3 className="text-xl font-semibold">Write.</h3>
        <p className="text-fd-muted-foreground">
          撰写内容，使用自动化工具并进行类型安全的数据验证
        </p>
        <div className="relative flex flex-col">
          <CodeBlock
            lang="mdx"
            wrapper={{
              className: 'absolute inset-x-2 top-0 shadow-lg',
            }}
            code={`---
title: My Documentation
---

## Introduction

Hello World
`}
          />
          <Files className="z-2 mt-40 shadow-xl">
            <Folder name="content" defaultOpen>
              <File name="index.mdx" />
              <File name="components.mdx" />
            </Folder>
          </Files>
        </div>
      </div>
      <div className="col-span-full flex flex-col items-center gap-2 border-l border-t px-6 py-16 text-center">
        <div className={cn(badgeVariants())}>3</div>
        <h3 className="text-2xl font-semibold">Ship.</h3>
        <p className="text-fd-muted-foreground">轻松将文档部署到任意托管平台</p>

        <div className="mt-4 flex flex-row flex-wrap items-center gap-8">
          <a href="https://vercel.com" rel="noreferrer noopener">
            <VercelLogo className="h-auto w-32" />
          </a>
          <a href="https://netlify.com" rel="noreferrer noopener">
            <NetlifyLogo className="h-auto w-32" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Contributing() {
  return (
    <div className="flex flex-col items-center border-x border-t px-4 py-16 text-center">
      <Heart fill="currentColor" className="text-pink-500 mb-4" />
      <h2 className="mb-4 text-xl font-semibold sm:text-2xl">因为有你而实现</h2>
      <p className="mb-4 text-fd-muted-foreground">
        Fumadocs 100% 由热情与开源社区驱动
      </p>
      <div className="mb-8 flex flex-row items-center gap-2">
        <Link
          href="/sponsors"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          赞助商
        </Link>
        <a
          href="https://github.com/fuma-nama/fumadocs/graphs/contributors"
          rel="noreferrer noopener"
          className={cn(buttonVariants({ variant: 'ghost' }))}
        >
          贡献者
        </a>
      </div>
      <ContributorCounter repoOwner={owner} repoName={repo} />
    </div>
  );
}

function Features() {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2">
      <Feature
        icon={PaperclipIcon}
        subheading="Source Agnostic"
        heading="内容由你掌控，自由选择"
        description={
          <>
            <span className="font-medium text-fd-foreground">
              设计可与任意内容源集成：
            </span>
            <span>
              Fumadocs 支持 MDX、Content Collections，甚至你自己的 CMS。
            </span>
          </>
        }
        className="overflow-hidden"
        style={{
          backgroundImage:
            'radial-gradient(circle at 60% 50%,var(--color-fd-secondary),var(--color-fd-background) 80%)',
        }}
      >
        <div className="mt-8 flex flex-col">
          <div className="flex flex-row w-fit bg-fd-secondary border rounded-full *:rounded-full">
            <a
              href="https://github.com/fuma-nama/fumadocs-basehub"
              rel="noreferrer noopener"
              target="_blank"
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              BaseHub CMS
            </a>
            <a
              href="https://github.com/fuma-nama/fumadocs-sanity"
              rel="noreferrer noopener"
              target="_blank"
              className={cn(buttonVariants({ variant: 'ghost' }))}
            >
              Sanity
            </a>
            <a
              href="https://github.com/MFarabi619/fumadocs-payloadcms"
              rel="noreferrer noopener"
              target="_blank"
              className={cn(buttonVariants({ variant: 'ghost' }))}
            >
              Payload CMS
            </a>
          </div>
          <Image
            alt="Source"
            src={SourceImage}
            sizes="600px"
            className="-mt-16 w-[400px] min-w-[400px] invert pointer-events-none dark:invert-0"
          />
          <div className="z-2 mt-[-170px] w-[300px] overflow-hidden rounded-lg border border-fd-foreground/10 shadow-xl backdrop-blur-lg">
            <div className="flex flex-row items-center gap-2 bg-fd-muted/50 px-4 py-2 text-xs font-medium text-fd-muted-foreground">
              <FileEditIcon className="size-4" />
              MDX 编辑器
            </div>
            <pre className="p-4 text-[13px]">
              <code className="grid">
                <span className="font-medium"># Hello World!</span>
                <span>This is my first document.</span>
                <span>{` `}</span>
                <span className="font-medium">{`<ServerComponent />`}</span>
              </code>
            </pre>
          </div>
        </div>
      </Feature>
      <Feature
        icon={SearchIcon}
        subheading="Search Integration"
        heading="让搜索体验更出色"
        description="轻松将 Orama Search 与 Algolia Search 集成到你的文档中"
      >
        <Link
          href="/docs/headless/search/algolia"
          className={cn(
            buttonVariants({ variant: 'outline', className: 'mt-4' }),
          )}
        >
          了解更多
        </Link>
        <Search />
      </Feature>
      <Feature
        icon={Terminal}
        subheading="Fumadocs CLI"
        heading="用于文档的 Shadcn UI"
        description="Fumadocs CLI 为你的文档创建交互式组件，为用户提供丰富的体验。"
      >
        <div className="relative">
          <div className="grid grid-cols-[1fr_2fr_1fr] h-[220px] *:border-fd-foreground/50 *:border-dashed mask-radial-circle mask-radial-from-white">
            <div className="border-r border-b" />
            <div className="border-b" />
            <div className="border-l border-b" />

            <div className="border-r" />
            <div className="w-[200px]" />
            <div className="border-l" />

            <div className="border-r border-t" />
            <div className="border-t" />
            <div className="border-l border-t" />
          </div>
          <code className="absolute inset-0 flex items-center justify-center">
            <code className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-fd-foreground font-medium">
              npx @fumadocs/cli add
            </code>
          </code>
        </div>
      </Feature>
      <Feature
        icon={CpuIcon}
        subheading="Robust"
        heading="灵活性，满足你的需求"
        description="文档完善，功能模块独立封装。"
      >
        <div className="mt-8 flex flex-col gap-4">
          <Link
            href="/docs/ui"
            className="rounded-xl bg-gradient-to-br from-transparent via-fd-primary p-px shadow-lg shadow-fd-primary/20"
          >
            <div className="rounded-[inherit] bg-fd-background bg-gradient-to-br from-transparent via-fd-primary/10 p-4 transition-colors hover:bg-fd-muted">
              <LayoutIcon />
              <h3 className="font-semibold">Fumadocs UI</h3>
              <p className="text-sm text-fd-muted-foreground">
                Fumadocs 默认主题，包含众多实用组件
              </p>
            </div>
          </Link>
          <Link
            href="/docs/headless"
            className="rounded-xl border bg-fd-background p-4 shadow-lg transition-colors hover:bg-fd-muted"
          >
            <LibraryIcon />
            <h3 className="font-semibold">Core</h3>
            <p className="text-sm text-fd-muted-foreground">
              无头库，提供实用工具集
            </p>
          </Link>
        </div>
      </Feature>
    </div>
  );
}

function Feature({
  className,
  icon: Icon,
  heading,
  subheading,
  description,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  icon: LucideIcon;
  subheading: ReactNode;
  heading: ReactNode;
  description: ReactNode;
}): React.ReactElement {
  return (
    <div
      className={cn('border-l border-t px-6 py-12 md:py-16', className)}
      {...props}
    >
      <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-fd-muted-foreground">
        <Icon className="size-4" />
        <p>{subheading}</p>
      </div>
      <h2 className="mb-2 text-lg font-semibold">{heading}</h2>
      <p className="text-fd-muted-foreground">{description}</p>

      {props.children}
    </div>
  );
}
