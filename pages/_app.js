import Head from 'next/head';
import Layout from '../components/Layout';

import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return (
        <>
        <Head>
            <meta ></meta>
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </>
    );
}