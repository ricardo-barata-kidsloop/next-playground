import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export interface Props {
    title: string;
    subtitle: string;
}

const Hero = (props: Props) => {
    const { title, subtitle } = props;

    return (
        <Box
            paddingY={20}
            sx={{
                backgroundColor: `primary.dark`,
            }}
        >
            <Container>
                <Box display="flex">
                    <Box width="50%">
                        <Typography variant="h2" color="white">
                            {title}
                        </Typography>
                        <Typography color="white">{subtitle}</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
