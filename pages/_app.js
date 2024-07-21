// pages/_app.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ModalProvider } from '../contexts/ModalContext';
import Head from '../components/Meta.component';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation.component';
import Footer from '../components/Footer.component';
import NProgress from 'nprogress';
import Router from 'next/router';
import '../styles/global.css';
import 'nprogress/nprogress.css';

// NProgress options
NProgress.configure({ showSpinner: true });

// Binding events for NProgress
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }) {
    const router = useRouter();
    const [transitionStage, setTransitionStage] = useState('fade-out');

    const handleRouteChangeStart = () => {
        setTransitionStage('fade-out');
    };

    const handleRouteChangeComplete = () => {
        setTransitionStage('fade-in');
        applyAnimations();
    };

    useEffect(() => {
        applyAnimations();

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, [router.events]);

    useEffect(() => {
        setTransitionStage('fade-in');
    }, []);

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

    return (
        <>
            <Head />
            <ModalProvider>
                <Navigation />
                <div className={`page-transition ${transitionStage}`}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </div>
                <Footer />
            </ModalProvider>
        </>
    );
}
