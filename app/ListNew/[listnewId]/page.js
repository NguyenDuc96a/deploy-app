'use client'
import { Box, Container, Grid, Divider, Typography, Button } from "@mui/material"

import { DataTT } from '@/components/Data/DataTT'
import { useMemo } from "react"
import Image from "next/image"
import Link from 'next/link'
import style from './style.module.css'
const Page = ({ params: { listnewId } }) => {
    // console.log('productId', productId)

    const ProductFiler = useMemo(() => DataTT.find((e => e.id == listnewId), [DataTT, listnewId]))
    console.log('abc');
    return (
        <Container maxWidth="lg" sx={{ padding: 3 }} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h4" >{ProductFiler.name}</Typography>
                    <Grid item xs={12} >
                        <Divider />
                    </Grid>
                    <Typography variant="h5" style={{ marginTop: 18 }}>{ProductFiler.text}</Typography>

                    <Typography variant="h5" style={{ marginTop: 18 }}>{ProductFiler.text1}</Typography>
                    <Typography variant="h5" style={{ marginTop: 18 }}>{ProductFiler.text2}</Typography>
                    <Typography variant="h5" style={{ marginTop: 18 }}>{ProductFiler.text3}</Typography>
                    <Typography variant="h5" style={{ marginTop: 18 }}>{ProductFiler.text4}</Typography>

                    {ProductFiler.image.map((e, i) =>
                        <Grid>
                            <Image
                                src={e.k}
                                width={200}
                                height={200}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />

                        </Grid>
                    )
                    }
                    <Typography variant="h6" style={{ marginTop: 18 }}>{ProductFiler.conten}</Typography>
                    <Typography variant="h5" style={{ marginTop: 18 }}>{ProductFiler.text5}</Typography>
                    <Typography variant="h5" style={{ marginTop: 18 }}>{ProductFiler.text6}</Typography>
                    <Typography variant="h5" style={{ marginTop: 18 }}>{ProductFiler.text7}</Typography>
                    <Typography variant="h5" style={{ marginTop: 18 }}>{ProductFiler.text8}</Typography>
                    <Typography variant="h5" style={{ marginTop: 18 }}>{ProductFiler.text9}</Typography>
                    <Typography variant="h5" style={{ marginTop: 18, textAlign: 'right' }}>{ProductFiler.author}</Typography>
                </Grid>


                <Grid item xs={12} md={4} >
                    <Box border={2}>
                        <Typography variant="h6"
                            style={{ backgroundColor: '#0E599C', textAlign: 'center', color: '#fff' }}>Tin mới nhất</Typography>
                    </Box>

                    <Link href="/ListNew/3" legacyBehavior >
                        <div className={style.abc}>
                            <Box border={2} mt={3} >
                                <Grid container xs={12} md={12} justifyContent='center' alignItems={'center'} style={{ cursor: 'pointer' }}>
                                    <Grid item xs={4} md={4} textAlign='center'>
                                        <Typography variant="h6" >20</Typography>
                                        <Typography variant="h6" >12-2022</Typography>
                                    </Grid>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                    <Grid item xs={7} md={7} textAlign='center' style={{ cursor: 'pointer' }}>
                                        <Typography variant="h6" > Chuyển đổi số mang về cho FPT gần 3.500 tỷ đồng trong 6 tháng</Typography>

                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    </Link>
                    <Link href="/ListNew/2" legacyBehavior >
                        <div className={style.abc}>
                            <Box border={2} mt={3}>
                                <Grid container xs={12} md={12} justifyContent='center' alignItems={'center'} style={{ cursor: 'pointer' }}>
                                    <Grid item xs={4} md={4} textAlign='center'>
                                        <Typography variant="h6" >09</Typography>
                                        <Typography variant="h6" >01/2023</Typography>
                                    </Grid>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                    <Grid item xs={7} md={7} textAlign='center' style={{ cursor: 'pointer' }}>
                                        <Typography variant="h6" > Việt Nam xuất khẩu thiết bị 5G sang Ấn Độ</Typography>

                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    </Link>
                    <Link href="/ListNew/1" legacyBehavior >
                        <div className={style.abc}>
                            <Box border={2} mt={3} >
                                <Grid container xs={12} md={12} justifyContent='center' alignItems={'center'} style={{ cursor: 'pointer' }}>
                                    <Grid item xs={4} md={4} textAlign='center'>
                                        <Typography variant="h6" >03</Typography>
                                        <Typography variant="h6" >01-2023</Typography>
                                    </Grid>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                    <Grid item xs={7} md={7} textAlign='center' style={{ cursor: 'pointer' }}>
                                        <Typography variant="h6" > Viettel trong top đầu châu Á về 'điểm nhận thức tính bền vững'</Typography>

                                    </Grid>
                                </Grid>
                            </Box>
                        </div>

                    </Link>
                </Grid>

            </Grid>

        </Container >

    )
}

export default Page