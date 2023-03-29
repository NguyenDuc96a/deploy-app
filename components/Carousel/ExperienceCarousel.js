'use client'
import React from 'react';
import Carousel from "react-multi-carousel"
import { Grid, Typography, TextField, Button } from '@mui/material';
import "react-multi-carousel/lib/styles.css";
import './mycss.css'
import Image from 'next/image';
import Hinh from '../../../public/ico-1.png'
import Hinhanh from '../../../public/dji_0522.jpg'
import style from './carou.module.css'

const ExperienceCarousel = () => {
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
                max: 164,
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
            autoPlay={false}
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
            <div className={style.pl}>
                <Grid container xs={12} sm={12}  >

                    <Grid container item xs={12} sm={6} sx={{ padding: 3, background: '#fff' }}

                    >
                        <h1>Việt Long Hưng</h1>


                        <Grid container item xs={12} sm={12} mt={2} >
                            <Grid item container xs={12} sm={4}>
                                <Grid item sm={4}>
                                    <Image
                                        src={Hinh}
                                        alt="Icon"
                                        style={{
                                            display: 'block',
                                            height: 30,
                                            margin: 'auto',
                                            width: 30
                                        }}
                                    />
                                </Grid>
                                <Grid item sm={5} >

                                    <Typography> Công suất (kWp):</Typography>
                                    <Typography> 1,100</Typography>
                                </Grid>
                            </Grid>

                            <Grid item container xs={12} sm={4}>
                                <Grid item sm={4}>
                                    <Image
                                        src={Hinh}
                                        alt="Icon"
                                        style={{
                                            display: 'block',
                                            height: 30,
                                            margin: 'auto',
                                            width: 30
                                        }}
                                    />
                                </Grid>
                                <Grid item sm={5}>

                                    <Typography> Sản lượng (kWh/năm):

                                    </Typography>
                                    <Typography> 1,522,186</Typography>
                                </Grid>
                            </Grid>

                            <Grid item container xs={12} sm={4}>
                                <Grid item sm={4}>
                                    <Image
                                        src={Hinh}
                                        alt="Icon"
                                        style={{
                                            display: 'block',
                                            height: 30,
                                            margin: 'auto',
                                            width: 30
                                        }}
                                    />
                                </Grid>
                                <Grid item sm={5}>

                                    <Typography> Giảm thải CO2 (tấn/năm) :
                                    </Typography>
                                    <Typography> 1,006</Typography>
                                </Grid>
                            </Grid>
                        </Grid>



                        <Grid container item xs={12} sm={12} mt={2} >
                            <Typography fontSize={20} fontWeight={700} textAlign={'left'}>
                                GIỚI THIỆU DỰ ÁN ĐIỆN NĂNG LƯỢNG MẶT TRỜI VIỆT LONG HƯNG
                            </Typography>
                            <Grid item xs={12} sm={12} mt={2} textAlign={'left'} >

                                <Typography> Chủ đầu tư: Việt Long Hưng</Typography>
                                <Typography>Đơn vị cung cấp, lắp đặt: Công ty Cổ phần năng lượng TTC (TTC Energy)</Typography>
                                <Typography>Tiết kiệm: 25 tỷ VNĐ/25 năm</Typography>
                            </Grid>
                        </Grid>


                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Image
                            src={Hinhanh}
                            alt="Image"
                            style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                            }}
                        />

                    </Grid>
                </Grid>
            </div>




        </Carousel>
    )
}
export default ExperienceCarousel