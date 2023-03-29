
'use client'
import style from './styleNarbar.module.css';
import { Link } from "react-scroll";


import BusinessSolution from './BusinessSolution'
import Benefit from './Benefit'
import { Box, Grid } from "@mui/material";
import Experience from './Experience'
import Reason from './Reason'
import Procedure from './Procedure'
import IMPROJECT from './cuoi'
import Introduce from './Introduce'
import Image from 'next/image';
import Hinh from '../../../public/Trường Đức Logo-04.png'
export default function NarbarAU() {
    return (
        <>
            <div class={style.header}>
                <Image
                    src={Hinh}
                    alt="ImageLogo"
                    style={{
                        display: 'block',
                        height: '30%',
                        margin: 'auto',
                        width: '30%',

                    }}
                />
                <div class={style.headerright}>
                    <Link activeClass="active" smooth spy to="about" style={{ cursor: 'pointer' }}>
                        Gói giải pháp
                    </Link>
                    <Link activeClass="active" smooth spy to="projects" style={{ cursor: 'pointer' }}>
                        Lợi ích khác biệt
                    </Link>
                    <Link activeClass="active" smooth spy to="blog" style={{ cursor: 'pointer' }}>
                        Trải nghiệm khách hàng
                    </Link>
                    <Link activeClass="active" smooth spy to="Lý do chọn TTC ENERGY" style={{ cursor: 'pointer' }}>
                        Lý do chọn TTC ENERGY
                    </Link>
                    <Link activeClass="active" smooth spy to="Duan" style={{ cursor: 'pointer' }}>
                        Dự án
                    </Link>
                </div>
                <Box id="about"><Introduce />
                    <BusinessSolution />
                </Box>
                <Box id="projects"><Benefit /> </Box>
                <Box id="blog"> <Experience /> </Box>
                <Box id="contact">

                </Box>

                {/* <Box id="Quytrinh">
                 <Procedure />

            </Box> */}
                <Box id="Lý do chọn TTC ENERGY" sx={{
                    backgroundImage: "url(https://www.ttcenergy.vn/Data/Sites/1/skins/default/img/bg-10.jpg) ",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 'cover',
                }}>
                    <Reason />

                </Box>
                <Box id="Duan" sx={{ marginBottom: 5 }}>
                    <IMPROJECT />

                </Box>
            </div>


        </>
    )
}