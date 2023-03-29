'use client'
import { Button, Container, Grid, ListItemText, Paper, Stack, Typography, ListItemIcon } from '@mui/material';

const Maintenance = () => {
    return (

        <Grid container xs={12} sm={12} sx={{
            backgroundImage: "url(https://www.ttcenergy.vn/Data/Sites/1/media/giaiphap/bg-3.jpg) ",
            width: '100%',
            height: '100%',
            backgroundSize: 'cover'
        }}>



            <Grid item container spacing={5} xs={12} sm={8} padding={7} >
                <Grid item xs={12} md={3} >
                    <Paper sx={{ minHeight: '26vh', background: '#1A61A2 ' }} >
                        <Stack justifyContent="space-around" textAlign={'left'} color={'#fff'}>
                            <Typography variant="h3"> 25 năm</Typography>
                            <Typography> Bảo hành hiệu suất tấm Pin Năng Lượng Mặt Trời theo tiêu chuẩn nhà sản xuất

                            </Typography>

                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3} sm={12} >
                    <Paper sx={{ minHeight: '26vh', background: '#1A61A2 ', marginTop: 20 }} >
                        <Stack justifyContent="space-around" textAlign={'left'} color={'#fff'}>
                            <Typography variant="h3"> 25 năm</Typography>
                            <Typography> Bảo hành hiệu suất tấm Pin Năng Lượng Mặt Trời theo tiêu chuẩn nhà sản xuất

                            </Typography>

                        </Stack>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={3} sm={12} >
                    <Paper sx={{ minHeight: '26vh', background: '#1A61A2 ' }} >
                        <Stack justifyContent="space-around" textAlign={'left'} color={'#fff'}>
                            <Typography variant="h3"> 25 năm</Typography>
                            <Typography> Bảo hành hiệu suất tấm Pin Năng Lượng Mặt Trời theo tiêu chuẩn nhà sản xuất

                            </Typography>

                        </Stack>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={3} sm={12} >
                    <Paper sx={{ minHeight: '26vh', background: '#1A61A2 ', marginTop: 20 }} >
                        <Stack justifyContent="space-around" textAlign={'left'} color={'#fff'}>
                            <Typography variant="h3"> 25 năm</Typography>
                            <Typography> Bảo hành hiệu suất tấm Pin Năng Lượng Mặt Trời theo tiêu chuẩn nhà sản xuất

                            </Typography>

                        </Stack>
                    </Paper>
                </Grid>



            </Grid>

            <Grid item container xs={12} sm={4} padding={5} textAlign={'left'} color={'#fff'}>
                <Grid item xs={12} sm={12}>
                    <h1>BẢO TRÌ HẬU MÃI</h1>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Typography>
                        Với quy trình và chính sách hỗ trợ kỹ thuật 24/7, TTC Energy
                        cam kết mọi phát sinh yêu cầu sau
                        bán hàng được giải quyết nhanh chóng trong vòng 48 giờ
                        qua Hotline 0908 515 511.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Typography>
                        Sau khi hệ thống chính thức được đưa vào vận hành, đội ngũ
                        kỹ thuật TTC Energy vẫn luôn đồng hành cùng khách hàng,
                        với cam kết tối ưu hiệu suất hoạt động của hệ thống trong
                        suốt chặng đường 25 năm.
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Button variant="contained" color="success" sx={{ height: 50 }}>Xem chi tiết</Button>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default Maintenance