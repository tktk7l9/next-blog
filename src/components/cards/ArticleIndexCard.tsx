import { format } from "date-fns"
import Link from "next/link"
import React, { FC } from "react"
import { Article } from "types"

type Props = {
  article: Article
}

export const ArticleIndexCard: FC<Props> = (props): JSX.Element => {
  const {
    article: { id, title, publishedAt, category },
  } = props

  return (
    <Link href={`/blog/${id}`}>
      <a
        className="flex flex-col bg-white px-12 py-6 max-w-sm rounded-lg shadow-lg border border-gray-100 hover:bg-gray-50 dark:bg-gray-900 dark:border-gray-900"
        aria-label={title}
      >
        <div className="mt-4 text-lg text-gray-700 font-medium dark:prose-dark">{title}</div>
        <div className="flex justify-between items-center mt-4">
          {category ? (
            <div className="flex justify-center items-center">
              <div className="px-2 py-1 bg-gray-600 text-sm text-white rounded dark:prose-dark">
                {category.name}
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <span className="font-light text-sm text-gray-600 px-2 dark:prose-dark">
            {format(new Date(publishedAt), "yyyy/MM/dd")}
          </span>
        </div>
      </a>
    </Link>
  )
}
