import React from 'react';

import styled from 'styled-components';

import { Link } from "react-router-dom";

import { FcGoogle } from 'react-icons/fc';

import { motion } from 'framer-motion';

const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, transition: { duration: 0.4, type: 'tween' } }
};

const formItemsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, type: 'tween', staggerChildren: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.5, type: 'tween' } }
};

const formItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'tween' } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.5, type: 'tween' } }
};

const Login = () => {
    return (
        <>
            <Page initial='hidden' animate='visible' exit='exit' variants={pageVariants}>
                <Form variants={formItemsVariants}>
                    <FormHeader variants={formItemVariants}>login with your email</FormHeader>

                    <FormInputs variants={formItemVariants}>
                        <input variants={formItemVariants} type="email" placeholder='email' />
                        <input variants={formItemVariants} type="password" placeholder='password' />
                    </FormInputs>

                    <FormButton variants={formItemVariants} whileTap={{ scale: 0.9 }}>login</FormButton>
                    <FormGoogle variants={formItemVariants} whileTap={{ scale: 0.9 }}><span><FcGoogle /></span>login with google</FormGoogle>

                    <FormText variants={formItemVariants}>
                        New To Disney+ ? <Link to="/signup" className='link'>Create An Account</Link>
                    </FormText>
                </Form>
            </Page>
        </>
    );
};

const Page = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: absolute;
    inset: 0 0 0 0;
    user-select: none;
`;

const Form = styled(motion.div)`
    min-width: 30%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const FormHeader = styled(motion.div)`
    font-size: 1.5rem;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    white-space: nowrap;

    @media (max-width: 300px) {
        font-size: 1rem;
    }
`;

const FormInputs = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    input {
        all: unset;
        margin: .3rem;
        background-color: #222;
        padding: .4rem;
        border-radius: 4px;
        text-align: left;
        width: 80%;
        border: solid 1px #00000000;
        transition: border-color .3s;

        &:focus {
            border-color: #555;
        }

        &:not(:placeholder-shown) {
            border-color: #555;
        }
    }
`;

const FormButton = styled(motion.div)`
    text-transform: uppercase;
    margin-top: 1.5rem;
    background-color: #0063e5;
    cursor: pointer;
    letter-spacing: 1px;
    padding: .5rem .8rem;
    border-radius: 6px;
    transition: letter-spacing .3s, background-color .3s;
    font-weight: 900;
    min-width: 70%;

    &:hover {
        letter-spacing: 3px;
        background-color: #0483ee;
    }
`;

const FormGoogle = styled(motion.div)`
    font-weight: 900;
    min-width: 70%;
    white-space: nowrap;
    cursor: pointer;
    letter-spacing: 1px;
    padding: .5rem .8rem;
    border-radius: 6px;
    text-transform: capitalize;
    margin-top: .6rem;
    border: solid 1px #44444477;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    transition: background-color .3s;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        margin-right: .5rem;
    }
    
    &:hover {
        background-color: #080e28;
    }
    `;
    
const FormText = styled(motion.div)`
    margin-top: 1.5rem;
    font-size: .7rem;
`;

export default Login;