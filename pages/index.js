import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Next.js, TypeScriptをやっていく</p>
        <p>
          Twitter: {' '}
          <a href="https://twitter.com/tktk7l9">@tktk7l9</a>
        </p>
      </section>
    </Layout>
  )
}
