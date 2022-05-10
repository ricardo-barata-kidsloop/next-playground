import  Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import  Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import React from 'react';

const Header = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/page1', undefined, { shallow: true });
    };

    return (
        <Box component="header" padding={2} position="absolute" width="100%">
            <Container maxWidth="lg">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex', color: 'white' },
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box>
                        <Button variant="contained" onClick={handleClick}>
                            Learn More
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
