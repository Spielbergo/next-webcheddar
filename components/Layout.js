import { useRouter } from "next/router";

import Head from '../components/Meta.component';
import Navigation from "./Navigation.component";
import Footer from "./Footer.component";

import globalMeta from '../constants/globalMeta';
// import schema from '../components/Schema.component';

import styles from "../styles/home.module.css";

export default function Layout({ children }) {
  const router = useRouter();
  const canonicalUrl = `${globalMeta.siteUrl}${router.asPath}`;

  const structuredLd = JSON.stringify({
    "@context": `${globalMeta.siteUrl}${router.asPath}`,
    "description": "NextJs Head, a reliable guide for how to use it and what it's really for.",
  });

  return (
      <>
        <Head
          canonicalUrl = { canonicalUrl }
          structuredData = { structuredLd }
          title="Web Cheddar Web Solutions - webcheddar.ca"
          description="NextJs Head, a reliable guide for how to use it and what it's really for."
          ogType="website"
        />
        <Navigation />
            <main className={styles.main_tag}>{children}</main>
        <Footer />
      </>
    )
  }