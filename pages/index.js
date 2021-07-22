import axios from "axios";
import PageLayout from "../components/PageLayout";
import Head from "next/head";

export default function Home({ pageContent }) {
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

export async function getServerSideProps(context) {
  const { data } = await axios.get(
    "https://strapi-wlh52.ondigitalocean.app/muziekpages?title=Home"
  );

  return {
    props: {
      pageContent: data[0],
    },
  };
}
