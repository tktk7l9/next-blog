import { Footer, Header, Meta } from "components"

export default function Top() {
  return (
    <>
      <Meta
        title="Top"
        description="Takuya Saito | System Engineer."
        image="https://images.microcms-assets.io/protected/ap-northeast-1:12587faf-e507-4a34-8fbf-d773ad9ed641/service/tktk7l9/media/asakusashi_dance.jpg"
      />
      <body className="flex flex-col min-h-screen ">
        <Header />
        <main className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-10 flex items-center">
          <p className="lg:text-6xl md:text-5xl sm:text-6xl">Takuya Saito's Portfolio</p>
        </main>
        <Footer />
      </body>
    </>
  )
}
