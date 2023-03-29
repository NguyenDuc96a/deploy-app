'use client'
import { Button, Container, Grid, ListItemText, Paper, Stack, Typography, ListItemIcon } from '@mui/material';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";


const BusinessSolutionCarouselGD = () => {
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


            <Grid container spacing={3} xs={12} sm={12} padding={3} >
                <Grid item xs={12} md={6} >
                    <Paper sx={{ minHeight: '50vh', background: '#fff ' }} >
                        <Stack padding={7} justifyContent="space-around" textAlign={'left'}>
                            <Typography fontSize={30}>Diện tích mái: 65 m2</Typography>

                            <Grid item container xs={12} sm={12} sx={{ marginTop: 1 }} spacing={3}>
                                <Grid item xs={6} sm={6}>
                                    <Typography>Công suất điện</Typography>
                                    <Typography fontWeight={700}>1200 (kWh/tháng)</Typography>
                                </Grid>

                                <Grid item xs={6} sm={6}>
                                    <Typography>Số lượng Pin:</Typography>
                                    <Typography fontWeight={700}>30</Typography>
                                </Grid>
                            </Grid>

                            <Grid item container xs={12} sm={12} sx={{ marginTop: 1 }} spacing={2}>
                                <Grid item xs={6} sm={6}>
                                    <Typography>Thời gian hoàn vốn:</Typography>
                                    <Typography fontWeight={700}>5 năm</Typography>
                                </Grid>

                                <Grid item xs={6} sm={6}>
                                    <Typography>Đơn giá/kWp:</Typography>
                                    <Typography fontWeight={700}>15-20 triệu</Typography>

                                </Grid>
                            </Grid>

                            <Button fullWidth sx={{ marginTop: 3 }}  >Nhận báo giá</Button>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Paper sx={{ minHeight: '50vh', background: '#9c1519 ' }} >
                        <Stack padding={7} justifyContent="space-around" textAlign={'left'}>
                            <Typography fontSize={30}>Diện tích mái: 15 m2</Typography>

                            <Grid item container xs={12} sm={12} sx={{ marginTop: 1 }} spacing={3}>
                                <Grid item xs={6} sm={6}>
                                    <Typography>Công suất điện</Typography>
                                    <Typography fontWeight={700}>290 (kWh/tháng)</Typography>
                                </Grid>

                                <Grid item xs={6} sm={6}>
                                    <Typography>Số lượng Pin:</Typography>
                                    <Typography fontWeight={700}>7</Typography>
                                </Grid>
                            </Grid>

                            <Grid item container xs={12} sm={12} sx={{ marginTop: 1 }} spacing={2}>
                                <Grid item xs={6} sm={6}>
                                    <Typography>Thời gian hoàn vốn:</Typography>
                                    <Typography fontWeight={700}>6 năm</Typography>
                                </Grid>

                                <Grid item xs={6} sm={6}>
                                    <Typography>Đơn giá/kWp:</Typography>
                                    <Typography fontWeight={700}>15-20 triệu</Typography>

                                </Grid>
                            </Grid>

                            <Button fullWidth sx={{ marginTop: 3 }}  >Nhận báo giá</Button>
                        </Stack>
                    </Paper>
                </Grid>



            </Grid>

            {/* <Grid container spacing={5} xs={12} sm={12}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ minHeight: '70vh', background: '#1A61A2 ' }}>
                        <Stack spacing={2} padding={7} justifyContent="space-around" textAlign={'left'}>
                            <Typography variant="h1"> 04</Typography>
                            <Typography >
                                Thiết bị được lựa chọn với tiêu chuẩn nghiêm ngặt và được kiểm chứng qua chính những dự án do TTC Group đầu tư
                            </Typography>
                            <List sx={{ display: 'list-item' }}>

                                <ListItem
                                    sx={{
                                        padding: 0,
                                        listStyleType: "disc",
                                        display: "list-item",
                                    }}
                                >Cập nhật đa dạng thiết bị với công nghệ mới nhất </ListItem>

                                <ListItem
                                    sx={{
                                        padding: 0,
                                        listStyleType: "disc",
                                        display: "list-item",
                                    }}
                                >Nhà phân phối duy nhất dòng PIN thương hiệu SHARP - Nhật Bản tại Việt Nam.</ListItem>


                            </List>





                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ minHeight: '70vh', background: '#1A61A2 ' }}>
                        <Stack spacing={2} padding={7} justifyContent="space-around" textAlign={'left'}>
                            <Typography variant="h1"> 05</Typography>
                            <Typography>Dịch vụ chuyên nghiệp:</Typography>
                            <List sx={{ display: 'list-item' }}>

                                <ListItem
                                    sx={{
                                        padding: 0,
                                        listStyleType: "disc",
                                        display: "list-item",
                                    }}
                                >Tư vấn và khảo sát trong ngày </ListItem>

                                <ListItem
                                    sx={{
                                        padding: 0,
                                        listStyleType: "disc",
                                        display: "list-item",
                                    }}
                                >Lắp đặt an toàn và thẩm mỹ cao</ListItem>

                                <ListItem
                                    sx={{
                                        padding: 0,
                                        listStyleType: "disc",
                                        display: "list-item",
                                    }}
                                >Bảo hành, bảo dưỡng định kỳ</ListItem>

                                <ListItem
                                    sx={{
                                        padding: 0,
                                        listStyleType: "disc",
                                        display: "list-item",
                                    }}
                                >Hậu mãi nhanh chóng</ListItem>
                            </List>

                        </Stack>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ minHeight: '70vh', background: '#1A61A2 ' }}>
                        <Stack spacing={2} padding={7} justifyContent="space-around" textAlign={'left'}>
                            <Typography variant="h1"> 06</Typography>
                            <Typography> Hỗ trợ tín dụng cho Khách hàng thông qua hợp với các Ngân hàng Uy tín:</Typography>
                            <List sx={{ display: 'list-item' }}>

                                <ListItem
                                    sx={{
                                        padding: 0,
                                        listStyleType: "disc",
                                        display: "list-item",
                                    }}
                                >Sở hữu ngay hệ thống năng lượng mặt trời với 20% vốn. </ListItem>

                                <ListItem
                                    sx={{
                                        padding: 0,
                                        listStyleType: "disc",
                                        display: "list-item",
                                    }}
                                >Được vay lên đến 15 năm với lãi suất hấp dẫn cam kết từ Ngân hàng. </ListItem>


                            </List>

                        </Stack>
                    </Paper>
                </Grid>

            </Grid> */}

        </Carousel>
    )
}

export default BusinessSolutionCarouselGD