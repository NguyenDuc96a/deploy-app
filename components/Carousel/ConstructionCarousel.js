'use client'
import React from 'react';
import Carousel from "react-multi-carousel"
import { Grid, TextField, Button, Box, Typography, Paper, Divider } from '@mui/material';
import "react-multi-carousel/lib/styles.css";
import { ListItemText, ListItem, ListItemIcon } from "@mui/material"
import Hinh from '../../../public/3 (2).jpg'
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image'
import { useTheme } from '@mui/material/styles';
import zIndex from '@mui/material/styles/zIndex';
import { DataImage } from '@/lib/ListProduct/listDataImage';
const Service = [
    "Quận 3",
    "Diện tích mái lắp đặt 40 m2",
    "Công suất(kWp):6.21",
    "Sản lượng TB/tháng:800",

]


const ConstructionCarousel = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
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
            renderButtonGroupOutside={false}
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
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <Image
                        src={Hinh}
                        alt="Image"
                        style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'

                        }}
                    />
                </Grid>


                <Grid item position={matches ? 'absolute' : "relative"} width={matches ? 450 : '100vw'} height={matches ? 250 : '100vh'} ml={matches ? 30 : 0} mt={matches ? 10 : 0} zIndex={3}>

                    <Typography variant="h1" fontWeight={800}>01</Typography>
                    <Typography variant="h6">Khảo sát</Typography>
                    <Typography>Tiến hành khảo sát cơ sở hạ tầng và kết cấu vị trí lắp đặt để phục vụ phương án thiết kế, thi công. </Typography>
                    <Typography>Sử dụng thiết bị khảo sát hiện đại, giúp rút ngắn thời gian thực hiện với kết quả có độ chính xác cao.</Typography>

                </Grid>
            </Grid>
            {/* <Image
                src={Hinh}
                style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%'
                }}
            />
            <Image
                src={Hinh1}
                style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%'
                }}
            />
            <Image
                src={Hinh2}
                style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%'
                }}
            /> */}
        </Carousel >
    )
}
export default ConstructionCarousel