import { API } from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';
import Layout from 'components/Layout/Layout';
import useWindowSize from 'hooks/useWindowSize';
import { ReactElement, useEffect, useState } from 'react';

type Layout = 'sidebar' | 'stacked';
export default function ApiElements() {

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
            basePath="/specs/elements/"
        />
    );
}

ApiElements.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
