import '@stoplight/elements/styles.min.css';
import { ReactElement } from 'react';
import Layout from 'components/Layout/Layout';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

export default function ApiSwagger() {
    return (
        <SwaggerUI url="https://swagger-ui.kidsloop.net/config/api.swagger.json" />
    );
}

ApiSwagger.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
