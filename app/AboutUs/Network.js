'use client'
import { Button, Grid, Typography } from "@mui/material"

import TabAU from './TabAU'

const Network = () => {
    return (

        <Grid container xs={12} sm={12} textAlign="center" mt={3} mb={5}
            sx={{ backgroundImage: "url(https://www.ttcenergy.vn/Data/Sites/1/skins/default/img/bg-9.jpg) ", }}
        >
            <Grid item xs={12} sm={12} mt={5}>
                <Typography fontSize={30} fontWeight={700} color={'#fff'}>MẠNG LƯỚI HOẠT ĐỘNG</Typography>

            </Grid>

            <Grid item xs={12} sm={12} alignItems='center'>
                <TabAU />
            </Grid>
        </Grid>








    )
}

export default Network