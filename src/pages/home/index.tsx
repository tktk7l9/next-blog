import { Footer, Header, Meta, ProfileCard, SubContent } from "components"

export default function Home({}) {
  return (
    <>
      <Meta
        title="Portfolio"
        description="Takuya Saito | System Engineer."
        image="https://images.microcms-assets.io/protected/ap-northeast-1:12587faf-e507-4a34-8fbf-d773ad9ed641/service/tktk7l9/media/asakusashi_dance.jpg"
      />
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow max-w-3xl mx-auto my-10 px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <section className="flex-grow mx-auto mb-10">
            <ProfileCard />
          </section>
          <section className="flex-grow mx-auto mb-10">
            <SubContent />
          </section>
          {/* <section>
            <Title>Articles</Title>
            <PostList items={posts as PostItem[]} />
          </section> */}
        </main>
        <Footer />
      </body>
    </>
  )
}
