
'use client'
import { Grid, Typography, TextField, Button, Input, Box, FormControl, NativeSelect, InputLabel, Slider } from '@mui/material';


import React from 'react';
import Slider1 from '../../components/Slider/Slider'
import SliderGD from '../../components/Slider/SliderGD'
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import NativeSelectDemo from './NativeSelect'
import "react-multi-carousel/lib/styles.css";
const Calculation = () => {
    const followersMarks = [
        {
            value: 0,
            scaledValue: 16,

        },
        {
            value: 25,
            scaledValue: 25,

        },
        {
            value: 50,
            scaledValue: 35,

        },
        {
            value: 75,
            scaledValue: 45,

        },
        {
            value: 100,
            scaledValue: 55,

        },
        {
            value: 125,
            scaledValue: 65,

        },
        {
            value: 150,
            scaledValue: 75,

        },
        {
            value: 175,
            scaledValue: 85,

        },
        {
            value: 200,
            scaledValue: 100,

        }
    ];


    const scale = value => {
        const previousMarkIndex = Math.floor(value / 25);
        const previousMark = followersMarks[previousMarkIndex];
        const remainder = value % 25;
        if (remainder === 0) {
            return previousMark.scaledValue;
        }
        const nextMark = followersMarks[previousMarkIndex + 1];
        const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
        return remainder * increment + previousMark.scaledValue;
    };

    function numFormatter(num) {
        if (num > 999 && num < 1000000) {
            return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
        } else if (num < 900) {
            return num; // if value < 1000, nothing to do
        }
    }
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Grid container xs={12} sm={12} sx={{ background: '#fff' }} >
                <Grid xs={12} sm={12} item textAlign={'center'} mt={3}>
                    <Typography>TÍNH TOÁN ĐỂ LỰA CHỌN GIẢI PHÁP PHÙ HỢP NHẤT</Typography>
                    <Typography fontSize={35} fontWeight={800} fontFamily={'Times New Roman'}>TÍNH TOÁN CHI PHÍ TIẾT KIỆM</Typography>

                </Grid>
                <Grid xs={12} sm={12} container item mt={2} sx={{ background: '#fff', textAlign: 'left', padding: 5 }}>
                    <Grid item container xs={12} sm={7} spacing={3}>
                        <Grid item sm={12} xs={12}>
                            <Typography fontSize={25} color={'#9C1519'} fontWeight={700}>Dự toán hệ thống</Typography>
                        </Grid>
                        <Grid item sm={12} xs={12}>
                            <Typography>Nhận kết quả hệ thống Điện Mặt Trời phù hợp với nhu cầu sử dụng của gia đình bạn.</Typography>
                        </Grid>
                        <Grid item container xs={12} sm={12} spacing={3}>
                            <Grid item xs={12} sm={3}>
                                <Typography>Diện tích mái nhà</Typography>
                                <Typography>Tối thiểu 16m2</Typography>
                            </Grid>
                            <Grid item xs={12} sm={3}>


                                <Slider
                                    style={{ maxWidth: 500 }}
                                    value={value}
                                    min={0}
                                    step={1}
                                    max={200}
                                    valueLabelFormat={numFormatter}
                                    marks={followersMarks}
                                    scale={scale}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="non-linear-slider"
                                />

                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Typography> {scale(value)} m2</Typography>
                            </Grid>
                        </Grid>


                        <Grid item xs={12} sm={12}>
                            <Slider1 />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <NativeSelectDemo />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <SliderGD />
                        </Grid>


                    </Grid>

                    <Grid item xs={12} sm={5}>
                        <Grid item container xs={12} sm={7} spacing={3}>
                            <Grid item sm={12} xs={12}>
                                <Typography fontSize={25} color={'#9C1519'} fontWeight={700}>Nhận báo giá</Typography>
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <Typography>Nhận kết quả số tiền sinh lời & hệ thống Điện Mặt Trời phù hợp cho nhu cầu của bạn.</Typography>
                            </Grid>

                            <Grid item sm={12} xs={12}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                    <TextField id="input-with-sx" label="Họ và tên" variant="standard" />
                                </Box>
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                    <TextField id="input-with-sx" label="Email" variant="standard" />
                                </Box>
                            </Grid>
                            <Grid item sm={12} xs={12}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                    <TextField id="input-with-sx" label="Số điện thoại" variant="standard" />
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={12}>

                                <Box sx={{ minWidth: 100, }}>
                                    <FormControl fullWidth>

                                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                            Chọn tỉnh thành
                                        </InputLabel>
                                        <NativeSelect

                                            defaultValue={30}
                                            inputProps={{
                                                name: 'age',
                                                id: 'uncontrolled-native',
                                            }}
                                        >
                                            <option value={10}>Tp Hồ Chí Minh</option>
                                            <option value={20}>Hà Nội</option>
                                            <option value={30}>ĐăkLăk</option>
                                            <option value={10}>Đăk Nông</option>
                                            <option value={20}>Gia Lai</option>
                                            <option value={30}>Bình Dương</option>
                                            <option value={10}>Bình Phước</option>
                                            <option value={20}>Hà Nam</option>
                                            <option value={30}>Hà Tĩnh</option>
                                        </NativeSelect>
                                    </FormControl>
                                </Box>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
            <Grid item xs={12} sm={12} padding={5} >
                <Button variant="contained" color="success"
                >Yêu cầu báo giá</Button>
            </Grid>
        </>


    )
}

export default Calculation