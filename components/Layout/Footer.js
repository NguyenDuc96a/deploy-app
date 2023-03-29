import { Divider, Grid, Stack, Typography, styled, Paper, List, ListItemText, ListItem, ListItemIcon } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Logo from '../../../public/Trường Đức Logo-04.png'
import Image from "next/image";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ShowRoom = [
    "Công ty cổ phần kĩ thuật điện và viễn thông Trường Đức",
    "88 Y Moan Ênuôl, Tân Lợi, Thành phố Buôn Ma Thuột, Đắk Lắk",
    "Số điện thoại: (+84) 098 9168262",
    "Fax: (+84) 283 999 8834",
    "Email: info@truongduc.vn",
    "Giấy chứng nhận đăng ký kinh doanh: 0314232731. Cấp ngày: 16.02.2017.",
    "Nơi cấp: Phòng Đăng ký kinh doanh - Sở Kế hoạch và Đầu tư Thành phố Buôn Ma Thuột"
]

const Customer = [
    "Giới thiệu",
    "Sơ đồ tổ chức",
    "Mạng lưới hoạt động",
    "Thành tựu",
    "Phát triển bền vững",
    "Liên hệ"
]

const Service = [
    "Giải pháp cho doanh nghiệp",
    "Giải pháp cho hộ gia đình",
    "Thiết bị và phụ kiện",
    "Chính sách dành cho đại lý",
    "Đăng ký trở thành đại lý"
]

const Footer = () => {
    return (
        //     <Stack
        //     direction="row"
        //     divider={<Divider orientation="vertical" flexItem />}
        //     spacing={2}
        //   >
        //     <Item>
        //         Máy chế biến gỗ đại phúc vinh
        //     </Item>
        //     <Item>Chăm sóc khách hàng</Item>
        //     <Item>Chính sách bán hàng</Item>
        //   </Stack>
        <>
            <Grid container justifyContent="space-around" spacing={2} backgroundColor={'#9c1519'} color='#fff'>
                <Grid item md={3} xs={12}>
                    <Image
                        src={Logo}
                        alt="ImageLogo"
                        style={{
                            display: 'block',
                            height: '35%',
                            margin: 'auto',
                            width: '50%',

                        }}
                    />

                </Grid>
                <Grid item md={3} xs={12} >
                    <Typography variant="subtitle2">
                        THÔNG TIN DOANH NGHIỆP
                    </Typography>
                    <Divider variant="fullWidth" />
                    <List component={"nav"} aria-label="main mailbox folders">
                        {
                            ShowRoom.map((e, i) =>
                                <ListItem key={i}>
                                    <ListItemText
                                        primary={e}
                                    >
                                    </ListItemText>
                                </ListItem>
                            )
                        }
                    </List>
                    {/* <Typography variant="body1">
                    Đồng Nai	: 0332 533 343 - 0982 421 343
                </Typography>
                <Typography variant="body1">
                    Hà Nội	: 0332 533 343 - 0982 421 343
                </Typography>
                <Typography variant="body1">
                    Hồ Chí Minh : 0332 533 343 - 0982 421 343
                </Typography>
                <Typography variant="body1">
                    Quy Nhơn	: 0332 533 343 - 0982 421 343
                </Typography> */}
                </Grid>
                <Grid item md={3} xs={12}>
                    <Typography variant="subtitle2">
                        VỀ CHÚNG TÔI
                    </Typography>
                    <Divider variant="fullWidth" />
                    <List component={"nav"} aria-label="main mailbox folders">
                        {
                            Customer.map((e, i) =>
                                <ListItem key={i} >
                                    <ListItemIcon >
                                        <ArrowForwardIosIcon />
                                    </ListItemIcon>

                                    <ListItemText
                                        primary={e}
                                    >
                                    </ListItemText>
                                </ListItem>
                            )
                        }
                    </List>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Typography variant="subtitle2">
                        GIẢI PHÁP KINH DOANH
                    </Typography>
                    <Divider variant="fullWidth" />
                    <List component={"nav"} aria-label="main mailbox folders">
                        {
                            Service.map((e, i) =>
                                <ListItem key={i}>
                                    <ListItemIcon >
                                        <ArrowForwardIosIcon />
                                    </ListItemIcon>

                                    <ListItemText
                                        primary={e}
                                    >
                                    </ListItemText>
                                </ListItem>
                            )
                        }
                    </List>
                </Grid>
            </Grid>


            <Grid container justifyContent="space-around" spacing={2} backgroundColor={'#9c1519'}>
                <Grid item md={12} xs={12}>
                    <Typography>

                    </Typography>

                </Grid>

            </Grid>
        </>


    )
}

export default Footer