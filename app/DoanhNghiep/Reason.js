
'use client'
import { Grid, Typography, TextField, Button } from '@mui/material';

import React from 'react';

import "react-multi-carousel/lib/styles.css";
import Car from './text1'
const Reason = () => {

    return (
        <Grid container xs={12} sm={12} >
            <Grid xs={12} sm={12} item textAlign={'center'} mt={3}  >

                <Typography fontSize={35} fontWeight={800} fontFamily={'Times New Roman'}>Lý do chọn TTC Energy</Typography>

            </Grid>
            <Grid xs={12} sm={12} item mt={2}>
                <Car />
            </Grid>
        </Grid>

    )
}

export default Reason