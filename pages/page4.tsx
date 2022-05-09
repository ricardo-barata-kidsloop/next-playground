import '@stoplight/elements/styles.min.css';
import { ReactElement } from 'react';
import Layout from '../components/Layout/Layout';

export default function Page4() {
    return <div>Boomakaja</div>;
}

Page4.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
