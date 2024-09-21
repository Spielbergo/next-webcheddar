import Head from 'next/head';
import { useRouter } from 'next/router';

import globalMeta from '../data/globalMeta';

export default function MetaHead ({
	title = globalMeta.siteName,
	// description = globalMeta.description,
	ogType = 'website',
	ogImgUrl = `${globalMeta.siteUrl}${globalMeta.siteLogo}`,
	// structuredData,
	children
}) {
	const router = useRouter();
	const canonicalUrl = `${globalMeta.siteUrl}${router.asPath}`;

	const structuredLd = JSON.stringify({
		"@context": "https://schema.org",
		"@type":[{"@type":"WebPage",
        "@id":`${globalMeta.siteUrl}${router.asPath}`,
        "url":`${globalMeta.siteUrl}${router.asPath}`,
        "name":`${globalMeta.siteName}`,
        "isPartOf":{"@id":"https://webcheddar.ca/#website"},
        "about":{"@id":"https://webcheddar.ca/#organization"},
        "primaryImageOfPage":{"@id":"https://webcheddar.ca/#primaryimage"},
        "image":{"@id":"https://webcheddar.ca/#primaryimage"},
        "thumbnailUrl":"https://webcheddar.ca/wp-content/uploads/2024/08/the-5-best-mascara-for-2024.jpg",
        "datePublished":"2020-12-12T00:09:05+00:00","dateModified":"2024-09-18T10:35:41+00:00",
        "description":`${globalMeta.description}`,
        "breadcrumb":{"@id":"https://webcheddar.ca/#breadcrumb"},
        "inLanguage":"en-CA",
        "potentialAction":[{"@type":"ReadAction",
        "target":[`${globalMeta.siteUrl}${router.asPath}`]}]}],
		
		"@type": "Organization",
		"name": `${globalMeta.siteName}`,
		"legalName" : `${globalMeta.siteLegalName}`,
		"url": `${globalMeta.siteUrl}${router.asPath}`,
		"logo": `${globalMeta.siteUrl}${globalMeta.siteLogo}`,
		"foundingDate": `${globalMeta.siteFoundingDate}`,
		"founders": {
		  "@type": "Person",
		  "name": `${globalMeta.siteOwner}`
		},
		"address": {
		  "@type": "PostalAddress",
		  "addressLocality": `${globalMeta.addressCity}`,
		  "addressRegion": `${globalMeta.addressRegion}`,
		  "postalCode": `${globalMeta.postalCode}`,
		  "addressCountry": `${globalMeta.addressCountry}`
		},
		"inLanguage":"en-CA",
		"contactPoint": {
		  "@type": "ContactPoint",
		  "contactType": `${globalMeta.contactType}`,
		  "email": `${globalMeta.supportEmail}-TEST`
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
    	{/* <meta name="description" content={description} /> */}
    	<link rel="canonical" href={canonicalUrl} />
    	<meta name="viewport" content="width=device-width, initial-scale=1" />
    	<link rel="icon" href="/favicon.ico" /> 
    	
		{/*	Open graph meta tags. */}
    	<meta property="og:locale" content="en_CA" />
    	<meta property="og:site_name" content={globalMeta.siteName} />
    	<meta property="og:type" content={ogType} />    	
		{/* <meta property="og:description" content={description} /> */}
    	<meta property="og:image" content={ogImgUrl} />
    	<meta property="og:url" content={canonicalUrl} />
 
    	{/* Structured data. */}
    	<script
            type="application/ld+json"
        	dangerouslySetInnerHTML={{__html: structuredLd}}
        	key="item-jsonld"
    	/>
		{/* <script
            type="application/ld+json"
        	content={structuredLd}
        	key="item-jsonld"
    	/> */}
    	{ children }
	</Head>
  )
}