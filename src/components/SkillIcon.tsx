import React, { FC } from "react"
import { skills } from "utils"
import {
  CssIcon,
  GcpIcon,
  GolangIcon,
  HtmlIcon,
  JavaScriptIcon,
  NextjsIcon,
  PythonIcon,
  ReactIcon,
  TypeScriptIcon,
} from "./icons"

type Props = {
  name: typeof skills[number]["name"]
}

export const SkillIcon: FC<Props> = (props) => {
  const { name } = props

  switch (name) {
    case "React":
      return <ReactIcon />
    case "TypeScript":
      return <TypeScriptIcon />
    case "JavaScript":
      return <JavaScriptIcon />
    case "html":
      return <HtmlIcon />
    case "css":
      return <CssIcon />
    case "Golang":
      return <GolangIcon />
    case "Python":
      return <PythonIcon />
    case "Nextjs":
      return <NextjsIcon />
    case "Gcp":
      return <GcpIcon />
    default:
      return null
  }
}
