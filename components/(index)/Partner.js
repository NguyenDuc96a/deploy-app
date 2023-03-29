
import React from 'react';
import { Box, Button, Divider, Grid, Typography, IconButton, Toolbar, Item } from "@mui/material"
import PartnerImage from '../Carousel/PartnerCarousel';



const Partner = () => {
    return (
        <Grid container xs={12} sm={12}>
            <Grid xs={12} sm={12} item textAlign={'center'} mt={3} >
                <Typography >TỰ HÀO DOANH NGHIỆP DẪN ĐẦU TRONG LĨNH VỰC ĐIỆN MẶT TRỜI</Typography>
                <Typography fontSize={35} fontWeight={800}>ĐỐI TÁC</Typography>

            </Grid>
            <Grid xs={12} sm={12} item mt={2}>
                <PartnerImage />
            </Grid>
        </Grid>
    )
}

export default Partner