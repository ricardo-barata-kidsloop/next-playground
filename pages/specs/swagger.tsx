import Layout from 'components/Layout/Layout';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
import 'swagger-ui-react/swagger-ui.css';

export default function ApiSwagger() {
    const SwaggerUI = dynamic(import('swagger-ui-react'), { ssr: false });

    return (
        <SwaggerUI url="https://swagger-ui.kidsloop.net/config/api.swagger.json" />
    );
}

ApiSwagger.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
