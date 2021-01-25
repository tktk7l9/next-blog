import React, { FC } from "react"

type Props = {}

export const Footer: FC<Props> = (props) => {
  return (
    <footer className="bg-white sticky top-0">
      <div className="p-2 text-center text-xs">Copyright © 2021 by Takuya Saito</div>
    </footer>
  )
}
