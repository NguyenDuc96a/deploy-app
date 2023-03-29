
'use client'
import { Grid, Typography, TextField, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";

function Car(props) {
    return <h2>I am a {props.brand}!</h2>;
}
const BusinessSolutionCarousel = () => {
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

    const carName = "Ford";
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
            <Grid container xs={12} sm={12} style={{ marginTop: 15 }} padding={5}  >

                <Grid item container xs={12} sm={6} padding={5} style={{
                    backgroundColor: '#f5f5f5',
                }}>
                    <Typography fontSize={30}>Đầu tư hệ thống</Typography>

                    <Grid item container xs={12} sm={12} sx={{ marginTop: 1 }} spacing={3}>
                        <Grid item xs={6} sm={6}>
                            <Typography>Chi phí đầu tư hệ thống</Typography>
                            <Typography fontWeight={700}>15tr - 18tr/kWp</Typography>
                        </Grid>

                        <Grid item xs={6} sm={6}>
                            <Typography>Phí bảo trì, bảo dưỡng hệ thống:</Typography>
                            <Typography fontWeight={700}>Miễn phí lên đến 2 năm</Typography>
                        </Grid>
                    </Grid>

                    <Grid item container xs={12} sm={12} sx={{ marginTop: 1 }} spacing={2}>
                        <Grid item xs={6} sm={6}>
                            <Typography>Giá sử dụng điện</Typography>
                            <Typography fontWeight={700}>Tiết kiệm lên đến 25% chi phí điện hàng tháng</Typography>
                        </Grid>

                        <Grid item xs={6} sm={6}>
                            <Typography>Lợi ích</Typography>
                            <Typography fontWeight={700}>+ Sở hữu ngay hệ thống</Typography>
                            <Typography fontWeight={700}>+ Tăng doanh thu từ sản lượng điện bán cho EVN</Typography>
                        </Grid>
                    </Grid>

                    <Button fullWidth sx={{ marginTop: 3 }}  >Nhận báo giá</Button>
                </Grid>

                <Grid item container xs={12} sm={6} padding={5} style={{ backgroundColor: '#9c1519', color: '#fff' }}>
                    <Typography fontSize={30} fontWeight={700}>Đầu tư đối ứng</Typography>

                    <Grid item container xs={12} sm={12} sx={{ marginTop: 1 }} spacing={3}>
                        <Grid item xs={6} sm={6}>
                            <Typography>Chi phí đầu tư</Typography>
                            <Typography fontWeight={700}>Theo năng lực tài chính của Doanh nghiệp</Typography>
                        </Grid>

                        <Grid item xs={6} sm={6}>
                            <Typography>Phí vận hành và duy trì hệ thống</Typography>
                            <Typography fontWeight={700}>0 VNĐ</Typography>
                        </Grid>
                    </Grid>

                    <Grid item container xs={12} sm={12} sx={{ marginTop: 1 }} spacing={2}>
                        <Grid item xs={6} sm={6}>
                            <Typography>Giá sử dụng điện</Typography>
                            <Typography fontWeight={700}>Thấp hơn giá mua điện của EVN từ 10%</Typography>
                        </Grid>

                        <Grid item xs={6} sm={6}>
                            <Typography>Sở hữu hệ thống</Typography>
                            <Typography fontWeight={700}>Từ năm thứ 16*</Typography>

                        </Grid>
                    </Grid>

                    <Button fullWidth sx={{ marginTop: 3 }} >Nhận báo giá</Button>
                </Grid>

            </Grid>


        </Carousel>
    )
}

export default BusinessSolutionCarousel