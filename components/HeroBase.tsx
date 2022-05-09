import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import Hero, { Props as HeroProps } from './Hero';

interface Props {
    children: ReactNode;
    hero: HeroProps;
}

const HeroBase = (props: Props) => {
    const { hero, children } = props;

    return (
        <>
            <Header />
            <Hero {...hero} />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default HeroBase;
