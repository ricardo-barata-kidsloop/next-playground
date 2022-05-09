import '@stoplight/elements/styles.min.css';
import { ReactElement } from 'react';
import Layout from '../components/Layout/Layout';

export default function Page3() {
    return <div>Boomakaja</div>;
}

Page3.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
