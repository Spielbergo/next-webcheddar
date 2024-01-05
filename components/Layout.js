import Navigation from "./Navigation.component";
import Footer from "./Footer.component";

import styles from "../styles/home.module.css";

export default function Layout({ children }) {
    return (
      <>
        <Navigation />
            <main className={styles.main_tag}>{children}</main>
        <Footer />
      </>
    )
  }