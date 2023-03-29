
import React from 'react';
import { Box, Button, Divider, Grid, Typography, IconButton, Toolbar, Item } from "@mui/material"
import PartnerImage from '../Carousel/PartnerCarousel';
import { useState } from 'react';
import CenteredTabProject from '@/shared/tabs/tabProject';

const Project = () => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        // 👇️ toggle shown state
        setIsShown(current => !current);

        // 👇️ or simply set it to true
        // setIsShown(true);
    };

    return (
        // <Grid container xs={12} sm={12} sx={{ marginTop: 5 }}>
        //     <Grid item container xs={12} sm={12} spacing={3} >
        //         <Grid item xs={12} sm={7} ml={2}  >
        //             <Typography> MANG ĐẾN CÔNG TRÌNH CHẤT LƯỢNG ĐẠT CHUẨN</Typography>
        //             <Typography fontSize={35} fontWeight={600}>DỰ ÁN ĐÃ THỰC HIỆN</Typography>

        //         </Grid >
        //         <Grid item  >
        //             <Button variant="contained" color="success">Hộ gia đình</Button>


        //         </Grid >
        //         <Grid item xs={12} md={4}>
        //             <Button variant="contained" color="success"
        //             >Doanh nghiệp</Button>



        //         </Grid >

        //         <Grid item xs={12} md={4}>
        //             <Button variant="contained" color="success">Xem tất cả</Button>


        //         </Grid >


        //     </Grid>

        //     <Grid item xs={12} sm={12} sx={{ marginTop: 3 }} >
        //         <ProjectCarousel />


        //     </Grid >
        // </Grid>
        <Grid container spacing={2} mt={5}>
            <Grid item xs={12} container spacing={2}  >
                <Grid item xs={12} md={12} textAlign='center' >
                    <Typography variant='h5' fontWeight={'bold'}> MANG ĐẾN CÔNG TRÌNH CHẤT LƯỢNG ĐẠT CHUẨN</Typography>
                    <Typography variant='h6'>DỰ ÁN ĐÃ THỰC HIỆN</Typography>
                </Grid>
                <Grid item xs md container spacing={2}>
                    <Grid item md={12} xs={12}>
                        <CenteredTabProject />
                    </Grid>


                </Grid>
            </Grid>

        </Grid >
    )
}

export default Project