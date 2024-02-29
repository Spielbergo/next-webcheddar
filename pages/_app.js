import Head from 'next/head';
import Layout from '../components/Layout';
import NProgress from 'nprogress';
import Router from 'next/router';
import '../styles/global.css';

// Import the nprogress styles, or create a custom style in your global.css
import 'nprogress/nprogress.css';

// NProgress options
NProgress.configure({ showSpinner: true });

// Binding events for NProgress
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
