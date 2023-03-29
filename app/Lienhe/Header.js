'use client'
import { Grid, Typography } from "@mui/material"

const HeaderLH = () => {
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
                    backgroundImage: "url(https://www.ttcenergy.vn/Data/Sites/1/skins/default/img/bg-4.jpg) ",
                    textAlign: 'center',
                    height: 300,

                }}>


                <Typography fontSize={35} fontWeight={600} color={'#fff'} marginTop={10} >Liên Hệ</Typography>

                <Typography color={'#fff'}  >Trang chủ - Liên hệ</Typography>
            </Grid>

        </Grid>
    )
}

export default HeaderLH