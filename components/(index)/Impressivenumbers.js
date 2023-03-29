
import React from 'react';
import { Box, Button, Divider, Grid, Typography, IconButton, Toolbar, Item } from "@mui/material"
import Hinh from '../../../public/10.png'
import Hinh1 from '../../../public/9.png'
import Hinh2 from '../../../public/11.png'
import Hinh3 from '../../../public/12.png'
import Image from 'next/image';


const Impressivenumbers = () => {
    return (
        <Grid container xs={12} sm={12} sx={{
            backgroundImage: "url(https://www.ttcenergy.vn/Data/Sites/1/skins/default/img/bg-4.jpg) ",
            marginTop: 5, textAlign: 'center'
        }}>
            <Grid xs={12} sm={12} item sx={{ color: '#fff', marginTop: 3 }}>
                <Typography>TTC ENERGY KHÔNG NGỪNG PHÁT TRIỂN</Typography>
                <Typography fontSize={35} fontWeight={800}>NHỮNG CON SỐ ẤN TƯỢNG</Typography>
            </Grid>

            <Grid container xs={12} sm={12} padding={3}  >
                <Grid container xs={12} sm={6} md={3} item >
                    <Grid item>
                        <Image
                            src={Hinh}
                            alt="Icon"
                            style={{
                                display: 'block',
                                height: '35%',
                                margin: 'auto',
                                width: '75%',

                            }}
                        />

                    </Grid>
                    <Grid item marginLeft={3} sx={{ color: '#fff' }} >
                        <Grid item>
                            <Typography fontSize={40} fontWeight={800}>82</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>MWP CÔNG SUẤT</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container xs={12} sm={6} md={3} item >
                    <Grid item>
                        <Image
                            src={Hinh1}
                            alt="Icon1"
                            style={{
                                display: 'block',
                                height: '35%',
                                margin: 'auto',
                                width: '75%',

                            }}
                        />
                    </Grid>
                    <Grid item marginLeft={3} sx={{ color: '#fff' }}>
                        <Grid item>
                            <Typography fontSize={40} fontWeight={800}>32</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>NĂM KINH NGHIỆM</Typography>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container xs={12} sm={6} md={3} item >
                    <Grid item>
                        <Image
                            src={Hinh2}
                            alt="Icon2"
                            style={{
                                display: 'block',
                                height: '35%',
                                margin: 'auto',
                                width: '75%',

                            }}
                        />
                    </Grid>
                    <Grid item marginLeft={3} sx={{ color: '#fff' }}

                    >
                        <Grid item>
                            <Typography fontSize={40} fontWeight={800}>100</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>NHÂN SỰ KINH NGHIỆM
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container xs={12} sm={6} md={3} item  >
                    <Grid item >
                        <Image
                            src={Hinh3}
                            alt="Icon3"
                            style={{
                                display: 'block',
                                height: '35%',
                                margin: 'auto',
                                width: '75%',

                            }}
                        />
                    </Grid>
                    <Grid item sx={{ color: '#fff' }}>
                        <Grid item >
                            <Typography fontSize={40} fontWeight={800}>180</Typography>
                        </Grid>
                        <Grid item width={230}>
                            <Typography>DỰ ÁN ĐÃ THỰC HIỆN TRÊN 25 TỈNH THÀNH TRONG NƯỚC VÀ TẠI LÀO, CAMPUCHIA, MYANMAR</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Impressivenumbers