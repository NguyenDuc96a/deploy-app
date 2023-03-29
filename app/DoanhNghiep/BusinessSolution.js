
'use client'
import { Grid, Typography, TextField, Button } from '@mui/material';

import React from 'react';
import BusinessSolutionCarousel from '../../components/Carousel/BusinessSolutionCarousel'
import "react-multi-carousel/lib/styles.css";
const BusinessSolution = () => {

    return (
        <Grid container xs={12} sm={12} >
            <Grid xs={12} sm={12} item textAlign={'center'} mt={3}>
                <Typography>LỰA CHỌN GÓI GIẢI PHÁP PHÙ HỢP CHO DOANH NGHIỆP CỦA BẠN</Typography>
                <Typography fontSize={35} fontWeight={800} fontFamily={'Times New Roman'}>CÁC GÓI GIẢI PHÁP DOANH NGHIỆP</Typography>

            </Grid>
            <Grid xs={12} sm={12} item mt={2}>
                <BusinessSolutionCarousel />
            </Grid>
        </Grid>

    )
}

export default BusinessSolution