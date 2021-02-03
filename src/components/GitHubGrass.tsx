import Image from "next/image"
import React, { FC } from "react"

type Props = {}

export const GitHubGrass: FC<Props> = (props) => {
  const {} = props

  return (
    <div className="pb-8">
      <a href="https://github.com/tktk7l9" target="_blank" rel="noopener noreferrer">
        <Image
          src={`https://grass-graph.moshimo.works/images/tktk7l9.png?background=none`}
          width={100}
          height={15}
          quality={100}
          layout="responsive"
          alt="w"
          className="hover:opacity-80"
        />
      </a>
    </div>
  )
}
