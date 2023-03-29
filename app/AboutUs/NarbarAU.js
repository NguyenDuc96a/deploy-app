
'use client'
import style from './style.module.css';
import { Link } from "react-scroll";
import { Box, Grid } from "@mui/material";
import Organizational from './Organizational '
import Network from './Network'
import DocumentA from './Document'
import Introduce from './Introduce'
import Image from 'next/image';
import Hinh from '../../../public/Trường Đức Logo-04.png'
export default function NarbarAU() {
    return (
        <>
            <div class={style.header}>
                {/* <Image
                    src={Hinh}
                    alt="ImageLogo"
                    style={{
                        display: 'block',
                        height: '30%',
                        margin: 'auto',
                        width: '30%',

                    }}
                /> */}
                <div class={style.headerright}>
                    <Link activeClass="active" smooth spy to="Giới thiệu" style={{ cursor: 'pointer' }}>
                        Giới thiệu
                    </Link>
                    <Link activeClass="active" smooth spy to="Sơ đồ tổ chức" style={{ cursor: 'pointer' }}>
                        Sơ đồ tổ chức
                    </Link>
                    <Link activeClass="active" smooth spy to="Mạng lưới hoạt động" style={{ cursor: 'pointer' }}>
                        Mạng lưới hoạt động
                    </Link>
                    <Link activeClass="active" smooth spy to="Tài liệu" style={{ cursor: 'pointer' }}>
                        Tài liệu
                    </Link>

                </div>
                <Box id="Giới thiệu"><Introduce />
                </Box>
                <Box id="Sơ đồ tổ chức"><Organizational /> </Box>
                <Box id="Mạng lưới hoạt động"><Network /> </Box>
                <Box id="Tài liệu">

                    {/* <DocumentA /> */}
                </Box>
            </div>


        </>
    )
}