
'use client'
import { Grid, Typography, TextField, Button } from '@mui/material';

import React from 'react';
import BusinessSolutionCarouselGD from '../../components/Carousel/BusinessSolutionCarouselGD'
import "react-multi-carousel/lib/styles.css";
const BusinessSolutionGD = () => {

    return (
        <Grid container xs={12} sm={12} >
            <Grid xs={12} sm={12} item textAlign={'center'} mt={3}>
                <Typography>LỰA CHỌN GÓI GIẢI PHÁP PHÙ HỢP CHO GIA ĐÌNH BẠN</Typography>
                <Typography fontSize={35} fontWeight={800} fontFamily={'Times New Roman'}>CÁC GÓI GIẢI PHÁP HỘ GIA ĐÌNH</Typography>

            </Grid>
            <Grid xs={12} sm={12} item mt={2}>
                <BusinessSolutionCarouselGD />
            </Grid>
        </Grid>

    )
}

export default BusinessSolutionGD