import axios from "axios";
import PageLayout from "../components/PageLayout";

export default function Home({ pageContent }) {
  return <PageLayout pageContent={pageContent}> </PageLayout>;
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
