import { Inter } from 'next/font/google'
import { useRouter } from "next/router";
import FeaturedImage from "./FeaturedImage.component";
import Head from './MetaHead.component';
import Footer from "./Footer.component";
import Navigation from "./NavigationMobile.component";
import globalMeta from '../data/globalMeta';
import styles from "../styles/homepage.module.css";

const inter = Inter ({
  subsets: ['latin'],
  display: 'swap',
})

export default function Layout({ featuredImage, children }) {
  // const router = useRouter();
  

  // const structuredLd = JSON.stringify({
  //   "@context": "https://schema.org",
  //   "@type": "Organization",
  //   "name": "Web Cheddar - Websites - Social Media",
  //   "legalName" : "Web Cheddar - Websites - Social Media",
  //   "url": `${globalMeta.siteUrl}${router.asPath}`,
  //   "logo": `${globalMeta.siteUrl}/public/web-cheddar-logo-white.png"`,
  //   "foundingDate": "2019",
  //   "founders": [
  //   {
  //     "@type": "Person",
  //     "name": "Scott Sutherland"
  //   },
  //   {
  //   "@type": "Person",
  //     "name": ""
  //   } ],
  //   "address": {
  //     "@type": "PostalAddress",
  //     "addressLocality": "Toronto",
  //     "addressRegion": "ON",
  //     "postalCode": "M6J 3S8",
  //     "addressCountry": "CA"
  //   },
  //   "contactPoint": {
  //     "@type": "ContactPoint",
  //     "contactType": "customer support",
  //     "email": "info@webcheddar.ca"
  //   },
  //   "sameAs": [ 
  //     "http://www.facebook.com/webcheddar",
  //     "https://www.linkedin.com/company/web-cheddar/",
  // ]}

  // );

  return (
    <>
      {featuredImage}
      {children}
    </>
  );
}
