
import React from 'react';
import { Box, Button, Divider, Grid, Typography, IconButton, Toolbar, Item } from "@mui/material"
import Image from 'next/image';
import Hinh from '../../../public/hinh-anh-IT-service-la-gi-2.jpg'
import Link from 'next/link'
import style from './style.module.css'
const News = () => {
    return (
        <Grid container xs={12} sm={12} textAlign={'center'} sx={{ marginTop: 5, marginBottom: 4 }}>
            <Grid item xs={12} sm={12}>
                <Typography>MỚI NHẤT TỪ TTC ENERGY</Typography>
                <Typography fontSize={35} fontWeight={800}>TIN TỨC & SỰ KIỆN</Typography>

            </Grid>
            <Grid container xs={12} sm={12} item mt={3} spacing={2}>
                <Grid container item xs={12} sm={8}>
                    <Grid item xs={12} sm={6}  >
                        <Image
                            src={Hinh}
                            alt="Image"
                            style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%',

                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ backgroundColor: '#fff', padding: 5, textAlign: 'left' }}>
                        <Link href="ListNew/2" legacyBehavior >
                            <Typography fontSize={25} fontWeight={600} style={{ cursor: 'pointer' }}>
                                Việt Nam xuất khẩu thiết bị 5G sang Ấn Độ
                            </Typography >
                        </Link>
                        <Typography>
                            09/01/2023
                        </Typography>
                        <hr width="100%" size="5px" align="center" />

                        <Typography mt={3}>
                            Thiết bị IP Router do Tổng Công ty công nghiệp công nghệ cao Viettel
                            (Viettel High Tech)
                            phát triển được triển khai thử nghiệm mạng 5G đầu tiên tại Ấn Độ.
                        </Typography>
                    </Grid>
                </Grid>

                {/* <Grid container item xs={12} sm={4} >

                    <Grid container item sx={{
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }} >
                        <Grid item xs={6}>
                            <h3>TIN MỚI NHẤT</h3>
                        </Grid>
                        <Grid item xs={6}>
                            <Link href="/Tintuc" legacyBehavior >
                                <Button>Xem tất cả</Button>
                            </Link>
                        </Grid>

                    </Grid>
                    <Link href="/ListNew/1" legacyBehavior >
                        <Grid container item sx={{ backgroundColor: '#fff', cursor: 'pointer' }} >
                            <Grid item xs={4} sm={4} >
                                <h1>03</h1>
                                <Typography>01-2023</Typography>
                            </Grid>
                            <Grid item xs={8} sm={8} textAlign={'left'}>
                                <Typography>
                                    Viettel trong top đầu châu Á về 'điểm nhận thức tính bền vững'
                                </Typography>
                            </Grid>

                        </Grid>
                    </Link>
                    <Link href="/ListNew/3" legacyBehavior >
                        <Grid container item sx={{ backgroundColor: '#fff', cursor: 'pointer' }} >
                            <Grid item xs={4}>
                                <h1>20</h1>
                                <Typography>12-2022</Typography>
                            </Grid>
                            <Grid item xs={8} textAlign={'left'}>
                                <Typography>
                                    Chuyển đổi số mang về cho FPT gần 3.500 tỷ đồng trong 6 tháng
                                </Typography>
                            </Grid>

                        </Grid>
                    </Link>
                </Grid> */}
                <Grid container item xs={12} md={4} >

                    <Grid container item sx={{
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }} >
                        <Grid item xs={6}>
                            <Typography variant="h6" fontWeight={'bold'}>TIN MỚI NHẤT</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Link href="/Tintuc" legacyBehavior >
                                <Button variant="contained" color="success">Xem tất cả</Button>
                            </Link>
                        </Grid>

                    </Grid>


                    <Link href="/ListNew/3" legacyBehavior >

                        <Box border={2} mt={3} >
                            <div className={style.abc}>
                                <Grid container xs={12} md={12} justifyContent='center' alignItems={'center'} style={{ cursor: 'pointer' }}>
                                    <Grid item xs={4} md={4} textAlign='center'>
                                        <Typography variant="h6" >20</Typography>
                                        <Typography variant="h6" >12-2022</Typography>
                                    </Grid>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                    <Grid item xs={7} md={7} textAlign='center' style={{ cursor: 'pointer' }}>
                                        <Typography variant="h6" > Chuyển đổi số mang về cho FPT gần 3.500 tỷ đồng trong 6 tháng</Typography>

                                    </Grid>
                                </Grid>
                            </div>
                        </Box>

                    </Link>
                    <Link href="/ListNew/2" legacyBehavior >

                        <Box border={2} mt={3}>
                            <div className={style.abc}>
                                <Grid container xs={12} md={12} justifyContent='center' alignItems={'center'} style={{ cursor: 'pointer' }}>
                                    <Grid item xs={4} md={4} textAlign='center'>
                                        <Typography variant="h6" >09</Typography>
                                        <Typography variant="h6" >01/2023</Typography>
                                    </Grid>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                    <Grid item xs={7} md={7} textAlign='center' style={{ cursor: 'pointer' }}>
                                        <Typography variant="h6" > Việt Nam xuất khẩu thiết bị 5G sang Ấn Độ</Typography>

                                    </Grid>
                                </Grid>
                            </div>
                        </Box>

                    </Link>
                    <Link href="/ListNew/1" legacyBehavior >

                        <Box border={2} mt={3} >
                            <div className={style.abc}>
                                <Grid container xs={12} md={12} justifyContent='center' alignItems={'center'} style={{ cursor: 'pointer' }}>
                                    <Grid item xs={4} md={4} textAlign='center'>
                                        <Typography variant="h6" >03</Typography>
                                        <Typography variant="h6" >01-2023</Typography>
                                    </Grid>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                    <Grid item xs={7} md={7} textAlign='center' style={{ cursor: 'pointer' }}>
                                        <Typography variant="h6" > Viettel trong top đầu châu Á về 'điểm nhận thức tính bền vững'</Typography>

                                    </Grid>
                                </Grid>
                            </div>
                        </Box>


                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default News