import React from 'react';

import styled from 'styled-components';

import { motion } from 'framer-motion';

const navbarVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'tween', when: "beforeChildren", delayChildren: 0.5, staggerChildren: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.5, type: 'tween' } }
};

const logoVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: 'tween' } },
    exit: { opacity: 0, transition: { duration: 0.5, type: 'tween' } }
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

const Header = () => {
    return (
        <>
            <Navbar initial='hidden' animate='visible' exit='exit' variants={navbarVariants}>
                <Logo src='/images/logo.svg' alt="Header Logo" variants={logoVariants} />
                <NavbarMenu variants={navbarMenuVariants}>
                    <NavbarMenuItem variants={navbarItemVariants}>
                        <img src='/images/home-icon.svg' />
                        <p>home</p>
                    </NavbarMenuItem>

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
                <LoginButton variants={logoVariants}>login</LoginButton>
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
    background-color: #000000aa;
    transition: all .3s;

    &:hover {
    background-color: #00000088;
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
    transition: all .3s;
    font-weight: 900;

    &:hover {
        letter-spacing: 1.5px;
        border-color: transparent;
    }
`;

export default Header;