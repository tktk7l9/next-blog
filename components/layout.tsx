import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Takuya Saito'
const twitter = 'Twitter'
const github = 'GitHub'
export const siteTitle = 'Takuya\'s Website'

export default function Layout({
    children,
    home
}: {
    children: React.ReactNode
    home?: boolean
}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                property="og:image"
                content={`https://og-image.now.sh/${encodeURI(
                    siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/profile.jpg"
                            className={`
                            ${styles.headerHomeImage} 
                            ${utilStyles.borderCircle}
                            `}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                        <a>
                            <img
                            src="/images/profile.jpg"
                            className={`
                            ${styles.headerImage} 
                            ${utilStyles.borderCircle}
                            `}
                            alt={name}
                            />
                        </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{name}</a>
                        </Link>
                        </h2>
                    </>
                    )}
                <div className={styles.shareSns}>
                    <ul>
                        <li>
                            <a
                                href="https://twitter.com/tktk7l9"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            <img
                                src="/images/twitter_logo.png"
                                className={`${styles.twitterImage} ${utilStyles.borderCircle}`} alt={twitter}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/tktk7l9"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            <img
                                src="/images/github_logo.png"
                                className={`${styles.githubImage} ${utilStyles.borderCircle}`} alt={github}
                            />
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}