'use client'
import { Grid, Typography } from "@mui/material"
import CarouselAboutUs from '../../components/Carousel/CarouselAboutus'
import CustomizedTimeline from "./Customization"
const Introduce = () => {
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
        <Grid container xs={12} sm={12} sx={{
            backgroundImage: "url(https://www.ttcenergy.vn/Data/Sites/1/skins/default/img/bg-6.jpg) ",
            backgroundSize: 'cover',
            textAlign: 'center',
            marginTop: 3

        }} >
            <Grid xs={12} sm={12} item
            >
                <Typography fontSize={35} fontWeight={600} color={'#fff'} marginTop={10} >GIỚI THIỆU</Typography>

            </Grid>

            <Grid xs={12} sm={12} item>
                <Typography color={'#fff'}  >Năng lượng là nền tảng
                    cho sự tăng trưởng và
                    phát triển của mọi ngành Kinh Tế - Xã Hội. </Typography>
            </Grid>

            <Grid xs={12} sm={12} item>
                <Typography color={'#fff'}>
                    Ra đời với sứ mệnh “Vì cộng đồng - Kiến tạo giá trị bền vững”,
                    Công ty Cổ phần Năng Lượng TTC (TTC Energy) tạo sự khác biệt từ chất lượng
                    sản phẩm đến tiêu chuẩn dịch vụ hàng đầu. TTC Energy cung cấp giải pháp tối ưu cho bài toán
                    thiếu hụt năng lượng với giá trị kinh tế cao, lâu dài và bền vững.
                </Typography>
            </Grid>

            <Grid xs={12} sm={12} item>
                <Typography color={'#fff'}>
                    Điện Mặt Trời Mái Nhà còn góp phần giảm thải khí C02, tiết kiệm tài nguyên
                    quốc gia. Từ đó, cùng với Đối Tác và Khách Hàng,
                    TTC Energy thể hiện trách nhiệm với môi trường và nâng cao
                    chất lượng đời sống cộng đồng.
                </Typography>
            </Grid>

            <Grid xs={12} sm={12} item>
                <CustomizedTimeline />
            </Grid>
        </Grid>
    )
}

export default Introduce