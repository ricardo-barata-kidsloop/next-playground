import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface Props {
    children: ReactNode;
}

const Base = (props: Props) => {
    const { children } = props;
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Base;
