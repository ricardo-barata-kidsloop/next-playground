import  Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React, { ReactNode } from 'react';

interface Props {
    bgcolor?: string;
    component?: React.ElementType;
    children: ReactNode;
}

const Section = (props: Props) => {
    const { bgcolor = 'white', component = 'section', children } = props;

    return (
        <Box component={component} p={8} bgcolor={bgcolor}>
            <Container>{children}</Container>
        </Box>
    );
};

export default Section;
