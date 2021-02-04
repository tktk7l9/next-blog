import { Footer, Header, Meta } from "components"

export default function Top() {
  return (
    <>
      <Meta title="Top" description="Takuya Saito | System Engineer." image="" />
      <body className="dark:bg-black flex flex-col min-h-screen">
        <Header />
        <main className="animate-fadeIn flex-grow max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-10 flex items-center dark:text-gray-300">
          <p className="lg:text-6xl md:text-5xl sm:text-5xl">Takuya Saito's Portfolio</p>
        </main>
        <Footer />
      </body>
    </>
  )
}
