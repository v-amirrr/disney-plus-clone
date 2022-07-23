import React from 'react';

import styled from 'styled-components';

import Header from './Header';
import ImageSlider from './ImageSlider';

import { motion } from 'framer-motion';

const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, transition: { duration: 0.4, type: 'tween' } }
};

const AfterLogin = () => {
    return (
        <>
            <Header />
            <Page initial='hidden' animate='visible' exit='exit' variants={pageVariants}>
                <ImageSlider />
            </Page>
        </>
    );
};

const Page = styled(motion.div)`
    width: 100%;
    height: 100%;
    background-image: url("/images/home-background.png");
    background-size: 100% 100%;
    padding-top: 4rem;
`;

export default AfterLogin;