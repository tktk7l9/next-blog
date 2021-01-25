import React, { FC } from "react"

type Props = {}

const qualifications = [
  {
    name:
      "Oracle Certified Java Programmer, Silver SE 8 (Oracle Certified Associate, Java SE 8 Programmer) 認定資格",
  },
  { name: "ITパスポート" },
  { name: "TOIEC 745点" },
]

export const QualificationList: FC<Props> = (props) => {
  const {} = props

  return (
    <div className="pb-8 prose">
      <ul>
        {qualifications.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
