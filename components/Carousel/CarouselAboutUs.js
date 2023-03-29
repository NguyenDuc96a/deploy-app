'use client'
import React from 'react';
import Carousel from "react-multi-carousel"
import { Grid, Typography, TextField, Button } from '@mui/material';
import "react-multi-carousel/lib/styles.css";

import Image from 'next/image';
import Hinh from '../../../public/tòa-nhà-ttc---gec.jpg'
import Hinhanh from '../../../public/ký-kết-họp-tác-ttc---gec.jpg'
const CarouselAboutUs = () => {
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

            <Grid container xs={12} sm={12}  >

                <Grid container item xs={12} sm={6} sx={{ padding: 5, background: '#fff', textAlign: 'left' }}

                >


                    <Grid item xs={12} sm={12} >
                        <Typography fontSize={30} >
                            TTC Energy 2013
                        </Typography>
                        <Typography sx={{ marginTop: 3 }}>
                            Với tiền thân là Công ty Cổ phần Điện Gia Lai (GEC) được thành lập từ năm 1989,
                            ngày 18/01/2013 GEC chính thức trở thành thành viên của Tập đoàn TTC -
                            một Tập đoàn kinh tế tư nhân đa ngành,
                            GEC được xác định là đơn vị tiên phong, hạt nhân của Tập đoàn trong lĩnh vực Năng lượng.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Image
                        src={Hinh}
                        style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }}
                    />

                </Grid>
            </Grid>

            <Grid container xs={12} sm={12}  >

                <Grid container item xs={12} sm={6} sx={{ padding: 5, background: '#fff', textAlign: 'left' }}

                >


                    <Grid item xs={12} sm={12} >
                        <Typography fontSize={30} >
                            TTC Energy 2016
                        </Typography>
                        <Typography sx={{ marginTop: 3 }}>
                            Ngày 30/6/2016, Tập đoàn TTC cùng với Tổ chức Tài chính Quốc tế (IFC) và Quỹ Năng lượng sạch
                            Armstrong (Singapore) đã chính thức ký kết hợp tác chiến lược vào
                            Công ty CP Điện Gia Lai đưa Công ty trở thành một nhà phát triển năng lượng
                            tái tạo kiểu mẫu tại Việt Nam.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Image
                        src={Hinhanh}
                        style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }}
                    />

                </Grid>
            </Grid>



        </Carousel>
    )
}
export default CarouselAboutUs