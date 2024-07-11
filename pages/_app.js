// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from '../components/Meta.component';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation.component';
import Footer from '../components/Footer.component';
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
    const router = useRouter();

    const applyAnimations = () => {
        const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-up, .slide-right, .slide-left, .fade-right, .fade-left, .slide-down, .fade-down');

        elementsToAnimate.forEach(el => el.classList.remove('visible'));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });

        elementsToAnimate.forEach(el => observer.observe(el));

        return () => {
            elementsToAnimate.forEach(el => observer.unobserve(el));
        };
    };

    useEffect(() => {
        applyAnimations();

        // Apply animations on route change
        router.events.on('routeChangeComplete', applyAnimations);

        // Cleanup event listener on unmount
        return () => {
            router.events.off('routeChangeComplete', applyAnimations);
        };
    }, [router.events]);

    return (
        <>
            <Head />
            <Navigation />
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Footer />
        </>
    );
}
