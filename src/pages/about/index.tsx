import { Article } from "../../types";
import { getBlog } from "../../lib/api";
import { Header, Title } from "../../components";
import { AboutItem } from "../../components/AboutItem";
import { SkillList } from "../../components/SkillList";
import { Meta } from "../../components/common/Meta";

const contents = [
    { title: "神奈川県立大和高等学校 卒業", date: "2012.03" },
    { title: "立教大学 現代心理学部 入学", date: "2012.04" },
    {
        title: "カナダ語学留学",
        date: "2016.04 - 2017.01",
    },
    {
        title: "株式会社トラストリッジ - インターン",
        date: "2017.09 - 2018.03",
        body:
         "動画編集インターン。料理メディアの動画編集、イベント企画。",
    },
    { title: "立教大学 現代心理学部 卒業", date: "2018.03" },
    {
        title: "日本アイビーエム・ソリューション・サービス株式会社 入社",
        date: "2018.04 - 2019.10",
        body:
        "システムエンジニア。金融系をメインとしたシステム開発。",
    },
    {
        title: "株式会社トップゲート 入社",
        date: "2019.11 - 現在",
        body:
        "システムエンジニア。GCPをメインに使うシステム開発。",
    },
];

export default function About() {
  return (
    <>
      <Meta
        title="Portfolio - about me"
        description="Takuya Saito | System Engineer."
        image="https://images.microcms-assets.io/protected/ap-northeast-1:12587faf-e507-4a34-8fbf-d773ad9ed641/service/tktk7l9/media/asakusashi_dance.jpg"
      />
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mb-10">
        <section className="border-b-2 border-gray-200">
          <Title>Skills</Title>
          <SkillList />
        </section>
        <Title>Education ＆ Career</Title>
        <ul className="bg-gray-50 rounded-3xl p-2 sm:p-5 xl:p-6">
          {contents.map((content, i) => (
            <AboutItem
              date={content.date}
              title={content.title}
              body={content.body}
              key={i}
              isLast={contents.length === i + 1}
              isFirst={i === 0}
            />
          ))}
        </ul>
      </main>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: string } }) => {
  const data = await getBlog();
  return {
    props: {
      contents: data.contents,
    },
  };
};
