'use client'
import React from 'react';
import Carousel from "react-multi-carousel"
import { Grid, TextField, Button, Box, Typography, Paper, Divider } from '@mui/material';
import "react-multi-carousel/lib/styles.css";
import { ListItemText, ListItem, ListItemIcon } from "@mui/material"
import Hinh from '../../../public/kh-q.tân-bình-2.jpg'
import Hinh1 from '../../../public/kh-quận-10---1.jpg'
import Hinh2 from '../../../public/kh-quận-11---1.jpg'
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


const ProjectCarousel = () => {
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
                <Grid item xs={3}>
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
                <Grid item xs={6}>
                    <Image
                        src={Hinh1}
                        alt="Image"
                        style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }}
                    />
                </Grid>
                <Grid item xs={3} >
                    <Image
                        src={Hinh2}
                        alt="Image"
                        style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }}
                    />
                </Grid>
                <Grid item position={matches ? 'absolute' : "relative"} width={matches ? 350 : '100vw'} height={matches ? 250 : '100vh'} ml={matches ? 30 : 0} mt={matches ? 15 : 0} zIndex={3}>
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h6" >Quận 9</Typography>
                        <Divider variant="middle" />
                        <Typography>Diện tích máy lắp đặt: 73.2 m2</Typography>
                        <Typography>Công suất(kWp): 13.43</Typography>
                        <Typography>Sản lượng TB/tháng: 1470 kwh</Typography>
                    </Paper>
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
export default ProjectCarousel