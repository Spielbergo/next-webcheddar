import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Router from 'next/router';
import Script from 'next/script';

import { ModalProvider } from '../contexts/ModalContext';

import MetaHead from '../components/MetaHead.component';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation.component';
import NavigationMobile from '../components/NavigationMobile.component';
import Footer from '../components/Footer.component';

import NProgress from 'nprogress';

import '../styles/global.css';
import 'nprogress/nprogress.css';

// NProgress options
NProgress.configure({ showSpinner: true });

// Binding events for NProgress
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// Google Analytics Tracking ID
const GA_TRACKING_ID = 'G-3YRS631DZE';

export default function App({ Component, pageProps }) {
    const router = useRouter();
    const [transitionStage, setTransitionStage] = useState('fade-out');
    const [isMobile, setIsMobile] = useState(false);

    const handleRouteChangeStart = () => {
        setTransitionStage('fade-out');
    };

    const handleRouteChangeComplete = (url) => {
        setTransitionStage('fade-in');
        applyAnimations();

        // Track pageview with Google Analytics
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        });
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
            {/* Google Analytics Script */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `}
            </Script>

            <MetaHead />
            <ModalProvider>
                {isMobile ? <NavigationMobile /> : <Navigation />}
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
