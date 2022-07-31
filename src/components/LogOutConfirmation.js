import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { motion } from 'framer-motion';

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import useLogOut from "../hooks/useLogOut";

const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, type: 'tween' } },
    exit: { opacity: 0, transition: { duration: 0.5, type: 'tween' } }
};

const contentVariants = {
    hidden: { opacity: 0, scale: 0.7, y: -50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: 'tween' } },
    exit: { opacity: 0, scale: 0.7, y: 50, transition: { duration: 0.5, type: 'tween' } }
};

const LogOutConfirmation = () => {

    const navigate = useNavigate();

    const { logoutUser } = useLogOut();

    const user = useSelector(state => state.userState.user);

    return (
        <>
            <Page variants={pageVariants} initial='hidden' animate='visible' exit='exit'>
                <Content variants={contentVariants}>
                    <p>are you sure that you want to log out from your account?</p>
                    <Buttons>
                        <motion.div className='green' onClick={() => navigate("/")} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.2 }}>go home</motion.div>
                        <motion.div className='red' onClick={logoutUser} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.2 }}>logout</motion.div>
                    </Buttons>
                </Content>
            </Page>
        </>
    );
};

const Page = styled(motion.div)`
    position: absolute;
    top: 0;
    z-index: 4;
    background-color: #00000055;
    backdrop-filter: blur(30px) saturate(180%);
    -webkit-backdrop-filter: blur(30px) saturate(180%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Content = styled(motion.div)`
    backdrop-filter: blur(30px) saturate(180%);
    -webkit-backdrop-filter: blur(30px) saturate(180%);
    background-color: #ffffff13;
    padding: 2rem;
    border-radius: 4px;
    text-align: center;
    text-transform: capitalize;
`;

const Buttons = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 2rem;

    div {
        background-color: #00000099;
        padding: 1rem;
        border-radius: 6px;
        margin: 0 .5rem;
        text-transform: uppercase;
        font-weight: 900;
        cursor: pointer;
        user-select: none;
        transition: background-color .3s;
        white-space: nowrap;
    
        &:hover {
            background-color: #000000dd;
        }
    }

    .green {
        color: green;
    }

    .red {
        color: red;
    }
`;

export default LogOutConfirmation;