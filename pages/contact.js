import PageLayout from "../components/PageLayout";
import axios from "axios";

const about = ({ pageContent }) => {
  return <PageLayout pageContent={pageContent}> </PageLayout>;
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
