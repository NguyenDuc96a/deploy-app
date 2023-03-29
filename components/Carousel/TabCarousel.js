import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Hinh from '../../../public/hinh123.jpg'
import Hinh1 from '../../../public/hinh2.png'
import Hinh2 from '../../../public/hinh3.png'
import Hinh3 from '../../../public/hinh4.png'
import Hinh4 from '../../../public/hinh5.png'
import { Box, Button, Divider, Grid, Typography, Link } from "@mui/material"
import Image from 'next/image';

function TabItem() {
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

            <Grid container xs={12} spacing={2}>
                <Grid item xs={12} sm={3}>
                    <Grid>
                        <Image
                            src={Hinh}
                            alt="Item"
                            style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                            }}
                        />

                    </Grid>
                    <Grid>
                        <Box sx={{ backgroundColor: '#fff' }}>
                            <Typography>Tấm pin năng lượng mặt trời Canadian 405 WP</Typography>
                            <Button>Xem chi tiết</Button>
                        </Box>

                    </Grid>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Grid>
                        <Image
                            src={Hinh}
                            alt="Item1"
                            style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                            }}
                        />

                    </Grid>
                    <Grid>
                        <Box sx={{ backgroundColor: '#fff' }}>
                            <Typography>Tấm pin năng lượng mặt trời Canadian 405 WP</Typography>
                            <Button>Xem chi tiết</Button>
                        </Box>

                    </Grid>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Grid>
                        <Image
                            src={Hinh}
                            alt="Item2"
                            style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                            }}
                        />

                    </Grid>
                    <Grid>
                        <Box sx={{ backgroundColor: '#fff' }}>
                            <Typography>Tấm pin năng lượng mặt trời Canadian 405 WP</Typography>
                            <Button>Xem chi tiết</Button>
                        </Box>

                    </Grid>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Grid>
                        <Image
                            src={Hinh}
                            alt="Item3"
                            style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                            }}
                        />

                    </Grid>
                    <Grid>
                        <Box sx={{ backgroundColor: '#fff' }}>
                            <Typography>Tấm pin năng lượng mặt trời Canadian 405 WP</Typography>
                            <Button>Xem chi tiết</Button>
                        </Box>

                    </Grid>
                </Grid>
            </Grid>






        </Carousel>
    )
}

function Tabitem() {
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

            <Grid container xs={12} spacing={2}>
                <Grid item xs={12} sm={3}>
                    <Grid>
                        <Image
                            src={Hinh1}
                            alt="Item4"
                            style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                            }}
                        />

                    </Grid>
                    <Grid>
                        <Box sx={{ backgroundColor: '#fff' }}>
                            <Typography>Bộ chuyển điện Sungrow SG5K-D-1 phase</Typography>
                            <Button>Xem chi tiết</Button>
                        </Box>

                    </Grid>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Grid>
                        <Image
                            src={Hinh2}
                            alt="Item5"
                            style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                            }}
                        />

                    </Grid>
                    <Grid>
                        <Box sx={{ backgroundColor: '#fff' }}>
                            <Typography>Bộ chuyển điện UNO-DM-5.0-TL-PLUS-SB-1- phase </Typography>
                            <Button>Xem chi tiết</Button>
                        </Box>

                    </Grid>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Grid>
                        <Image
                            src={Hinh3}
                            alt="Item6"
                            style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                            }}
                        />

                    </Grid>
                    <Grid>
                        <Box sx={{ backgroundColor: '#fff' }}>
                            <Typography>Bộ chuyển điện PSV-SX-100 kw 3 phase</Typography>
                            <Button>Xem chi tiết</Button>
                        </Box>

                    </Grid>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Grid>
                        <Image
                            src={Hinh4}
                            style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                            }}
                        />

                    </Grid>
                    <Grid>
                        <Box sx={{ backgroundColor: '#fff' }}>
                            <Typography>Bộ chuyển điện PSV-SX-100 kw 3 phase</Typography>
                            <Button >Xem chi tiết</Button>
                        </Box>

                    </Grid>
                </Grid>
            </Grid>




        </Carousel>
    )
}




function TabCarousel(props) {
    const isItem = props.isItem;
    if (isItem === 'item1') {
        return <TabItem />;
    }
    if (isItem === 'item2') {
        return <Tabitem />;
    }


}
export default TabCarousel