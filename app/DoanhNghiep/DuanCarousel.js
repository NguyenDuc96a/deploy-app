'use client'
import { Button, Container, Grid, ListItemText, Paper, Stack, Typography, ListItemIcon } from '@mui/material';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import FolderIcon from '@mui/icons-material/Folder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Hinh from '../../../public/dji_0068.jpg'
import Hinh1 from '../../../public/dji_0514.jpg'
import Hinh2 from '../../../public/dji_0522.jpg'
import { Icon } from '@mui/material';
import styles from './styles.module.css';
const DuanCarousel = () => {
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
            arrows
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
            // showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >


            <Grid container spacing={2} xs={12} sm={12} padding={3} >
                <Grid item xs={12} md={4} >
                    <Paper sx={{ minHeight: '70vh', background: '#1A61A2 ' }} className={styles.main_container} >

                        <Image
                            src={Hinh}
                            alt="Image"
                            style={{
                                display: 'block',
                                height: 460,
                                margin: 'auto',
                                width: '100%'
                            }}
                        />
                        <Grid xs={12} sm={12} className={styles.overlay} textAlign={'left'} color={'#fff'}  >

                            <Typography sx={{ marginTop: 3, marginLeft: 3 }}>Nhà máy Kimdan-Củ chi</Typography>
                            <Typography sx={{ marginTop: 3, marginLeft: 3 }}>Địa điểm: Tp.Củ chi</Typography>
                            <Typography sx={{ marginLeft: 3 }}>Công suất (kwp):214.935</Typography>
                            <Typography sx={{ marginLeft: 3 }}>Sản lượng (kwp/năm):100000</Typography>
                            <Typography sx={{ marginLeft: 3 }}>Giảm thải CO2 (tấn/năm):192</Typography>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ minHeight: '70vh', background: '#1A61A2 ' }} className={styles.main_container} >

                        <Image
                            src={Hinh1}
                            alt="Image"
                            style={{
                                display: 'block',
                                height: 460,
                                margin: 'auto',
                                width: '100%'
                            }}
                        />
                        <Grid xs={12} sm={12} className={styles.overlay} textAlign={'left'} color={'#fff'}  >

                            <Typography sx={{ marginTop: 3, marginLeft: 3 }}>Nhà máy Kimdan-Củ chi</Typography>
                            <Typography sx={{ marginTop: 3, marginLeft: 3 }}>Địa điểm: Tp.Củ chi</Typography>
                            <Typography sx={{ marginLeft: 3 }}>Công suất (kwp):214.935</Typography>
                            <Typography sx={{ marginLeft: 3 }}>Sản lượng (kwp/năm):100000</Typography>
                            <Typography sx={{ marginLeft: 3 }}>Giảm thải CO2 (tấn/năm):192</Typography>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ minHeight: '70vh', background: '#1A61A2 ' }} className={styles.main_container} >

                        <Image
                            src={Hinh2}
                            alt="Image"
                            style={{
                                display: 'block',
                                height: 460,
                                margin: 'auto',
                                width: '100%'
                            }}
                        />
                        <Grid xs={12} sm={12} className={styles.overlay} textAlign={'left'} color={'#fff'}  >

                            <Typography sx={{ marginTop: 3, marginLeft: 3 }}>Nhà máy Kimdan-Củ chi</Typography>
                            <Typography sx={{ marginTop: 3, marginLeft: 3 }}>Địa điểm: Tp.Củ chi</Typography>
                            <Typography sx={{ marginLeft: 3 }}>Công suất (kwp):214.935</Typography>
                            <Typography sx={{ marginLeft: 3 }}>Sản lượng (kwp/năm):100000</Typography>
                            <Typography sx={{ marginLeft: 3 }}>Giảm thải CO2 (tấn/năm):192</Typography>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>



        </Carousel>
    )
}

export default DuanCarousel