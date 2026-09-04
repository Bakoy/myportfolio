import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siVuedotjs,
  siReact,
  siNextdotjs,
  siNuxt,
  siAngular,
  siNestjs,
  siExpress,
  siNodedotjs,
  siTailwindcss,
  siGit,
  siDocker,
  siFigma,
} from 'simple-icons'

export interface SkillIconData {
  path: string
  hex: string
  title: string
}

export const skillIcons: Record<string, SkillIconData> = {
  html5: { path: siHtml5.path, hex: siHtml5.hex, title: siHtml5.title },
  css3: { path: siCss.path, hex: siCss.hex, title: siCss.title },
  javascript: { path: siJavascript.path, hex: siJavascript.hex, title: siJavascript.title },
  typescript: { path: siTypescript.path, hex: siTypescript.hex, title: siTypescript.title },
  vuedotjs: { path: siVuedotjs.path, hex: siVuedotjs.hex, title: siVuedotjs.title },
  react: { path: siReact.path, hex: siReact.hex, title: siReact.title },
  nextdotjs: { path: siNextdotjs.path, hex: siNextdotjs.hex, title: siNextdotjs.title },
  nuxt: { path: siNuxt.path, hex: siNuxt.hex, title: siNuxt.title },
  angular: { path: siAngular.path, hex: siAngular.hex, title: siAngular.title },
  nestjs: { path: siNestjs.path, hex: siNestjs.hex, title: siNestjs.title },
  express: { path: siExpress.path, hex: siExpress.hex, title: siExpress.title },
  nodedotjs: { path: siNodedotjs.path, hex: siNodedotjs.hex, title: siNodedotjs.title },
  tailwindcss: { path: siTailwindcss.path, hex: siTailwindcss.hex, title: siTailwindcss.title },
  git: { path: siGit.path, hex: siGit.hex, title: siGit.title },
  docker: { path: siDocker.path, hex: siDocker.hex, title: siDocker.title },
  figma: { path: siFigma.path, hex: siFigma.hex, title: siFigma.title },
}
