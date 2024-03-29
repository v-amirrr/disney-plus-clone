import React, { useState } from 'react';

import useLogin from '../hooks/useLogin';

import { Link, Navigate } from "react-router-dom";

import { FcGoogle } from 'react-icons/fc';
import { IoIosEye } from 'react-icons/io';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, transition: { duration: 0.4, type: 'tween' } }
};

const formItemsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, type: 'tween', staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.5, type: 'tween' } }
};

const formItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'tween' } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.5, type: 'tween' } }
};

const Login = () => {

    const { loginWithGoogle, loginWithEmail } = useLogin();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordShow, setPasswordShow] = useState(false);

    const user = localStorage.getItem("user");

    return (
        <>
            {
                !user
                ?
                <Page initial='hidden' animate='visible' exit='exit' variants={pageVariants}>
                    <Form variants={formItemsVariants}>
                        <FormHeader variants={formItemVariants}>login with your email</FormHeader>

                        <FormInputs variants={formItemVariants}>
                            <FormInput><input variants={formItemVariants} type="email" placeholder='email' onChange={e => setEmail(e.target.value)} value={email} /></FormInput>
                            <FormInput>
                                <input variants={formItemVariants} type={passwordShow ? "text" : "password"} placeholder='password'  onChange={e => setPassword(e.target.value)} value={password} />
                                <FormInputPassword passwordShow={passwordShow}>
                                    <input type="checkbox" onChange={() => setPasswordShow(!passwordShow)} value={passwordShow} />
                                    <span><IoIosEye /></span>
                                </FormInputPassword>
                            </FormInput>
                        </FormInputs>

                        <FormButton variants={formItemVariants} whileTap={{ scale: 0.9 }} onClick={() => loginWithEmail(email, password)}>login</FormButton>
                        <FormGoogle variants={formItemVariants} whileTap={{ scale: 0.9 }} onClick={loginWithGoogle}><span><FcGoogle /></span>login with google</FormGoogle>

                        <FormText variants={formItemVariants}>
                            New To Disney+ ? <Link to="/signup" className='link'>Create An Account</Link>
                        </FormText>
                    </Form>
                </Page>
                :
                <Navigate replace to="/" />
            }
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
    margin-bottom: 1.5rem;
`;

const FormInput = styled(motion.div)`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: relative;

    input {
        all: unset;
        margin: .3rem 0;
        background-color: #121212aa;
        padding: .8rem;
        border-radius: 4px;
        text-align: left;
        width: 80%;
        width: 100%;
        transition: background .3s;
        
        &:focus {
            background-color: #121212;
        }

        &:not(:placeholder-shown) {
            background-color: #121212;
        }
    }
`;

const FormInputPassword = styled(motion.div)`
    position: absolute;
    right: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 2rem;
    height: 100%;

    input {
        position: absolute;
        inset: 0 0 0 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 3;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        font-size: 1.2rem;
        position: relative;
        width: 100%;
        height: 100%;

        &::before {
            position: absolute;
            content: "";
            width: ${props => (props.passwordShow ? "0" : "60%")};
            height: .1rem;
            transform: rotate(45deg);
            background-color: #fff;
            transition: all .3s;
        }
    }

    span > * {
        position: relative;

    }
`;

const FormButton = styled(motion.div)`
    text-transform: uppercase;
    margin-bottom: .6rem;
    background-color: #0063e5;
    cursor: pointer;
    letter-spacing: 1px;
    border-radius: 6px;
    transition: letter-spacing .3s, background-color .3s;
    font-weight: 900;
    width: 80%;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    &:hover {
        background-color: #0483ee;
    }
`;

const FormGoogle = styled(motion.div)`
    font-weight: 900;
    white-space: nowrap;
    cursor: pointer;
    letter-spacing: 1px;
    width: 80%;
    height: 2.5rem;
    border-radius: 6px;
    text-transform: capitalize;
    border: solid 1px #44444477;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    transition: background-color .3s, border .3s;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        margin-right: .5rem;
    }
    
    &:hover {
        border: solid 1px #44444400;
        background-color: #00000088;
    }
    `;
    
const FormText = styled(motion.div)`
    margin-top: 1.5rem;
    font-size: .7rem;
`;

export default Login;