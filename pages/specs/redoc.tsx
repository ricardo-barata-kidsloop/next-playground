import { ReactElement } from 'react';
import { RedocStandalone } from 'redoc';
import Layout from 'components/Layout/Layout';
import styles from 'styles/Home.module.scss';

export default function ApiRedoc() {
    return (
        <div className={styles.myRedoc}>
            <RedocStandalone
                specUrl="https://swagger-ui.kidsloop.net/config/api.swagger.json"
                options={{
                    theme: {
                        colors: {
                            primary: {
                                main: '#039dfc',
                            },
                        },
                    },
                }}
            />
        </div>
    );
}

ApiRedoc.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
