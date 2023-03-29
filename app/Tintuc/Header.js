'use client'
import { Grid, Typography } from "@mui/material"

const HeaderTT = () => {
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
                    height: 300,
                    textAlign: 'center',
                    alignItems: 'center'
                }}>


                <Typography variant="h6" fontSize={'bold'} color={'#fff'} marginTop={10} >Tin tức</Typography>

                <Typography color={'#fff'}  >Trang chủ - Tin tức</Typography>
            </Grid>

        </Grid>
    )
}

export default HeaderTT