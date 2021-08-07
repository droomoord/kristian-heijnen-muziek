import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import Drawer from "../components/Drawer";

const Navbar = (props) => {
  const [drawer, setDrawer] = useState(false);
  const router = useRouter();

  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Videos",
      path: "/videos",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const routesLoop = routes.map((route) => {
    const currentRoute = router.pathname === route.path;
    return (
      <li key={route.path} onClick={() => setDrawer(false)}>
        <Link href={route.path}>
          <a
            className={currentRoute ? styles.active : null}
            onClick={currentRoute ? null : props.clicked}
          >
            {route.name}
          </a>
        </Link>
      </li>
    );
  });

  return (
    <nav className={styles.navbar}>
      <ul className={styles.desktop}>{routesLoop}</ul>
      <div className={styles.bar}>
        <button className={styles.hamburger} onClick={() => setDrawer(!drawer)}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      {drawer ? (
        <Drawer close={() => setDrawer(false)}> {routesLoop} </Drawer>
      ) : null}
    </nav>
  );
};

export default Navbar;
