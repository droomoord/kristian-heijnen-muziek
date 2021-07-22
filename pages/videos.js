import PageLayout from "../components/PageLayout";
import axios from "axios";
import Head from "next/head";

const page = ({ pageContent }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Here you can find videos of Kristian Heijnen's music."
        />
      </Head>
      <PageLayout pageContent={pageContent}> </PageLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { data } = await axios.get(
    "https://strapi-wlh52.ondigitalocean.app/muziekpages?title=Videos"
  );

  return {
    props: {
      pageContent: data[0],
    },
  };
}

export default page;
