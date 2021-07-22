import PageLayout from "../components/PageLayout";
import axios from "axios";
import Head from "next/head";

const about = ({ pageContent }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Here you can find how to get in touch with Kristian Heijnen."
        />
      </Head>
      <PageLayout pageContent={pageContent}> </PageLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { data } = await axios.get(
    "https://strapi-wlh52.ondigitalocean.app/muziekpages?title=Contact"
  );

  return {
    props: {
      pageContent: data[0],
    },
  };
}

export default about;
