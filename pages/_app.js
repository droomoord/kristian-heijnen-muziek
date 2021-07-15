import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  console.log();

  return (
    <div>
      <Navbar> </Navbar>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
