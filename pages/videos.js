import PageLayout from "../components/PageLayout";
import Head from "next/head";
import { fetchData } from "../functions/functions";

export default function Page({ pageContent }) {
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
}

// export async function getStaticProps(context) {
//   const data = await fetchData("Videos");

//   return {
//     props: {
//       pageContent: data,
//     },
//     revalidate: 600,
//   };
// }
