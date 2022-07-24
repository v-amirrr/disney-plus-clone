import React from 'react';

import styled from 'styled-components';

import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 3, duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, transition: { duration: 0.4, type: 'tween' } }
};

const Trending = () => {
    return (
        <>
          <Section initial='hidden' animate='visible' exit='exit' variants={sectionVariants}>
            <h4>trending</h4>
            <Items>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <img src='/images/viewers-marvel.png' alt='recommended images' />
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }}>
                    <img src='/images/viewers-marvel.png' alt='recommended images' />
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }}>
                    <img src='/images/viewers-marvel.png' alt='recommended images' />
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }}>
                    <img src='/images/viewers-marvel.png' alt='recommended images' />
                </motion.div>
            </Items>
          </Section>  
        </>
    );
};

const Section = styled(motion.div)`
    margin: 3rem 2rem;

    h4 {
        text-transform: capitalize;
    }
`;

const Items = styled(motion.div)`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 968px) {
        grid-template-columns: repeat(2, 1fr);
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
            margin: .5rem;
        }

        img {
            width: 100%;
            height: 100%;
        }

        &:hover {
            border-color: rgba(249, 249, 249, 0.6);
        }
    }
`;

export default Trending;