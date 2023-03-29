'use client'
import { Grid, Typography } from "@mui/material"

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
            marginTop: 5,
            backgroundImage: "url(https://www.ttcenergy.vn/Data/Sites/1/media/giaiphap/b-1.jpg) ",
            height: 600,
            padding: 5
        }}

        >
            <Grid xs={12} sm={5} item container
                sx={{ textAlign: 'left', padding: 5 }}
            >
                <Typography fontSize={35} fontWeight={600} color={'#fff'}  >Giải pháp doanh nghiệp</Typography>

                <Grid item xs={12} >
                    <Typography color={'#fff'} >
                        Hiện nay các nhà máy, xí nghiệp, công ty, nhà xưởng đang tiêu tốn
                        một lượng điện năng quá lớn. Chi phí phải trả cho hóa đơn tiêu thụ điện năng hàng
                        tháng chiếm một phần lớn chi phí sản xuất của doanh nghiệp. Một giải pháp ưu việt
                        để tiết kiệm chi phí đó chính là lắp đặt điện mặt trời cho doanh nghiệp.
                        Đây là hướng đi khoa học mang lại cho các doanh nghiệp sự tăng trưởng và phát triển bền vững.
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography color={'#fff'}>
                        Nhằm hướng đến tăng trưởng xanh và bền vững,
                        các doanh nghiệp tại Việt Nam đang lựa chọn giải pháp sử dụng năng lượng hiệu quả
                        từ điện năng lượng mặt trời hòa lưới.
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography color={'#fff'}>
                        Đừng để bị bỏ lại phía sau. Hãy tham gia sử dụng điện mặt trời ngay bây giờ!
                    </Typography>
                </Grid>
            </Grid>

            <Grid item sm={7}>

            </Grid>

        </Grid>


    )
}

export default Introduce