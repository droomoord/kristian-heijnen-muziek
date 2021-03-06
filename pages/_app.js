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
    <>
      <Navbar clicked={() => setSpinner(true)}> </Navbar>
      <div className={styles.image} />
      {spinner ? <Spinner> </Spinner> : null}
      <div className={spinner ? styles.blur : null}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
