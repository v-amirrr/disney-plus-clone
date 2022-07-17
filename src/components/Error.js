import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { motion, AnimatePresence } from 'framer-motion';

import { useSelector, useDispatch } from "react-redux";
import { setNewError } from '../redux/error/errorAction';

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

const Error = () => {

    const dispatch = useDispatch();

    const error = useSelector(state => state.errorState.error);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (error) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [error]);

    const close = () => {
        setShow(false);
        dispatch(setNewError(""));
    }

    return (
        <>
            <AnimatePresence key="errorpage">
                {
                    show
                    &&
                    <Page variants={pageVariants} initial='hidden' animate='visible' exit='exit'>
                        <Content variants={contentVariants}>
                            <p>{error}</p>
                            <motion.div whileTap={{ scale: 0.9 }} onClick={close}>OK</motion.div>
                        </Content>
                    </Page>
                }
            </AnimatePresence>
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

    p {
        margin-bottom: 2rem;
        text-transform: capitalize;
    }

    div {
        background-color: #00000099;
        padding: 1rem;
        border-radius: 6px;
        font-weight: 900;
        cursor: pointer;
        user-select: none;
        transition: background-color .3s;

        &:hover {
            background-color: #000000dd;
        }
    }
`;

export default Error;