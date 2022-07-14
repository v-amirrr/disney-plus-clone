import React from 'react';

import styled from 'styled-components';

const HomePage = () => {
    return (
        <>
            <Page>
                <Content>
                    <TopLogo src="/images/cta-logo-one.svg" alt="Top Logo" />
                    <SingUpButton>get all there</SingUpButton>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 03/26/21, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </Description>
                    <BottomLogo src="/images/cta-logo-two.png" alt="Top Logo" />
                </Content>
            </Page>
        </>
    );
};

const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    position: absolute;
    inset: 0 0 0 0;
    user-select: none;
`;

const Content = styled.div`
    width: 55%;
    text-align: center;
    margin-top: 2rem;

    @media (max-width: 900px) {
        width: 80%;
    }
`;

const TopLogo = styled.img`
    width: 95%;
    margin-bottom: 1rem;
`;

const SingUpButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: #0063e5;
    margin-bottom: 1rem;
    border-radius: 4px;
    padding: 1rem .4rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all .3s;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 900;

    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.div`
    text-align: center;
    font-size: .8rem;
    user-select: text;
    line-height: 1.5;
    letter-spacing: 1.5px;

    @media (max-width: 600px) {
        font-size: .5rem;
    }
`;

const BottomLogo = styled.img`
    width: 98%;
    margin-top: 1rem;
`;

export default HomePage;