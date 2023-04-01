import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <a href="/blog" className={styles.navLink}>
            Blog
          </a>
        </li>
        <li>
          <a href="/sobre" className={styles.navLink}>
            Sobre
          </a>
        </li>
        <li>
          <a href="/descricao" className={styles.navLink}>
            Descrição
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
