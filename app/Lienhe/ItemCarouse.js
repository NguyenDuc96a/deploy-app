
'use client'
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
const ItemCarouse = () => {
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
            <Grid container xs={12} sm={12} style={{ backgroundColor: '#fff', marginTop: 15 }}  >

                <Grid item container xs={12} sm={4} padding={5} style={{ backgroundColor: '#f5f5f5' }}>
                    <Typography fontSize={23}>Công ty Cổ phần Năng lượng TTC Energy</Typography>
                    <Grid item xs={12} sm={12} >
                        <Typography>Tầng 9, Toà nhà TTC 253 Hoàng Văn Thụ, P.2, Q. Tân Bình, TP.HCM</Typography>

                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography>(+84) 908 515 511</Typography>

                    </Grid>


                </Grid>

                <Grid item container xs={12} sm={4} padding={5}  >
                    <Typography fontSize={23} >
                        Công Ty TNHH Năng lượng TTC  CAMPUCHIA, TTCE (CAMBODIA) CO., LTD</Typography>
                    <Grid item xs={12} sm={12} sx={{ marginTop: 3 }}>
                        <Typography>Sl Builing, 2nd Floor, #93 Preah Sihanouk
                            , Sangkat Chaktumuk, Khan Daun Penh, Phnom Penh, Cambodia</Typography>

                    </Grid>
                    <Grid item xs={12} sm={12} sx={{ marginTop: 3 }}>
                        <Typography>(+855) 317 397 979</Typography>

                    </Grid>


                </Grid>
                <Grid item container xs={12} sm={4}>

                </Grid>
            </Grid>



        </Carousel>
    )
}

export default ItemCarouse