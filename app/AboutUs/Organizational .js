'use client'
import { Grid, Typography } from "@mui/material"
import Image from "next/image"
import Hinh from '../../../public/so-do-to-chuc-ttce.png'
import styles from './page.module.css'
const Organizational = () => {
    return (

        <Grid container sm={12} xs={12} sx={{
            marginTop: 5,
            backgroundImage: "url(https://www.ttcenergy.vn/Data/Sites/1/skins/default/img/bg-8.jpg) ",
            height: 830,
            padding: 5,
            textAlign: 'center'
        }}

        >
            <Grid item xs={12} sm={12}  >

                <Typography fontSize={30} fontWeight={600}  >SƠ ĐỒ TỔ CHỨC</Typography>
            </Grid>
            <Grid item xs={12} sm={12}  >
                <Image className={styles.hinh}
                    alt="Sodotochuc"
                    src={Hinh}
                    style={{

                        margin: 'auto',
                        backgroundSize: 'cover'
                    }}
                />
            </Grid>

        </Grid>






    )
}

export default Organizational 