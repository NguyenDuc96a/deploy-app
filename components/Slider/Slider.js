
'use client'
import { Grid, Typography, TextField, Button, Input } from '@mui/material';
import Slider from "@material-ui/core/Slider";

import React from 'react';

import "react-multi-carousel/lib/styles.css";
const Slider1 = () => {
    const followersMarks = [
        {
            value: 0,
            scaledValue: 0,

        },
        {
            value: 25,
            scaledValue: 1000000,

        },
        {
            value: 50,
            scaledValue: 2000000,

        },
        {
            value: 75,
            scaledValue: 3000000,

        },
        {
            value: 100,
            scaledValue: 4000000,

        },
        {
            value: 125,
            scaledValue: 5000000,

        },
        {
            value: 150,
            scaledValue: 6000000,

        },
        {
            value: 175,
            scaledValue: 7000000,

        },
        {
            value: 200,
            scaledValue: 8000000,

        },

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
        <Grid container xs={12} sm={12} >

            <Grid item container xs={12} sm={12} spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Typography>Hóa đơn tiền điện</Typography>
                    <Typography>Trung bình tháng</Typography>
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
                    <Input size='300' value={`${scale(value)} VND`} />
                </Grid>
            </Grid>
            {/* <Grid xs={12} sm={12} container item mt={2} sx={{ background: '#fff', textAlign: 'left', padding: 5 }}>
                <Grid xs={12} sm={12}>

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

                        <Input size='300' value={`${scale(value)} VND`} />
                    </Grid>
                </Grid>



            </Grid> */}


        </Grid>


    )
}

export default Slider1