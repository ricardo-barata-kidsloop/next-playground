import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
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
