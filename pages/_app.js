import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import { useState, useEffect } from "react";
import styles from "../styles/Page.module.css";

function MyApp({ clicked, Component, pageProps }) {
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setSpinner(false);
  }, [pageProps]);
  return (
    <div>
      <Navbar clicked={() => setSpinner(true)}> </Navbar>
      {spinner ? <Spinner> </Spinner> : null}
      <div className={spinner ? styles.blur : null}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
