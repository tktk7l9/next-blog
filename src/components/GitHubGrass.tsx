import React, { FC } from "react"

type Props = {}

export const GitHubGrass: FC<Props> = (props) => {
  const {} = props

  return (
    <div className="flex items-center justify-between pb-8">
      <a href="https://github.com/tktk7l9" target="_blank" rel="noopener noreferrer">
        <img
          src="https://grass-graph.moshimo.works/images/tktk7l9.png"
          alt="w"
          className="hover:opacity-80"
        />
      </a>
    </div>
  )
}
