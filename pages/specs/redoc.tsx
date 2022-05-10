import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Layout from 'components/Layout/Layout';
import { ReactElement, useState } from 'react';
import { RedocStandalone } from 'redoc';

export default function ApiRedoc() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && (
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    marginTop={`25%`}
                >
                    <CircularProgress size={80} />
                </Box>
            )}
            <div style={{ display: isLoading ? `none` : `block` }}>
                <RedocStandalone
                    specUrl="https://swagger-ui.kidsloop.net/config/api.swagger.json"
                    onLoaded={() => setIsLoading(false)}
                    options={{
                        nativeScrollbars: true,
                        hideLoading: true,
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
        </>
    );
}

ApiRedoc.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
