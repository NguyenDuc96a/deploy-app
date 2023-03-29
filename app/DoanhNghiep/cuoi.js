
'use client'
import { Grid, Typography, TextField, Button } from '@mui/material';

import React from 'react';
import DuanCarousel from './DuanCarousel'
import "react-multi-carousel/lib/styles.css";

const IMPROJECT = () => {

    return (
        <Grid container xs={12} sm={12} >
            <Grid xs={12} sm={12} item textAlign={'center'} mt={3}  >
                <Typography>CÁC DỰ ÁN ĐIỆN MẶT TRỜI DOANH NGHIỆP</Typography>
                <Typography fontSize={35} fontWeight={800} fontFamily={'Times New Roman'}>DỰ ÁN ĐÃ TRIỂN KHAI</Typography>

            </Grid>
            <Grid xs={12} sm={12} item mt={2}>
                <DuanCarousel />
            </Grid>
        </Grid>

    )
}

export default IMPROJECT