import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import styled from 'styled-components';
import { motion } from 'framer-motion';

const sliderVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: { opacity: 1, scaleX: 1, transition: { delay: 2, duration: 0.5, type: 'tween' } },
    exit: { opacity: 0, transition: { duration: 0.5, type: 'tween' } }
};

const ImageSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
    };

    return (
        <>
        <motion.div initial='hidden' animate='visible' exit='exit' variants={sliderVariants}>

            <Carousel {...settings}>
                <div>
                    <img src='/images/slider-badging.jpg' alt='image slider' />
                </div>
                
                <div>
                    <img src='/images/slider-scale.jpg' alt='image slider' />
                </div>

                <div>
                    <img src='/images/slider-badag.jpg' alt='image slider' />
                </div>

                <div>
                    <img src='/images/slider-scales.jpg' alt='image slider' />
                </div>
            </Carousel>
        </motion.div>
        </>
    );
};

const Carousel = styled(Slider)`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 4px;
    padding: 1rem;
    position: relative;
    
    div {
        border-radius: 4px;
        cursor: pointer;
        position: relative;
        width: 100%;
        height: 100%;
        padding: .1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        img {
            width: 100%;
            height: 50%;
            border-radius: 4px;
        }
    }

    & > button {
        opacity: 0;
        height: 100%;
        width: 2rem;
        margin: 0 1rem;
        z-index: 1;
        transition: opacity .3s;

        &:hover {
            opacity: 1;
        }
    }

    ul li button {
        &:before {
            color: rgb(150, 158, 171);
            transition: all .3s;
        }
    }

    li.slick-active button::before {
        color: #fff;
    }

    .slick-list {
        overflow: initial;
    }

`;

export default ImageSlider;