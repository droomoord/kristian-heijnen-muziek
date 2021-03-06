import Head from "next/head";
import ReactMarkdown from "react-markdown";
import styles from "../styles/Page.module.css";

const PageLayout = ({ pageContent }) => {
  return (
    <>
      <Head>
        {/* <title>Kristian Heijnen - {pageContent.title}</title> */}
        <title>Kristian Heijnen</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="google-site-verification"
          content="EtSzcDSJ7e3VDBHXTPyc1jBdbkOagufUiayq5Phigx0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {/* <div className={styles.containerFilter}></div>
        <main className={styles.main}>
          <h1 className={styles.title}>{pageContent.title}</h1>
          <ReactMarkdown className={styles.description}>
            {pageContent.text}
          </ReactMarkdown>
        </main> */}
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Under Construction!</h1>
        </div>
      </div>
    </>
  );
};

export default PageLayout;
