import { API } from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';
import { ReactElement } from 'react';
import Layout from '../components/Layout/Layout';

export default function Page2() {
    return (
        <API
            apiDescriptionUrl="https://swagger-ui.kidsloop.net/config/api.swagger.json"
            router="memory"
            hideTryIt
            layout="sidebar"
        />
    );
}

Page2.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
