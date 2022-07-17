import React from 'react';

import styled from 'styled-components';

import Header from "./Header";

import { motion } from 'framer-motion';

const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, type: 'tween', when: "beforeChildren" } },
    exit: { opacity: 0, transition: { duration: 0.5, type: 'tween', when: "afterChidren" } }
};

const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, type: 'tween', staggerChildren: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.5, type: 'tween' } }
};

const pageItemsVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'tween' } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.5, type: 'tween' } }
};

const BeforeLogin = () => {
    return (
        <>
            <Header />

            <Page initial='hidden' animate='visible' exit='exit' variants={pageVariants}>
                <Content variants={contentVariants}>
                    <TopLogo src="/images/cta-logo-one.svg" alt="Top Logo" variants={pageItemsVariants}/>
                    <SingUpButton variants={pageItemsVariants} whileTap={{ scale: 0.9 }}>get all there</SingUpButton>
                    <Description variants={pageItemsVariants}>
                        Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 03/26/21, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </Description>
                    <BottomLogo src="/images/cta-logo-two.png" alt="Top Logo" variants={pageItemsVariants} />
                </Content>
            </Page>
        </>
    );
};

const Page = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    position: absolute;
    inset: 0 0 0 0;
    user-select: none;
`;

const Content = styled(motion.div)`
    width: 55%;
    text-align: center;
    margin-top: 2rem;

    @media (max-width: 900px) {
        width: 80%;
    }
`;

const TopLogo = styled(motion.img)`
    width: 95%;
    margin-bottom: 1rem;
`;

const SingUpButton = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: #0063e5;
    margin-bottom: 1rem;
    border-radius: 4px;
    padding: 1rem .4rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color .3s;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 900;

    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled(motion.div)`
    text-align: center;
    font-size: .8rem;
    user-select: text;
    line-height: 1.5;
    letter-spacing: 1.5px;

    @media (max-width: 600px) {
        font-size: .5rem;
    }
`;

const BottomLogo = styled(motion.img)`
    width: 98%;
    margin-top: 1rem;
`;

export default BeforeLogin;