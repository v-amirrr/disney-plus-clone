import React, { useState } from 'react';

import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { RiAccountPinCircleFill } from 'react-icons/ri';

import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const navbarVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'tween', when: "beforeChildren", delayChildren: 0.5, staggerChildren: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.5, type: 'tween', when: "beforeChildren" } }
};

const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'tween' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5, type: 'tween' } }
};

const navbarMenuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, type: 'tween', staggerChildren: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.5, type: 'tween' } }
};

const navbarItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, type: 'tween' } },
    exit: { opacity: 0, transition: { duration: 0.5, type: 'tween' } }
};

const userSettingVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 80, y: 0, transition: { duration: 0.4, type: 'tween' } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.4, type: 'tween' } }
};

const Header = () => {

    const navigate = useNavigate();

    const [userSetting, setUserSetting] = useState(false);

    const user = useSelector(state => state.userState.user);

    const logout = () => {
        setUserSetting(false);
        navigate("/logout");
    };

    return (
        <>
            <Navbar initial='hidden' animate='visible' exit='exit' variants={navbarVariants}>
                <Logo src='/images/logo.svg' alt="Header Logo" variants={logoVariants} />
                {
                    user 
                    &&
                    <NavbarMenu variants={navbarMenuVariants}>
                        <Link to="/">
                            <NavbarMenuItem variants={navbarItemVariants}>
                                <img src='/images/home-icon.svg' />
                                <p>home</p>
                            </NavbarMenuItem>
                        </Link>

                        <NavbarMenuItem variants={navbarItemVariants}>
                            <img src='/images/search-icon.svg' />
                            <p>search</p>
                        </NavbarMenuItem>

                        <NavbarMenuItem variants={navbarItemVariants}>
                            <img src='/images/watchlist-icon.svg' />
                            <p>watchlist</p>
                        </NavbarMenuItem>

                        <NavbarMenuItem variants={navbarItemVariants}>
                            <img src='/images/original-icon.svg' />
                            <p>original</p>
                        </NavbarMenuItem>

                        <NavbarMenuItem variants={navbarItemVariants}>
                            <img src='/images/movie-icon.svg' />
                            <p>movie</p>
                        </NavbarMenuItem>

                        <NavbarMenuItem variants={navbarItemVariants}>
                            <img src='/images/series-icon.svg' />
                            <p>series</p>
                        </NavbarMenuItem>
                    </NavbarMenu>
                }
                
                {
                    user
                    ?
                    <User>
                        <UserButton whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.2 }} variants={logoVariants} onClick={() => setUserSetting(!userSetting)}>
                            {
                                user.photoURL
                                ?
                                <img src={user.photoURL ? user.photoURL : "/images/user.png"} alt="user photo" />
                                :
                                <i><RiAccountPinCircleFill /></i>
                            }
                        </UserButton>

                        <AnimatePresence>
                            {
                                userSetting
                                &&
                                <UserSetting variants={userSettingVariants} initial='hidden' animate='visible' exit='exit'>
                                    <div onClick={logout}>Log Out</div>
                                    <hr />
                                    <div className='red' onClick={() => setUserSetting(false)}>Close</div>
                                </UserSetting>
                            }
                        </AnimatePresence>
                    </User>
                    :
                    <Link to="/login">
                        <LoginButton variants={logoVariants} whileTap={{ scale: 0.9 }}>login</LoginButton>
                    </Link>
                }
            </Navbar>
        </>
    );
};

const Navbar = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    z-index: 3;
    padding: 1rem;
    position: fixed;
    inset: 0 0 0 0;
    height: 4rem;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: #00000088;
    transition: all .3s;
    user-select: none;

    &:hover {
    }
`;

const Logo = styled(motion.img)`
    max-width: 5rem;
    margin-bottom: .5rem;
`;

const NavbarMenu = styled.div`
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-left: 1rem;
    z-index: 4;

    @media (max-width: 968px) {
        display: none;
    }
`;

const NavbarMenuItem = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-right: 1.5rem;
    cursor: pointer;

    img {
        width: 1.2rem;
    }

    p {
        height: 100%;
        text-transform: uppercase;
        transition: all .3s;
        position: relative;
        font-size: .8rem;

        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            background-color: #fff;
            height: .1rem;
            width: 0;
            transition: all .3s;
        }
    }

    &:hover {
        p::before {
            width: 100%;
        }
    }
`;

const LoginButton = styled(motion.div)`
    text-transform: uppercase;
    cursor: pointer;
    background-color: #000;
    border: solid 1px #ffffff44;
    letter-spacing: 1px;
    padding: .5rem .8rem;
    border-radius: 6px;
    transition: border-color .3s;
    font-weight: 900;

    &:hover {
        border-color: transparent;
    }
`;

const User = styled(motion.div)`
    position: relative;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const UserButton = styled(motion.div)`
    border-radius: 50%;
    overflow: hidden;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
    overflow: hidden;

    img {
        width: 2.5rem;
        height: 2.5rem;
    }
`;

const UserSetting = styled(motion.div)`
    position: absolute;
    top: 100%;
    border-radius: 6px;
    margin-top: .5rem;
    width: 100%;
    height: 4rem;
    background-color: #222222aa;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: solid 1px #ffffff00;
    overflow: hidden;
    transition: border-color .3s;
    
    &:hover {
        border-color: #ffffff01;
    }

    hr {
        width: 100%;
        opacity: .5;
    }

    div {
        font-size: .8rem;
        width: 100%;
        height: 50%;
        text-align: center;
        cursor: pointer;
        transition: letter-spacing .3s, background-color .3s;
        font-weight: 900;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        
        &:hover {
            background-color: #000;
            letter-spacing: 1px;
        }
    }

    .red {
        color: red;
    }
`;

export default Header;