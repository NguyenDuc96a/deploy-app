
'use client'
import { Grid, Typography, TextField, Button } from '@mui/material';

import React from 'react';

import "react-multi-carousel/lib/styles.css";
import ReasonCarouserGD from '../../components/Carousel/ReasonCarouserGD'
const ReasonGD = () => {

    return (
        <Grid container xs={12} sm={12} sx={{
            backgroundImage: "url(https://www.ttcenergy.vn/Data/Sites/1/skins/default/img/bg-10.jpg) ",
            color: '#fff',
            marginTop: 3

        }} >
            <Grid xs={12} sm={12} item textAlign={'center'} mt={3}  >
                <Typography>THI CÔNG AN TOÀN, LẮP ĐẶT NHANH CHÓNG</Typography>
                <Typography fontSize={35} fontWeight={800} fontFamily={'Times New Roman'}>Lý do chọn TTC Energy</Typography>

            </Grid>
            <Grid xs={12} sm={12} item mt={2} color={'#fff'}>
                <ReasonCarouserGD />
            </Grid>
        </Grid>

    )
}

export default ReasonGD