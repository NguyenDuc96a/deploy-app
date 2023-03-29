'use client'
import { Button, Grid, TextField, Typography } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
const New = () => {
    return (
        <Grid container xs={12} sm={12} sx={{ marginTop: 10 }} >

            <Grid item container xs={12} sm={8} sx={{ backgroundColor: '#fff' }} padding={5} >
                <Typography fontSize={30}>Liên hệ với chúng tôi</Typography>

                <Grid item container xs={12} sm={12} sx={{ marginTop: 3 }} spacing={3}>
                    <Grid item xs={6} sm={6}>
                        <Typography>Họ và tên</Typography>
                        <TextField id="standard-basic" variant="standard" />
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <Typography>Số điện thoại</Typography>
                        <TextField id="standard-basic" variant="standard" />
                    </Grid>
                </Grid>

                <Grid item container xs={12} sm={12} sx={{ marginTop: 3 }} spacing={3}>
                    <Grid item xs={6} sm={6}>
                        <Typography>Email</Typography>
                        <TextField id="standard-basic" variant="standard" />
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <Typography>Địa chỉ</Typography>
                        <TextField id="standard-basic" variant="standard" />
                    </Grid>
                </Grid>

                <Grid item container xs={12} sm={12} sx={{ marginTop: 3 }} spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <Typography>Nội dung</Typography>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            fullWidth
                        />
                    </Grid>

                </Grid>

                <Grid item container xs={12} sm={12} sx={{ marginTop: 3 }} spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <Typography>Nhập mã hiển thị</Typography>
                        <TextField id="standard-basic" variant="standard" fullWidth />
                    </Grid>

                </Grid>

                <Button sx={{ marginTop: 3 }}>Gửi</Button>
            </Grid>

            <Grid item container xs={12} sm={4} padding={5} sx={{
                backgroundImage: "url(https://www.ttcenergy.vn/Data/Sites/1/skins/default/img/contact/bg-1.jpg) "
            }}>
                <Typography fontSize={30} color={'#fff'}>Thông tin liên hệ</Typography>
                <Grid item xs={12} sm={12} >
                    <Typography color={'#fff'}>Hotline</Typography>
                    <Typography color={'#fff'}>(+84) 908 515 511</Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Typography color={'#fff'}>email</Typography>
                    <Typography color={'#fff'}>info@ttcenergy.vn</Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Typography color={'#fff'}>Website</Typography>
                    <Typography color={'#fff'}>www.ttcenergy.vn</Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FacebookIcon />
                    <YouTubeIcon />
                    <TelegramIcon />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default New