import styles from "../styles/Drawer.module.css";

const Drawer = (props) => {
  return (
    <>
      <div className={styles.drawer}>{props.children}</div>
      <div className={styles.backdrop} onClick={props.close}></div>
    </>
  );
};
export default Drawer;
