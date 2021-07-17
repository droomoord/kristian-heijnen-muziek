import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";

const Navbar = (props) => {
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
      <li key={route.path}>
        <Link href={route.path}>
          <span
            className={router.pathname == route.path ? styles.active : ""}
            onClick={props.clicked}
          >
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
