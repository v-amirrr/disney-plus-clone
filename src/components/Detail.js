import React from 'react';

import Header from './Header';

import { useParams } from 'react-router';

import { useSelector } from 'react-redux';

import { FaPlay } from 'react-icons/fa';
import { TiGroup } from 'react-icons/ti';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 0.5, type: 'tween' } },
    exit: { opacity: 0, transition: { duration: 0.5, type: 'tween' } }
};

const Detail = () => {

    const { id } = useParams();
    const movies = useSelector(state => state.movieState);
    let data = "";

    Object.values(movies).map(movie => {
        movie.map(item => {
            if (item.id == id) {
                data = item;
            };
        });
    });

    return (
        <>
            <Header />
            {
                data
                &&
                <Page initial='hidden' animate='visible' exit='exit' variants={pageVariants}>
                    <Backgeound>
                        <img alt={data.title} src={data.backgroundImg} />
                    </Backgeound>

                    <BackgroundTitle>
                        <img alt={data.title} src={data.titleImg} />
                    </BackgroundTitle>

                    <Buttons>
                        <div>
                            <FaPlay />
                            <h4>play</h4>
                        </div>
                        <div>
                            <FaPlay color='#000' />
                            <h4>trailer</h4>
                        </div>
                        <span>+</span>
                        <span><TiGroup /></span>
                    </Buttons>

                    <SubTitle>{data.subTitle}</SubTitle>
                    <Description>{data.description}</Description>
                </Page>
            }
        </>
    );
};

const Page = styled(motion.div)`
    width: 100%;
    height: 100%;
    padding: 2rem;
    padding-top: 6rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;

const Backgeound = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.6;
    z-index: -5;

    img {
        width: 100%;
        height: 100%;
    }
`;

const BackgroundTitle = styled(motion.div)`
    width: 10rem;
    img {
        width: 100%;
        height: 100%;
    }
`;

const Buttons = styled(motion.div)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin: 2rem 0;
    user-select: none;

    div {
        padding: .5rem;
        border-radius: 4px;
        background-color: #ffffff33;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin: 0 .2rem;
        text-transform: uppercase;
        cursor: pointer;
        transition: background-color .3s, border-color .3s;
        border: 1px solid #ffffff00;

        &:hover {
            background-color: #ffffff11;
            border-color: #ffffff44;
        }
    }

    span {
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        font-size: 1.2rem;
        margin: 0 .2rem;
        background-color: #00000088;
        min-width: 2rem;
        min-height: 2rem;
        cursor: pointer;
        transition: background-color .3s;

        &:hover {
            background-color: #000000;
        }
    }
`;

const SubTitle = styled(motion.div)`
    line-height: 1.4;
    margin: 2rem 0;
`;

const Description = styled(motion.div)`
    line-height: 1.4;
    margin: 1rem 0;
    max-width: 30rem;
`;

export default Detail;