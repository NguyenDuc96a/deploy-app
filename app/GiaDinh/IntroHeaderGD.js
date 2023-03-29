'use client'
import { Grid, Typography } from "@mui/material"

const IntroHeaderGD = () => {
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
        <Grid container xs={12}>
            <Grid xs={12} sm={12} item
                sx={{
                    backgroundImage: "url(https://www.ttcenergy.vn/Data/Sites/1/Banner/Default/1.jpg) ",
                    textAlign: 'center',
                    height: 400,

                }}>


                <Typography fontSize={35} fontWeight={600} color={'#fff'} marginTop={15} >GIẢI PHÁP HỘ GIA ĐÌNH</Typography>

                <Typography color={'#fff'}  >Trang chủ - Giải pháp hộ gia đình</Typography>
            </Grid>

        </Grid>
    )
}

export default IntroHeaderGD