import { API } from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';
import useWindowSize from 'hooks/useWindowSize';
import { ReactElement, useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';

type Layout = 'sidebar' | 'stacked';
export default function Page2() {

    const { width, height } = useWindowSize();

    const [layout, setLayout] = useState<Layout>("sidebar");

    useEffect(() => {
        if (width < 600) {
            setLayout('stacked');
        } else {
            setLayout('sidebar');
        }
    }, [width]);

    return (
        <API
            apiDescriptionUrl="https://swagger-ui.kidsloop.net/config/api.swagger.json"
            router="history"
            hideTryIt
            layout={layout}
            basePath="/page2/"
        />
    );
}

Page2.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
