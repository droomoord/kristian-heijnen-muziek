import axios from "axios";

export async function fetchData(title) {
  try {
    const { data } = await axios.get(
      `https://strapi-wlh52.ondigitalocean.app/muziekpages?title=${title}`
    );
    return data[0];
  } catch (error) {
    console.log(error);
    return false;
  }
}
