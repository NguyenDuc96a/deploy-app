'use client'
import { Grid, Typography, TextField, Button } from "@mui/material"
import Image from "next/image"
import Hinh1 from '../../../public/loi-ich1.png'
import Hinh2 from '../../../public/loi-ich2.png'
import Hinh3 from '../../../public/loi-ich3.png'
import Hinh4 from '../../../public/loi-ich5.png'
import Hinh5 from '../../../public/loi-ich6.png'
import Hinh6 from '../../../public/b-2.png'
const Benefit = () => {
    return (

        <Grid container xs={12} sm={12} sx={{ backgroundColor: '#fff' }}>

            <Grid xs={12} sm={5} item container>

                <Grid item container padding={5} >

                    <Typography >TẠI SAO NÊN SỬ DỤNG ĐIỆN MẶT TRỜI?</Typography>
                    <Typography fontSize={30} fontWeight={700}>LỢI ÍCH KHÁC BIỆT</Typography>

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
                            <Typography fontSize={16} fontWeight={700} sx={{ marginTop: 2 }}>LINH HOẠT CHI PHÍ ĐẦU TƯ</Typography>
                            <Typography>Nhận được đầu tư khi Doanh nghiệp có nhu cầu sử dụng nhưng chưa có
                                (hoặc chưa kịp phân bổ ngân sách) chi phí đầu tư ban đầu.</Typography>
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
                            <Typography fontSize={16} fontWeight={700} sx={{ marginTop: 2 }}>UY TÍN - CHẤT LƯỢNG</Typography>
                            <Typography>Cam kết chất lượng sản phẩm và Chế độ hậu mãi, bảo hành uy tín</Typography>
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
                            <Typography fontSize={16} fontWeight={700} sx={{ marginTop: 2 }}>KIỂM CHỨNG TIN CẬY</Typography>
                            <Typography>Thiết bị dùng cho hệ thống đã được
                                TTC Energy kiểm chứng thông qua
                                chính các công trình do chính TTC Energy đầu tư.</Typography>
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
                            <Typography fontSize={16} fontWeight={700} sx={{ marginTop: 2 }}>30 NĂM KINH NGHIỆM</Typography>
                            <Typography>Kinh nghiệm triển khai các dự án Năng lượng điện trong và ngoài nước</Typography>
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

export default Benefit