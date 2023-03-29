
'use client'
import { Grid, Typography, TextField, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';

import StepButton from '@mui/material/StepButton';



const Stepper2 = () => {
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
    const LensIcon = (props) => {
        return (
            <svg width={24} height={24}>
                <path fill={props.color} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
        );
    };
    const StepIcon = ({ label, color = 'red', textColor = 'white', }) => (
        <div style={{ position: 'relative' }}>
            <LensIcon color={color} />
            <div style={{ color: textColor, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', textAlign: 'center', lineHeight: '24px' }}>{label}</div>
        </div>
    );

    return (
        <Carousel
            additionalTransfrom={0}
            arrows={true}
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
            renderDotsOutside={false}
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

            <Stepper linear={false} activeStep={1}>
                <Step key={1}>
                    <StepButton
                        icon={<StepIcon label={1} />}
                        onClick={() => console.log('Clicked')}
                    />
                    Activate powerloop
                </Step>
                <Step key={2}>
                    <StepButton
                        icon={<StepIcon label={2} />}
                        onClick={() => console.log('Clicked')}
                    />
                </Step>
                <Step key={3}>
                    <StepButton
                        icon={<StepIcon label={'A'} color={'red'} textColor={'white'} />}
                        onClick={() => console.log('Clicked')}
                    />
                </Step>
                <Step key={4}>
                    <StepButton
                        icon={<StepIcon label={'B'} color={'red'} textColor={'white'} />}
                        onClick={() => console.log('Clicked')}
                    />
                </Step>

                <Step key={5}>
                    <StepButton
                        icon={<StepIcon label={'C'} color={'red'} textColor={'white'} />}
                        onClick={() => console.log('Clicked')}
                    />
                </Step>
            </Stepper>

        </Carousel>
    )
}

export default Stepper2