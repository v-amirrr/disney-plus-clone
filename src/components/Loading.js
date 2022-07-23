import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { motion, AnimatePresence } from 'framer-motion';

import { useSelector } from "react-redux";

const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, type: 'tween' } },
    exit: { opacity: 0, transition: { duration: 0.5, type: 'tween' } }
};

const contentVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: 'tween' } },
    exit: { opacity: 0, scale: 0.7, transition: { duration: 0.5, type: 'tween' } }
};

const Loading = () => {

    const loading = useSelector(state => state.userState.loading);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (loading) {
            setShow(true);
        } else {
            setTimeout(() => {
                setShow(false);
            }, 500);
        }
    }, [loading]);

    return (
        <>
            <AnimatePresence key="loadingpage">
                {
                    show
                    &&
                    <Page variants={pageVariants} initial='hidden' animate='visible' exit='exit'>
                        <Loader variants={contentVariants}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                        </Loader>
                    </Page>
                }
            </AnimatePresence>
        </>
    );
};

const Page = styled(motion.div)`
    position: absolute;
    top: 0;
    z-index: 999;
    background-color: #00000055;
    backdrop-filter: blur(30px) saturate(180%);
    -webkit-backdrop-filter: blur(30px) saturate(180%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Loader = styled(motion.div)`
    position: relative;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        position: absolute;
        width: .7rem;
        height: .7rem;
        margin: auto;
        border-radius: 50%;
        background: #fff;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);

        &:nth-child(1) {
            left: 8px;
            animation: lds-ellipsis1 0.6s infinite;
        }
    
        &:nth-child(2) {
            left: 8px;
            animation: lds-ellipsis2 0.6s infinite;
        }
    
        &:nth-child(3) {
            left: 32px;
            animation: lds-ellipsis2 0.6s infinite;
        }
    
        &:nth-child(4) {
            left: 56px;
            animation: lds-ellipsis3 0.6s infinite;
        }
    }


    @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0);
            -webkit-transform: scale(0);
            -moz-transform: scale(0);
            -ms-transform: scale(0);
            -o-transform: scale(0);
        }
        100% {
            transform: scale(1);
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
        }
    }

    @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1);
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
        }
        100% {
            transform: scale(0);
            -webkit-transform: scale(0);
            -moz-transform: scale(0);
            -ms-transform: scale(0);
            -o-transform: scale(0);
        }
    }

    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0);
            -webkit-transform: translate(0, 0);
            -moz-transform: translate(0, 0);
            -ms-transform: translate(0, 0);
            -o-transform: translate(0, 0);
        }
        100% {
            transform: translate(24px, 0);
            -webkit-transform: translate(24px, 0);
            -moz-transform: translate(24px, 0);
            -ms-transform: translate(24px, 0);
            -o-transform: translate(24px, 0);
        }
    }
`;

export default Loading;