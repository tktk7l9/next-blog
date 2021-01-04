import React, { FC } from "react";
import { GitHubGrass } from "../icons";

type Props = {};

export const SubContent: FC<Props> = (props) => {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <GitHubGrass />
      </div>
    </>
  );
};