'use client'
import { Box, Container, Grid, Divider, Typography, Button } from "@mui/material"
import VerticalTabs from './VerticalTabs'
import { DataLK } from '@/components/Data/DataLK'
import { useMemo } from "react"
import Link from 'next/link'
const Page = ({ params: { productId } }) => {
    // console.log('productId', params)
    const ProductFiler = useMemo(() => DataLK.find(e => e.id == productId), [DataLK, productId])
    console.log('ProductFiler', ProductFiler);
    return (
        <Container maxWidth="lg" sx={{ padding: 3 }} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', direction: 'rown' }}>
                        <VerticalTabs PathImg={ProductFiler.PathImg} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" >{ProductFiler.name}</Typography>
                    <Typography variant="h5" style={{ marginTop: 18 }}>{ProductFiler.price}</Typography>
                    {ProductFiler.Describe.map((e, i) =>
                        <Typography variant="h6" style={{ marginTop: 18 }}>{e.v}</Typography>
                    )
                    }
                    <Link href="/Lienhe" legacyBehavior >
                        <Button style={{ marginTop: 38 }} variant="contained" color="success">Liên hệ</Button>
                    </Link>
                </Grid>

                <Grid item xs={12} >
                    <Divider />
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6">
                        Thông số cơ bản
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    {ProductFiler.description.map((e, i) =>
                        <Grid>
                            <Typography variant="body1" style={{ marginTop: 18 }}>{e.k}:{e.v}</Typography>

                        </Grid>
                    )
                    }
                </Grid>
                <Grid item xs={12} >
                    <Divider />
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6">
                        Giảm giá
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="subtitle1">
                        {ProductFiler.discount}
                    </Typography>
                </Grid>

                <Grid item xs={12} >
                    <Divider />
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6">
                        Bảo hành
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="subtitle1">
                        {ProductFiler.guarantee}
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Divider />
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h6">
                        Hướng dẫn sử dụng
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    {ProductFiler.working.map((e, i) =>
                        <Grid>
                            <Typography >{e.k}</Typography>
                            <Typography >{e.v}</Typography>
                        </Grid>
                    )
                    }
                </Grid>
                {/* <FeelBack name={ProductFiler.name} /> */}
                {/* <WrapperPage tittle="SẢN PHẨM TƯƠNG TỰ">
                <Grid
                    container
                    justifyContent="center"
                    spacing={2}
                    alignItems="center"
                >
                    {ProductSame.map(e =>
                        <Grid item key={e.productId}>
                            <Card
                                path={`/product/${e.productId}`}
                                // productId={e.productId}
                                PathImg={e.PathImg.at(0).v}
                                // discount={e.discount}
                                brand={e.brand}
                                name={e.name}
                            />
                        </Grid>
                    )}

                </Grid>
            </WrapperPage> */}
            </Grid>
        </Container>
    )
}

export default Page