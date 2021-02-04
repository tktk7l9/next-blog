import React, { FC } from "react"

type Props = {}

export const Title: FC<Props> = (props) => {
  const { children } = props

  return (
    <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 mt-10 mb-8 dark:text-gray-500">
      {children}
    </h2>
  )
}
