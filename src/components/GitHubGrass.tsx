import React, { FC } from "react"

type Props = {}

export const GitHubGrass: FC<Props> = (props) => {
  const {} = props

  return (
    <div className="pb-8">
      <a href="https://github.com/tktk7l9" target="_blank" rel="noopener noreferrer">
        <img
          src="https://grass-graph.moshimo.works/images/tktk7l9.png?background=none"
          alt="w"
          className="min-h-50 hover:opacity-80"
        />
      </a>
    </div>
  )
}
