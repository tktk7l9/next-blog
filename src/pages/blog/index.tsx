import { ArticleIndexCard, Footer, Header, Meta } from "components"
import { getBlog } from "lib"
import { Article } from "types"

export default function Blog({ contents }: { contents: Article[] }) {
  return (
    <>
      <Meta title="Blog" description="Takuya Saito | System Engineer." image="" />
      <body className="flex flex-col min-h-screen dark:bg-black">
        <Header />
        <main className="animate-fadeIn flex-grow max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-10 dark:bg-black">
          <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 ">
            {contents.map((article) => (
              <li key={article.id}>
                <ArticleIndexCard article={article} />
              </li>
            ))}
          </ul>
        </main>
        {/* <section>
            <Title>Articles</Title>
            <PostList items={posts as PostItem[]} />
          </section> */}
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
