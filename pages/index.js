import PageLayout from "../components/PageLayout";
import Head from "next/head";
import { fetchData } from "../functions/functions";

export default function Page({ pageContent }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="This is Kristian Heijnen's home page. Kristian is a guitar player based in Utrecht, the Netherlands."
        />
      </Head>
      <PageLayout pageContent={pageContent}> </PageLayout>
    </>
  );
}

export async function getStaticProps(context) {
  const data = await fetchData("Home");

  return {
    props: {
      pageContent: data,
    },
    revalidate: 600,
  };
}
