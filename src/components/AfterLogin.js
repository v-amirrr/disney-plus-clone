import React, { useEffect } from 'react';

import styled from 'styled-components';

import Header from './Header';
import ImageSlider from './ImageSlider';
import Companies from './Companies';
import Recommends from './Recommends';
import NewToDisney from './NewToDisney';
import Originals from "./Originals";
import Trending from "./Trending";

import useSetMovie from '../hooks/useSetMovie';

import { useSelector } from 'react-redux';

import { motion } from 'framer-motion';

const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, transition: { duration: 0.4, type: 'tween' } }
};

const AfterLogin = () => {

    const user = useSelector(state => state.userState.user);

    const { setMovies } = useSetMovie();

    useEffect(() => {
        setMovies();
    }, [user]);

    return (
        <>
            <Header />
            <Page initial='hidden' animate='visible' exit='exit' variants={pageVariants}>
                <ImageSlider />
                <Companies />
                <Recommends />
                <NewToDisney />
                <Originals />
                <Trending />
            </Page>
        </>
    );
};

const Page = styled(motion.div)`
    width: 100%;
    height: 100%;
    padding-top: 4rem;
    background-image: url("/images/home-background.png");
    background-repeat: no-repeat;
    background-size: cover;
`;

export default AfterLogin;