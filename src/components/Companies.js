import React from 'react';

import styled from 'styled-components';

import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 2.5, duration: 0.4, type: 'tween', staggerChildren: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.4, type: 'tween' } }
};

const itemsVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, transition: { duration: 0.4, type: 'tween' } }
};

const Companies = () => {
    return (
        <>
            <Section initial='hidden' animate='visible' exit='exit' variants={sectionVariants}>
                <motion.div variants={itemsVariants} whileHover={{ scale: 1.1 }}>
                    <img src='/images/viewers-disney.png' alt='companies images' />
                    <video autoPlay={true} loop={true} playsInline={true}>
                        <source src='/videos/1564674844-disney.mp4' type='video/mp4' />
                    </video>
                </motion.div>

                <motion.div variants={itemsVariants} whileHover={{ scale: 1.1 }}>
                    <img src='/images/viewers-pixar.png' alt='companies images' />
                    <video autoPlay={true} loop={true} playsInline={true}>
                        <source src='/videos/1564676714-pixar.mp4' type='video/mp4' />
                    </video>
                </motion.div>

                <motion.div variants={itemsVariants} whileHover={{ scale: 1.1 }}>
                    <img src='/images/viewers-marvel.png' alt='companies images' />
                    <video autoPlay={true} loop={true} playsInline={true}>
                        <source src='/videos/1564676115-marvel.mp4' type='video/mp4' />
                    </video>
                </motion.div>

                <motion.div variants={itemsVariants} whileHover={{ scale: 1.1 }}>
                    <img src='/images/viewers-starwars.png' alt='companies images' />
                    <video autoPlay={true} loop={true} playsInline={true}>
                        <source src='/videos/1608229455-star-wars.mp4' type='video/mp4' />
                    </video>
                </motion.div>

                <motion.div variants={itemsVariants} whileHover={{ scale: 1.1 }}>
                    <img src='/images/viewers-national.png' alt='companies images' />
                    <video autoPlay={true} loop={true} playsInline={true}>
                        <source src='/videos/1564676296-national-geographic.mp4' type='video/mp4' />
                    </video>
                </motion.div>
            </Section>
        </>
    );
};

const Section = styled(motion.div)`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media (max-width: 968px) {
        flex-direction: column;
    }

    div {
        position: relative;
        margin: 0 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        border-radius: 10px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        overflow: hidden;
        border: 3px solid rgba(249, 249, 249, 0.1);
        transition: border-color .3s;

        @media (max-width: 968px) {
            margin: 1rem;
        }

        img {
            width: 100%;
            height: 100%;
        }

        video {
            width: 100%;
            height: 100%;
            position: absolute;
            opacity: 0;
            transition: opacity .3s;
        }

        &:hover {
            border-color: rgba(249, 249, 249, 0.6);
            
            video {
                opacity: 1;
            }
        }
    }
`;

export default Companies;