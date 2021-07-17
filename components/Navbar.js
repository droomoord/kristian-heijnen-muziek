import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
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
    return (
      <li>
        <Link href={route.path}>
          <span className={router.pathname == route.path ? styles.active : ""}>
            {route.name}
          </span>
        </Link>
      </li>
    );
  });

  return (
    <nav className={styles.navbar}>
      <ul>{routesLoop}</ul>
    </nav>
  );
};

export default Navbar;
