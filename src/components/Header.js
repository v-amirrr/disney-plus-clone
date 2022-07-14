import React from 'react';

import styled from 'styled-components';

const Header = () => {
    return (
        <>
            <Navbar>
                <Logo src='/images/logo.svg' alt="Header Logo" />
                <NavbarMenu>
                    <NavbarMenuItem>
                        <img src='/images/home-icon.svg' />
                        <p>home</p>
                    </NavbarMenuItem>

                    <NavbarMenuItem>
                        <img src='/images/search-icon.svg' />
                        <p>search</p>
                    </NavbarMenuItem>

                    <NavbarMenuItem>
                        <img src='/images/watchlist-icon.svg' />
                        <p>watchlist</p>
                    </NavbarMenuItem>

                    <NavbarMenuItem>
                        <img src='/images/original-icon.svg' />
                        <p>original</p>
                    </NavbarMenuItem>

                    <NavbarMenuItem>
                        <img src='/images/movie-icon.svg' />
                        <p>movie</p>
                    </NavbarMenuItem>

                    <NavbarMenuItem>
                        <img src='/images/series-icon.svg' />
                        <p>series</p>
                    </NavbarMenuItem>
                </NavbarMenu>
                <LoginButton>login</LoginButton>
            </Navbar>
        </>
    );
};

const Navbar = styled.div`
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

const Logo = styled.img`
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

const NavbarMenuItem = styled.div`
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

const LoginButton = styled.div`
    text-transform: uppercase;
    cursor: pointer;
    background-color: #000;
    border: solid 1px #ffffffaa;
    letter-spacing: 1px;
    padding: .5rem .8rem;
    border-radius: 6px;
    transition: all .3s;
    font-weight: 900;

    &:hover {
        background-color: #fff;
        color: #000;
        border-color: transparent;
    }
`;

export default Header;