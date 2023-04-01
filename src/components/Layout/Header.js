import { Fragment } from "react";

import Navbar from "../UI/Navbar";
import ContentHeader from "./ContentHeader";
import styles from "./Header.module.css";
import logoImage from "../../assets/perfil.jpg";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.flexContainer}>
          <img src={logoImage} alt="Logo" className={styles.logoImage} />
          <ContentHeader />
        </div>
        <div className={styles.navbarWrapper}>
          <Navbar />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
