import React, { FC } from "react"
import { EmailIcon, GithubIcon, ProfileIcon, TwitterIcon } from "../../components"

type Props = {}

export const ProfileCard: FC<Props> = (props) => {
  const {} = props

  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow-lg rounded-lg border border-gray-200">
      <div className="shadow-xl border border-gray-200 rounded-full overflow-hidden h-40 w-40">
        <img src="/profile.jpg" alt="asakusa-shi" className="h-40 w-40 object-contain" />
      </div>

      <h2 className="mt-4 font-bold text-xl">たくなり | Takuya Saito</h2>
      <p className="mt-2 text-sm font-medium">System Engineer</p>

      <p className="text-xs text-gray-500 text-center mt-3">Next.js,TypeScriptをやっていく</p>

      <ul className="flex flex-row mt-4 space-x-2">
        <ProfileIcon href="https://github.com/tktk7l9" name="github">
          <GithubIcon />
        </ProfileIcon>
        {/* <ProfileIcon href="https://zenn.dev/tktk7l9"
        name="zenn"
        >
          <ZennIcon color="currentColor" />
        </ProfileIcon> */}
        <ProfileIcon href="https://twitter.com/tktk7l9" name="twitter">
          <TwitterIcon />
        </ProfileIcon>
        <ProfileIcon href="mailto:saitotakuya0719@gmail.com" name="email">
          <EmailIcon />
        </ProfileIcon>
      </ul>
    </div>
  )
}
