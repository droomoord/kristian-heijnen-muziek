import styles from "../styles/Utils.module.css";
import { useEffect, useState } from "react";

const Spinner = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 100);
  }, []);
  return loading ? <div className={styles.spinner}></div> : null;
};

export default Spinner;
