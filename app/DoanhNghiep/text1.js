'use client'
import { Button, Container, Grid, ListItemText, Paper, Stack, Typography, ListItemIcon } from '@mui/material';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import FolderIcon from '@mui/icons-material/Folder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Icon } from '@mui/material';

const Car = () => {
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


            <Grid container spacing={2} xs={12} sm={12} padding={5} >
                <Grid item xs={12} md={4} >
                    <Paper sx={{ minHeight: '70vh', background: '#1A61A2 ' }} >
                        <Stack spacing={2} padding={7} textAlign={'left'} color={'#fff'}>
                            <Typography fontSize={85} fontWeight={800} fontFamily={'Times New Roman'}> 01</Typography>
                            <Typography> Tập đoàn có thương hiệu 40 năm, với hơn 20 nhà máy năng lượng, thủy điện, điện sinh khối thuộc TTC Group.</Typography>
                            <Typography> TTC Energy với sự đồng hành của TTC Group đảm bảo quá trình bảo hành SPDV đến những năm cuối cùng của vòng đời sản phẩm.</Typography>

                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ minHeight: '70vh', background: '#1A61A2 ' }}>
                        <Stack spacing={2} padding={7} justifyContent="space-around" textAlign={'left'} color={'#fff'}>
                            <Typography fontSize={85} fontWeight={800} fontFamily={'Times New Roman'}> 02</Typography>
                            <Typography> Cam kết đồng hành cùng Khách hàng suốt 25 năm vòng đời sản phẩm.</Typography>
                            <Typography> TTC Energy với sự đồng hành của TTC Group đảm bảo quá trình bảo hành SPDV đến những năm cuối cùng của vòng đời sản phẩm.</Typography>

                        </Stack>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ minHeight: '70vh', background: '#1A61A2 ' }}>
                        <Stack spacing={2} padding={7} justifyContent="space-around" textAlign={'left'} color={'#fff'}>
                            <Typography fontSize={85} fontWeight={800} fontFamily={'Times New Roman'}> 03</Typography>
                            <Typography> Sự lựa chọn hàng đầu của nhiều thương hiệu uy tín như:</Typography>
                            <Typography> Việt Tiến, Co.op Mart, Galaxy, Đầm Sen, Novaland ... cũng như nhiều khu dân cư, hộ gia đình ....</Typography>

                        </Stack>
                    </Paper>
                </Grid>

            </Grid>

            <Grid container spacing={2} xs={12} sm={12} padding={5}>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ minHeight: '70vh', background: '#1A61A2 ' }}>
                        <Stack spacing={2} padding={7} justifyContent="space-around" textAlign={'left'} color={'#fff'}>
                            <Typography fontSize={85} fontWeight={800} fontFamily={'Times New Roman'}> 04</Typography>
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
                        <Stack spacing={2} padding={7} justifyContent="space-around" textAlign={'left'} color={'#fff'}>
                            <Typography fontSize={85} fontWeight={800} fontFamily={'Times New Roman'}> 05</Typography>
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

                <Grid item xs={12} md={4} >
                    <Paper sx={{ minHeight: '70vh', background: '#1A61A2 ' }}>
                        <Stack spacing={2} padding={7} justifyContent="space-around" textAlign={'left'} color={'#fff'}>
                            <Typography fontSize={85} fontWeight={800} fontFamily={'Times New Roman'}> 06</Typography>
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

            </Grid>

        </Carousel>
    )
}

export default Car