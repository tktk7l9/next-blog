import { EmailIcon, GithubIcon, ProfileIcon, TwitterIcon } from "components"
import React, { FC } from "react"

type Props = {}

export const Profile: FC<Props> = (props) => {
  const {} = props

  return (
    <>
      <h2 className="text-2xl font-medium dark:text-gray-300">齋藤 拓也 | Takuya Saito</h2>
      <p className="mt-2 text-lg font-medium dark:text-gray-300">System Engineer</p>
      <p className="mt-2 text-base dark:text-gray-300">Next.js, TypeScriptをやっていく</p>
      <ul className="flex flex-row mt-4 pb-8 space-x-2">
        <ProfileIcon href="https://github.com/tktk7l9" name="github">
          <GithubIcon />
        </ProfileIcon>
        <ProfileIcon href="https://twitter.com/tktk7l9" name="twitter">
          <TwitterIcon />
        </ProfileIcon>
        <ProfileIcon href="mailto:saitotakuya0719@gmail.com" name="email">
          <EmailIcon />
        </ProfileIcon>
      </ul>
    </>
  )
}
