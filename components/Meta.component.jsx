import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header.component';
import globalMeta from '../data/globalMeta';

export default function MetaHead ({
	title = globalMeta.siteName,
	description = globalMeta.description,
	ogType,
	ogImgUrl = globalMeta.siteLogo,
	structuredData,
	children
}) {
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
	<Head>
    	{/* Fundamental head elements. */}
    	<title>{ typeof title === 'string' ? title : globalMeta.siteName }</title>
    	<meta name="description" content={description} />
    	<link rel="canonical" href={canonicalUrl} />
    	<meta name="viewport" content="width=device-width, initial-scale=1" />
    	<link rel="icon" href="/favicon.ico" />
 
    	{/*	Open graph meta tags. */}
    	<meta property="og:locale" content="en_CA" />
    	<meta property="og:site_name" content={globalMeta.siteName} />
    	<meta property="og:type" content={ogType} />
    	<meta property="og:description" content={description} />
    	<meta property="og:image" content={ogImgUrl} />
    	<meta property="og:url" content={canonicalUrl} />
 
    	{/* Structured data. */}
    	{/* <script
            type="application/ld+json"
        	dangerouslySetInnerHTML={{__html: structuredData}}
        	key="item-jsonld"
    	/> */}
		<script
            type="application/ld+json"
        	content={structuredLd}
        	key="item-jsonld"
    	/>
    	{ children }
	</Head>
  )
}