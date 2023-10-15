import Navigation from "./navigation.component";
import Footer from "./footer.component";

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