import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import globalMeta from '../data/globalMeta';

export default function MetaHead ({
	title = globalMeta.siteName,
	ogType = 'website',
	ogImgUrl = `${globalMeta.siteUrl}${globalMeta.siteLogo}`,
	children
}) {
	const router = useRouter();
	const canonicalUrl = `${globalMeta.siteUrl}${router.asPath}`;

	const structuredLd = JSON.stringify({
		"@context": "https://schema.org",		
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
		  "email": `${globalMeta.supportEmail}`
		},
		"sameAs": [ 
		  "http://www.facebook.com/webcheddar",
		  "https://www.linkedin.com/company/web-cheddar/"
	  ]}
	);

	const GA_TRACKING_ID = 'G-3YRS631DZE';
	
	useEffect(() => {
		const handleRouteChange = (url) => {
			window.gtag('config', GA_TRACKING_ID, {
				page_path: url,
			});
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

  return (
	<Head>
		{/* Google Analytics Script */}
		<Script
			strategy="afterInteractive"
			src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
			onLoad={() => {
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', GA_TRACKING_ID, {
					page_path: window.location.pathname,
				});
			}}
		/>
    	<title>{ title }</title>
    	<link rel="canonical" href={canonicalUrl} />
    	<meta name="viewport" content="width=device-width, initial-scale=1" />
    	<link rel="icon" href="/favicon.ico" />
    	<meta property="og:locale" content="en_CA" />
    	<meta property="og:site_name" content={globalMeta.siteName} />
    	<meta property="og:type" content={ogType} />
    	<meta property="og:image" content={ogImgUrl} />
    	<meta property="og:url" content={canonicalUrl} />
    	<script
            type="application/ld+json"
        	dangerouslySetInnerHTML={{ __html: structuredLd }}
    	/>
    	{ children }
	</Head>
  );
}
