# 🧸 jejugom-front

본 레포지토리는 Vue3, Vite, TypeScript, TailwindCSS, Storybook 기반의
프론트엔드 프로젝트입니다.

---

## 프로젝트 실행 순서

모든 패키지 매니저 툴은 pnpm으로 통일합니다.

| 명령어         | 설명                                     |
| -------------- | ---------------------------------------- |
| `pnpm install` | 프로젝트에서 필요한 라이브러리 설치      |
| `pnpm dev`     | 개발 서버 실행 (실시간 코드 반영)        |
| `pnpm build`   | 정식 배포용 파일 번들링 (dist 폴더 생성) |

## Storybook

> UI 컴포넌트를 독립적으로 개발하고 테스트하며 문서화하는 도구

```bash
pnpm storybook           # Storybook 실행
pnpm build-storybook     # 정적 파일로 빌드 (배포용)
```

## Tailwind CSS

> 클래스 기반으로 빠르게 UI를 구성할 수 있는 CSS 프레임워크

`main.css`를 기반으로 사용하는 테마를 작성합니다.

## TypeScript

> JavaScript에 정적 타입을 추가한 언어

```ts
function greet(name: string): string {
  return `안녕하세요, ${name}님!`;
}
```

---

## 디렉토리 구조

```
teamgom-front
├─ .prettierignore
├─ .prettierrc.json
├─ .storybook
│  ├─ main.ts
│  ├─ preview.ts
│  └─ vitest.setup.ts
├─ README.md
├─ env.d.ts
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ public
│  └─ favicon.ico
├─ src
│  ├─ App.vue
│  ├─ api
│  │  └─ index.ts
│  ├─ assets
│  │  ├─ icons
│  │  ├─ images
│  │  └─ main.css
│  ├─ components
│  │  ├─ buttons
│  │  ├─ cards
│  │  ├─ inputs
│  │  ├─ layouts
│  │  │  ├─ DefaultLayout.vue
│  │  │  ├─ Header.vue
│  │  │  └─ TabBar.vue
│  │  └─ modals
│  ├─ config
│  │  └─ index.ts
│  ├─ main.ts
│  ├─ pages
│  │  ├─ HomePage.vue
│  │  ├─ auth
│  │  ├─ etc
│  │  │  ├─ 404Page.vue
│  │  │  ├─ FailPage.vue
│  │  │  └─ LoadingPage.vue
│  │  ├─ event
│  │  ├─ jeungyeo
│  │  └─ nohoo
│  ├─ router
│  │  ├─ auth.ts
│  │  ├─ event.ts
│  │  ├─ index.ts
│  │  ├─ jeungyeo.ts
│  │  └─ nohoo.ts
│  ├─ stores
│  │  └─ auth.ts
│  ├─ stories
│  │  ├─ Button.stories.ts
│  │  ├─ Button.vue
│  │  ├─ Configure.mdx
│  │  ├─ Header.stories.ts
│  │  ├─ Header.vue
│  │  ├─ Page.stories.ts
│  │  ├─ Page.vue
│  │  ├─ assets
│  │  │  ├─ accessibility.png
│  │  │  ├─ accessibility.svg
│  │  │  ├─ addon-library.png
│  │  │  ├─ assets.png
│  │  │  ├─ avif-test-image.avif
│  │  │  ├─ context.png
│  │  │  ├─ discord.svg
│  │  │  ├─ docs.png
│  │  │  ├─ figma-plugin.png
│  │  │  ├─ github.svg
│  │  │  ├─ share.png
│  │  │  ├─ styling.png
│  │  │  ├─ testing.png
│  │  │  ├─ theming.png
│  │  │  ├─ tutorials.svg
│  │  │  └─ youtube.svg
│  │  ├─ button.css
│  │  ├─ header.css
│  │  └─ page.css
│  └─ util
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ vitest.shims.d.ts

```
