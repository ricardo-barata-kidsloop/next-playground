import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import type { ReactElement, ReactNode } from 'react';
import '../node_modules/nprogress/nprogress.css';
import '../styles/github-markdown.scss';
import '../styles/globals.scss';
type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    Router.events.on('routeChangeStart', (url) => {
        NProgress.configure({ showSpinner: false, speed: 500 });
        NProgress.start();
    });
    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());

    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(<Component {...pageProps} />);
}
