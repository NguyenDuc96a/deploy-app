

'use client'
import { Grid, Typography, TextField, Button, Box } from '@mui/material';

import React from 'react';

import "react-multi-carousel/lib/styles.css";
import ExperienceCarousel from '../../components/Carousel/ExperienceCarousel'
const Experience = () => {

    return (
        <Grid container xs={12} sm={12} >
            <Grid xs={12} sm={12} item textAlign={'center'} mt={3}>
                <Typography>CÂU CHUYỆN KHÁCH HÀNG ĐỒNG HÀNH CÙNG TTC ENERGY</Typography>
                <Typography fontSize={35} fontWeight={800} fontFamily={'Times New Roman'}>TRẢI NGHIỆM KHÁCH HÀNG</Typography>

            </Grid>
            <Grid item xs={12} sm={12} sx={{ marginTop: 3 }}  >

                <Box padding={5}>
                    <ExperienceCarousel />
                </Box>


            </Grid >
        </Grid>

    )
}

export default Experience