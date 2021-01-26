import { Logo } from "components"
import Link from "next/link"
import React, { FC } from "react"

type Props = {}

export const Header: FC<Props> = (props) => {
  return (
    <header className="z-10 border-b border-gray-200 bg-white sticky top-0">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center">
          <Link href="/">
            <a className="block" aria-label="トップに移動">
              <Logo />
            </a>
          </Link>
        </div>
        <div className="flex text-sm">
          <Link href="/blog">
            <a
              className="font-medium text-gray-500 hover:text-gray-900"
              aria-label="ブログページに移動"
            >
              Blog
            </a>
          </Link>
          <Link href="/about">
            <a
              className="ml-4 font-medium text-gray-500 hover:text-gray-900 sm:ml-12"
              aria-label="aboutページに移動"
            >
              About
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}
