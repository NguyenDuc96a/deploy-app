'use client'
import { Grid, Typography, TextField, Button } from "@mui/material"
import Image from "next/image"
import Hinh1 from '../../../public/loi-ich1.png'
import Hinh2 from '../../../public/loi-ich2.png'
import Hinh3 from '../../../public/loi-ich3.png'
import Hinh4 from '../../../public/loi-ich5.png'
import Hinh5 from '../../../public/loi-ich6.png'
import Hinh6 from '../../../public/b-2.png'
const BenefitGD = () => {
    return (
        // <Grid xs={12} sm={12} justifyContent={'space-between'} sx={{

        //     backgroundImage: `url(${bg.src})`,
        //     height: 450,
        //     textAlign: 'center',
        //     alignItems: 'center'
        // }} >
        //     <Typography>LIÊN HỆ</Typography>
        //     <Typography>LIÊN HỆ</Typography>
        // </Grid>
        <Grid container xs={12} sm={12}
            sx={{
                background: '#fff',
                marginTop: 5,
                textAlign: 'left'
            }}
        >

            <Grid xs={12} sm={5} item container >

                <Grid item container padding={5} >

                    <Grid item sm={12} xs={12}>
                        <Typography >TẠI SAO NÊN SỬ DỤNG ĐIỆN MẶT TRỜI?</Typography>
                        <Typography fontSize={30} fontWeight={700}>LỢI ÍCH KHÁC BIỆT</Typography>
                    </Grid>

                    <Grid item container xs={12} sm={12} sx={{ marginTop: 3 }} spacing={3}>
                        <Grid item xs={6} sm={6}>
                            <Image
                                src={Hinh1}
                                alt="Icon"
                                style={{

                                    height: 80,
                                    margin: 'auto',
                                    width: 80
                                }}
                            />
                            <Typography fontSize={16} fontWeight={700} sx={{ marginTop: 2 }}>HOÀN VỐN NHANH</Typography>
                            <Typography>Trong vòng 1/5 thời gian vòng đời hệ thống</Typography>
                        </Grid>

                        <Grid item xs={6} sm={6}>
                            <Image
                                src={Hinh2}
                                alt="Icon"
                                style={{

                                    height: 80,
                                    margin: 'auto',
                                    width: 80
                                }}
                            />
                            <Typography fontSize={16} fontWeight={700} sx={{ marginTop: 2 }}>TIẾT KIỆM CHI PHÍ</Typography>
                            <Typography>Giảm gánh nặng cho phí điện hàng tháng</Typography>
                        </Grid>
                    </Grid>

                    <Grid item container xs={12} sm={12} sx={{ marginTop: 3 }} spacing={3}>
                        <Grid item xs={6} sm={6}>
                            <Image
                                src={Hinh3}
                                alt="Icon"
                                style={{

                                    height: 80,
                                    margin: 'auto',
                                    width: 80
                                }}
                            />
                            <Typography fontSize={16} fontWeight={700} sx={{ marginTop: 2 }}>TĂNG CHẤT LƯỢNG SỐNG</Typography>
                            <Typography>Giảm nhiệt, giảm tiếng ồn, tăng tuổi thọ mái nhà</Typography>
                        </Grid>

                        <Grid item xs={6} sm={6}>
                            <Image
                                src={Hinh4}
                                alt="Icon"
                                style={{

                                    height: 80,
                                    margin: 'auto',
                                    width: 80
                                }}
                            />
                            <Typography fontSize={16} fontWeight={700} sx={{ marginTop: 2 }}>TĂNG THU NHẬP</Typography>
                            <Typography>Từ sản lượng điện thừa hòa lưới EVN</Typography>
                        </Grid>
                    </Grid>

                    <Grid item container xs={12} sm={12} sx={{ marginTop: 3 }} spacing={3}>
                        <Grid item xs={6} sm={6}>
                            <Image
                                src={Hinh5}
                                alt="Icon"
                                style={{

                                    height: 80,
                                    margin: 'auto',
                                    width: 80
                                }}
                            />
                            <Typography fontSize={16} fontWeight={700} sx={{ marginTop: 2 }}>BẢO VỆ MÔI TRƯỜNG</Typography>
                            <Typography>Sử dụng năng lượng xanh bảo vệ môi trường, giảm CO2</Typography>
                        </Grid>

                        <Grid item xs={6} sm={6}>
                            <Image
                                src={Hinh5}
                                alt="Icon"
                                style={{

                                    height: 80,
                                    margin: 'auto',
                                    width: 80
                                }}
                            />
                            <Typography fontSize={16} fontWeight={700} sx={{ marginTop: 2 }}>NÂNG TẦM CUỘC SỐNG</Typography>
                            <Typography>Khẳng định lối sống văn minh và đẳng cấp gia đình</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            <Grid xs={12} sm={7} item
            >
                <Image
                    src={Hinh6}
                    alt="Image"
                    style={{
                        height: '100%',
                        margin: 'auto',
                        width: '100%',
                        backgroundSize: 'cover'
                    }}
                />
            </Grid>



        </Grid>
    )
}

export default BenefitGD