'use client'
import { Button, Grid, Typography } from "@mui/material"
import Image from "next/image"
import Hinhanh from '../../../public/map.png'
const TabAUitem = () => {
    return (

        <Grid container xs={12} sm={12} mt={3} padding={5}
            sx={{ background: '#fff' }}
        >
            <Grid item xs={12} sm={7} textAlign={'left'}>
                <Typography fontSize={30} fontWeight={700}>TTCE (CAMBODIA) CO., LTD</Typography>
                <Typography>
                    Số. 10Eo, Đường 169, Sangkat Mittapheap, Khan 7 Makara, Phnom Penh, Cambodia
                </Typography>
                <Typography>
                    Hotline: (+855) 317 397 979
                </Typography>
            </Grid>
            <Grid item xs={12} sm={5} >

                <Image
                    src={Hinhanh}
                    alt="Image"
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        backgroundSize: 'cover'
                    }}
                />
            </Grid>

        </Grid>








    )
}

export default TabAUitem