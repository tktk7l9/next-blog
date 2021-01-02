import React, { FC, useState, useEffect } from "react";
import { skills } from "@src/utils/skills";
import { HtmlIcon } from "./icons/HtmlIcon";
import {
  TypeScriptIcon,
  JavaScriptIcon,
  ReactIcon,
  CssIcon,
} from "./icons";

type Props = {
  name: typeof skills[number]["name"];
};

export const SkillIcon: FC<Props> = (props) => {
  const { name } = props;

  switch (name) {
    case "React":
      return <ReactIcon />;
    case "TypeScript":
      return <TypeScriptIcon />;
    case "JavaScript":
      return <JavaScriptIcon />;
    case "html":
      return <HtmlIcon />;
    case "css":
      return <CssIcon />;
    default:
      return null;
  }
};