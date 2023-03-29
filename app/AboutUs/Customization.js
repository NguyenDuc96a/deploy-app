import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Hinh from '../../../public/ttc-energy-dat-giai-thuong-thuong-hieu-vang-1.png'
import Hinh1 from '../../../public/ttce-đat-giai-thuong-hieu-mạnh.png'
import Hinh2 from '../../../public/nhan-thuong-1000x600px.png'
import Hinh3 from '../../../public/ttcenergy-chung-nhan-du-an-nang-luong-tai-tao-tieu-bieu.jpg'
import { Grid } from '@mui/material';
export default function CustomizedTimeline() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    <Image
                        src={Hinh}
                        alt="Image"
                        style={{

                            height: '100%',
                            margin: 'auto',
                            width: '100%',
                            backgroundSize: 'cover'
                        }}
                    />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2, color: '#fff' }}>

                    <Typography variant="h6" component="span">
                        TTC Energy 2023
                    </Typography>
                    <Typography>TTC Energy đón nhận giải thưởng “Thương hiệu Vàng TP.HCM” lần 3 năm 2022. Giải thưởng do UBND TPHCM chỉ đạo thực hiện nhằm tôn vinh các DN có kết quả xuất sắc trong công tác xây dựng thương hiệu sản phẩm, dịch vụ lớn mạnh và ấn tượng, gắn liền với thương hiệu TPHCM.</Typography>

                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    <Image
                        src={Hinh1}
                        alt="Image"
                        style={{

                            height: '100%',
                            margin: 'auto',
                            width: '100%',
                            backgroundSize: 'cover'
                        }}
                    />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2, color: '#fff' }}>
                    <Typography variant="h6" component="span">
                        TTC Energy 2022
                    </Typography>
                    <Typography>Với những nỗ lực không ngừng cùng vị thế tiên phong trong lĩnh vực điện mặt trời áp mái tại Việt Nam, TTC Energy vinh dự được vinh danh TOP 10 Thương Hiệu Mạnh ASEAN - ASEAN Brand Award 2022.</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    <Image
                        src={Hinh2}
                        alt="Image"
                        style={{

                            height: '100%',
                            margin: 'auto',
                            width: '100%',
                            backgroundSize: 'cover'
                        }}
                    />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2, color: '#fff' }}>
                    <Typography variant="h6" component="span">
                        TTC Energy 2021
                    </Typography>
                    <Typography>TTC Energy được trao chứng nhận Dự án Năng lượng mặt trời mái nhà tiêu biểu trong Khu Công Nghiệp cho Hệ thống điện mặt trời mái nhà Duy Tân (Long An) do Phòng Thương mại và Công nghiệp (VCCI) tổ chức. </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    <Image
                        src={Hinh3}
                        alt="Image"
                        style={{

                            height: '100%',
                            margin: 'auto',
                            width: '100%',
                            backgroundSize: 'cover'
                        }}
                    />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot color="secondary">
                        <RepeatIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2, color: '#fff' }}>
                    <Typography variant="h6" component="span">
                        TTC Energy 2020
                    </Typography>
                    <Typography>TTC Energy được trao chứng nhận Dự án Năng lượng tái tạo tiêu biểu Việt Nam năm 2020 cho Hệ thống điện mặt trời mái nhà De Heus (Đồng Nai) do Phòng Thương mại và Công nghiệp (VCCI) tổ chức. </Typography>
                </TimelineContent>

            </TimelineItem>
        </Timeline>
    );
}