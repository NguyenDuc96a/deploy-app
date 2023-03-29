'use client'
import Image from 'next/image';
import React from 'react';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";

import Hinhanh from '../../../public/static/Banner/banner.jpg'
import Hinhanh1 from '../../../public/static/Banner/banner1.jpg'
import Hinhanh2 from '../../../public/static/Banner/banner2.jpg'
import Hinhanh3 from '../../../public/static/Banner/banner3.jpg'
const Carousel1 = () => {
    const Responsive = {
        // superLargeDesktop: {
        //     // the naming can be any, depends on you.
        //     breakpoint: { max: 4000, min: 200 },
        //     items: 1
        // },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 1
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 1
        }
    }
    return (

        <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            responsive={Responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            <Image
                src={Hinhanh}
                alt="Banner1"
                style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%'
                }}
            />
            <Image
                src={Hinhanh1}
                alt="Banner2"
                style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%'
                }}
            />

            <Image
                src={Hinhanh2}
                alt="Banner3"
                style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%'
                }}
            />

            <Image
                src={Hinhanh3}
                alt="Banner4"
                style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%'
                }}
            />


        </Carousel>
    )
}
export default Carousel1