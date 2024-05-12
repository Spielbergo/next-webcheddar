import Head from 'next/head';
import { useRouter } from 'next/router';

import globalMeta from '../constants/globalMeta';

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
    	<script
            type="application/ld+json"
        	dangerouslySetInnerHTML={{__html: structuredData}}
        	key="item-jsonld"
    	/>
    	{ children }
	</Head>
  )
}