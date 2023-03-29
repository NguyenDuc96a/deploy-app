
'use client'
import { Grid, Typography, TextField, Button } from '@mui/material';

import React from 'react';

import "react-multi-carousel/lib/styles.css";
import Stepper2 from '../../components/Carousel/Stepper'
const Procedure = () => {

    return (
        <Grid container xs={12} sm={12} >
            <Grid xs={12} sm={12} item textAlign={'center'} mt={3}  >
                <Typography>THI CÔNG AN TOÀN, LẮP ĐẶT NHANH CHÓNG</Typography>
                <Typography fontSize={35} fontWeight={800}>QUY TRÌNH THỰC HIỆN</Typography>

            </Grid>
            <Grid xs={12} sm={12} item mt={2}>
                <Stepper2 />
            </Grid>
        </Grid>

    )
}

export default Procedure