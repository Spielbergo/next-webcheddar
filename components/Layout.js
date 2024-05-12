import { Inter } from 'next/font/google'
import { useRouter } from "next/router";
import Header from "./Header.component";
import Head from '../components/Meta.component';
import Footer from "./Footer.component";
import Navigation from "./Navigation.component";
import globalMeta from '../constants/globalMeta';
import styles from "../styles/home.module.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Layout({ header, children, includeHead = true }) {
  const router = useRouter();
  const canonicalUrl = `${globalMeta.siteUrl}${router.asPath}`;

  const structuredLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Web Cheddar - Websites - Social Media",
    "legalName" : "Web Cheddar - Websites - Social Media",
    "url": `${globalMeta.siteUrl}${router.asPath}`,
    "logo": `${globalMeta.siteUrl}/public/web-cheddar-logo-white.png"`,
    "foundingDate": "2019",
    "founders": [
    {
      "@type": "Person",
      "name": "Scott Sutherland"
    },
    {
    "@type": "Person",
      "name": ""
    } ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "postalCode": "M6J 3S8",
      "addressCountry": "CA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "info@webcheddar.ca"
    },
    "sameAs": [ 
      "http://www.facebook.com/webcheddar",
      "https://www.linkedin.com/company/web-cheddar/",
 ]}

  );

  return (
    <>
      {includeHead && (
        <Head
          canonicalUrl = { canonicalUrl }
          structuredData = { structuredLd }
          title="Web Cheddar Web Solutions - webcheddar.ca"
          description="NextJs Head, a reliable guide for how to use it and what it's really for."
          ogType="website"
        />
      )}
      {/* <Navigation /> */}
      {header}
      {children}
      {/* <Footer /> */}
    </>
  );
}
