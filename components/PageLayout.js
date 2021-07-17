import Head from "next/head";
import ReactMarkdown from "react-markdown";
import styles from "../styles/Page.module.css";

const PageLayout = ({ pageContent }) => {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Kris Heijnen - {pageContent.title}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>{pageContent.title}</h1>
            <ReactMarkdown className={styles.description}>
              {pageContent.text}
            </ReactMarkdown>
            ;
          </main>
        </div>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
};

export default PageLayout;
