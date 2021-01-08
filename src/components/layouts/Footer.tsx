import React, { FC } from "react";
import Link from "next/link";
import { Logo } from "../icons";

type Props = {};

export const Footer: FC<Props> = (props) => {
  return (
    <footer className="border-t border-gray-200 bg-white sticky top-0">
      <div className="p-2 text-center text-xs">
        Copyright © 2021 by Takuya Saito
      </div>
    </footer>
  );
};