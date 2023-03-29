'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Grid, Typography, TextField, Button, Input } from '@mui/material';
export default function NativeSelectDemo() {
    return (
        <Grid container xs={12} sm={12} >

            <Grid item container xs={12} sm={12} spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Typography>Khu vực sống</Typography>

                </Grid>
                <Grid item xs={12} sm={3}>


                    <Box sx={{ minWidth: 357 }}>
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


    );
}