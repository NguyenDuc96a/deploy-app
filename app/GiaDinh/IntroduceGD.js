'use client'
import { Grid, Typography } from "@mui/material"

const IntroduceGD = () => {
    return (

        <Grid container sx={{
            marginTop: 3,
            backgroundImage: "url(https://www.ttcenergy.vn/Data/Sites/1/media/giaiphap/bg-1.jpg) ",
            height: 500,
            padding: 5,
            textAlign: 'left'
        }}
            spacing={3}
        >
            <Grid item container xs={12} sm={5} >
                <Grid item textAlign={'left'}


                >
                    <Typography fontSize={30} fontWeight={600} color={'#fff'} >Giải pháp doanh nghiệp</Typography>



                </Grid>

                <Grid item >
                    <Typography color={'#fff'}>
                        Hiện nay, hệ thống điện mặt trời mái nhà đã và đang trở nên rất phổ biến tại Việt Nam. Điện mặt trời
                        mái nhà không chỉ giúp các hộ gia đình tiết kiệm chi phí tiền điện sử
                        dụng hiện tại mà còn là một khoản đầu tư tài chính lâu dài trong tương lai.
                    </Typography>
                </Grid>

                <Grid item >
                    <Typography color={'#fff'}>
                        Với mức đầu tư cho hệ thống cho mỗi hộ gia đình từ khoảng 15 - 20 triệu
                        VNĐ/kWp (tùy theo vị trí lắp đặt và kết cấu mái),
                        thời gian hoàn vốn chỉ mất trung bình 5 - 6 năm.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography color={'#fff'}>
                        Vậy tại sao không sử dụng điện mặt trời ngay hôm nay?
                    </Typography>
                </Grid>
            </Grid>
            <Grid item sx={12} sm={6} >

            </Grid>
        </Grid>






    )
}

export default IntroduceGD