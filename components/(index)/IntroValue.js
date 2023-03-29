import { WrapperPage } from "@/shared/WrapperPage"
import { Container, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Image from "next/image"
import React from "react"
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import styles from './style.module.css'

export const IntroValue = () => {
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);

    const openModal = () => {
        setModal(!modal);
    };

    const spinner = () => {
        setVideoLoading(!videoLoading);
    };
    return (
        <WrapperPage title="TẠI SAO NÊN SỬ DỤNG ĐIỆN MẶT TRỜI?" value="LỢI ÍCH KHI SỬ DỤNG ĐIỆN MẶT TRỜI">
            <Grid2 item container direction="row" justifyContent="center" alignItems="center" spacing={2}
                sm={12} xs={12}
            >
                <Grid2 item container direction="column" spacing={2}   >
                    <Grid2 item width={200} >

                        <img src='https://www.ttcenergy.vn/Data/Sites/1/News/253/loi-ich1.png' />
                        <Typography>Giải pháp đầu tư tài chính lâu dài</Typography>
                        <Typography>Giúp hạn chế tiêu thụ điện, giảm chi phí hóa đơn điện từ EVN</Typography>
                    </Grid2>
                    <Grid2 item width={200} >

                        <img src='https://www.ttcenergy.vn/Data/Sites/1/News/254/giam-tieng-on.png' />
                        <Typography>Làm mát, giảm tiếng ồn</Typography>
                        <Typography>Giúp làm tăng tuổi thọ mái nhà, thiết bị.</Typography>
                    </Grid2>
                    <Grid2 item width={200} >

                        <img src='https://www.ttcenergy.vn/Data/Sites/1/News/255/co2.png' />
                        <Typography>Bảo vệ môi trường</Typography>
                        <Typography>Sử dụng năng lượng xanh bảo vệ môi trường, giảm CO2.</Typography>
                    </Grid2>

                </Grid2>
                <Grid2 item >
                    <div>
                        <Image onClick={openModal}
                            alt="Image"
                            src="/static/abc.png"
                            sizes="(max-width: 768px) 50vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                            width="200"
                            height="200"
                            style={{
                                height: '45vh',
                                width: '100%',
                                cursor: 'pointer'
                            }}

                        />
                        {modal ? (
                            <section className={styles.modalbg}>
                                <div className={styles.modalalign}>
                                    <div className={styles.modalcontent} modal={modal}>
                                        <CloseIcon
                                            className={styles.modalclose}
                                            arial-label="Close modal"
                                            onClick={openModal}
                                        />
                                        <div className={styles.modalvideoalign}>
                                            {videoLoading ? (
                                                <div className={styles.modalspinner}>
                                                    <HourglassBottomIcon
                                                        className={styles.modalspinnerstyle}
                                                        fadeIn="none"
                                                    />
                                                </div>
                                            ) : null}
                                            <iframe
                                                className={styles.modalvideostyle}
                                                onLoad={spinner}
                                                loading="lazy"
                                                width="800"
                                                height="500"
                                                src="https://www.youtube.com/embed/4UZrsTqkcW4"
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ) : null}
                    </div>




                    {/* <Typography>Ổn định nguồn điện</Typography> */}
                </Grid2>
                <Grid2 item container direction="column" spacing={2}   >
                    <Grid2 item width={200}  >

                        <img
                            src='https://www.ttcenergy.vn/Data/Sites/1/News/257/on-dinh-nguon-dien.png' />
                        <Typography>Ổn định nguồn điện</Typography>
                        <Typography>Giúp hạn chế tối đa sự ngắt quãng trong hoạt động sản xuất kinh doanh.</Typography>
                    </Grid2>
                    <Grid2 item width={200} >

                        <img src='https://www.ttcenergy.vn/Data/Sites/1/News/258/nang-tam-thuong-hieu.png' />
                        <Typography>Tăng giá trị thương hiệu</Typography>
                        <Typography>Giúp thể hiện một phần trách nhiệm của cá nhân, doanh nghiệp với xã hội.</Typography>
                    </Grid2>
                    <Grid2 item width={200} >

                        <img src='https://www.ttcenergy.vn/Data/Sites/1/News/256/chung-nhan-xanh.png' />
                        <Typography>Chứng chỉ công trình xanh (Leed, Lotus, …)</Typography>
                        <Typography>Giúp tăng giá trị sản phẩm bán ra thị trường, giúp sản phẩm dễ dàng xuất khẩu.</Typography>
                    </Grid2>

                    {/* <Typography>Làm mát, giảm tiếng ồn</Typography> */}
                </Grid2>
            </Grid2>
        </WrapperPage>
    )
} 