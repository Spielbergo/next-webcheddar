import { useRouter } from "next/router";
import Header from "./Header.component";
import Head from '../components/Meta.component';
import Footer from "./Footer.component";
import Navigation from "./Navigation.component";

import globalMeta from '../constants/globalMeta';
import styles from "../styles/home.module.css";

export default function Layout({ header, children }) {
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
      {/* <Navigation /> */}
      {header}
      {children}
      {/* <Footer /> */}
    </>
  );
}
