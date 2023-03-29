
import React from 'react';
import { Box, Button, Divider, Grid, Typography, IconButton, Toolbar, Item } from "@mui/material"

import ConstructionCarousel from '../Carousel/ConstructionCarousel'

const Construction = () => {
    return (
        <Grid container xs={12} sm={12} sx={{ marginTop: 5 }}>
            <Grid item xs={12} sm={12} textAlign={'center'}>
                <Typography>THI CÔNG AN TOÀN, LẮP ĐẶT NHANH CHÓNG</Typography>
                <Typography fontSize={40} fontWeight={800}>QUY TRÌNH CHUYÊN NGHIỆP</Typography>
                <Typography sx={{ marginTop: 2 }} >
                    Nắm bắt xu hướng phát triển bền vững của tương lai - cần nguồn
                </Typography>
                <Typography> năng lượng tái tạo xanh,
                    sạch và thân thiện với môi trường, </Typography>
                <Typography>đồng thời mang đến giải pháp tối ưu</Typography>
            </Grid>
            <Grid item xs={12} sm={12} mt={3}>
                <ConstructionCarousel />
            </Grid>
        </Grid>
    )
}

export default Construction