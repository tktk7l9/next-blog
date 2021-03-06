import {
  AboutItem,
  Footer,
  GitHubGrass,
  Header,
  Meta,
  Profile,
  QualificationList,
  SkillList,
  Title,
} from "components"
import { getBlog } from "lib"

const contents = [
  {
    title: "神奈川県立大和高等学校 卒業",
    date: "2011.03",
    url: "https://www.pen-kanagawa.ed.jp/yamato-h/",
  },
  {
    title: "立教大学 現代心理学部 入学",
    date: "2012.04",
    url: "https://www.rikkyo.ac.jp/undergraduate/cp/department_02.html",
  },
  {
    title: "カナダ語学留学",
    date: "2016.04 - 2017.01",
    url: "http://www.canpacificcollege.com/",
  },
  {
    title: "株式会社トラストリッジ - インターン",
    date: "2017.09 - 2018.03",
    body: "動画編集インターン。料理メディアの動画編集、イベント企画。",
    url: "https://www.trustridge.jp/",
  },
  {
    title: "立教大学 現代心理学部 卒業",
    date: "2018.03",
    url: "https://www.rikkyo.ac.jp/undergraduate/cp/department_02.html",
  },
  {
    title: "日本アイビーエム・ソリューション・サービス株式会社 入社",
    date: "2018.04 - 2019.10",
    body:
      "システムエンジニア。金融系をメインとしたシステム開発。スキルを身につけながらものづくりをしていきたいと思い、プログラミングを始める。",
    url: "https://www.ibm.com/jp-ja/about/subsidiaries/ijds",
  },
  {
    title: "株式会社トップゲート 入社",
    date: "2019.11 - 現在",
    body:
      "システムエンジニア。GCPをメインに使うシステム開発。新しい技術を業務で扱いたいと考え、転職する。",
    url: "https://www.topgate.co.jp/",
  },
]

export default function About() {
  return (
    <>
      <Meta title="About" description="Takuya Saito | System Engineer." image="" />
      <body className="flex flex-col min-h-screen dark:bg-black">
        <Header />
        <main className="animate-fadeIn flex-grow max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mb-10">
          <section className="border-b-2 border-gray-200 dark:border-gray-500">
            <Title>Profile</Title>
            <Profile />
          </section>
          <section className="border-b-2 border-gray-200 dark:border-gray-500">
            <Title>Contributions</Title>
            <GitHubGrass />
          </section>
          <section className="border-b-2 border-gray-200 dark:border-gray-500">
            <Title>Skills</Title>
            <SkillList />
          </section>
          <section className="border-b-2 border-gray-200 dark:border-gray-500">
            <Title>Qualifications</Title>
            <QualificationList />
          </section>
          <Title>Education ＆ Career</Title>
          <ul className="bg-gray-50 rounded-3xl p-2 sm:p-5 xl:p-6 dark:bg-gray-900">
            {contents.map((content, i) => (
              <AboutItem
                date={content.date}
                title={content.title}
                body={content.body}
                url={content.url}
                key={i}
                isLast={contents.length === i + 1}
                isFirst={i === 0}
              />
            ))}
          </ul>
        </main>
        <Footer />
      </body>
    </>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: string } }) => {
  const data = await getBlog()
  return {
    props: {
      contents: data.contents,
    },
  }
}
