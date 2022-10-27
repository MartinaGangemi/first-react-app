import React from 'react';
import {Carousel} from 'antd';
import carousel1 from '../../assets/img/carousel1.jpg';
import carousel2 from '../../assets/img/carousel2.jpg';
import carousel3 from '../../assets/img/carousel3.jpg';

const arrCarousel = [carousel1, carousel2, carousel3];

const Hero = () => {
    return (
        <Carousel autoplay>
            {arrCarousel.map((singleImg, index) => {
                const key = index + 1;
                return (
                    key,
                    (
                        <div className="carouselBlock">
                            <img src={singleImg} alt="" />
                        </div>
                    )
                );
            })}
        </Carousel>
    );
};

export default Hero;
