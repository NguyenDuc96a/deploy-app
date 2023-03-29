// 'use client'


// import { Link } from "react-scroll";

// import { Box, Grid } from "@mui/material";
// import IntroduceGD from './IntroduceGD'
// import BusinessSolutionGD from './BusinessSolutionGD'
// import BenefitGD from './BenefitGD'
// import Maintenance from './Maintenance'
// import Calculation from './Calculation'
// import ReasonGD from './ReasonGD'
// import IMPROJECTGD from './IMPROJECTGD'
// export default function NarbarGD() {
//     return (
//         <>

//             <Grid container xs={12} sm={12} spacing={5}
//                 style={{ marginTop: 5, alignItems: 'center', justifyContent: 'center' }} >
//                 <Grid item>
//                     <Link activeClass="active" smooth spy to="about" style={{ cursor: 'pointer' }}>
//                         Gói giải pháp
//                     </Link>
//                 </Grid>

//                 <Grid item>
//                     <Link activeClass="active" smooth spy to="projects" style={{ cursor: 'pointer' }}>
//                         Lợi ích khác biệt
//                     </Link>
//                 </Grid>

//                 <Grid item>
//                     <Link activeClass="active" smooth spy to="blog" style={{ cursor: 'pointer' }}>
//                         Chế độ hậu mãi
//                     </Link>
//                 </Grid>
//                 <Grid item>
//                     <Link activeClass="active" smooth spy to="contact" style={{ cursor: 'pointer' }}>
//                         Tính toán chi phí
//                     </Link>
//                 </Grid>

//                 <Grid item>

//                     <Link activeClass="active" smooth spy to="Lydo" style={{ cursor: 'pointer' }}>
//                         Lý do chọn TNC ENERGY
//                     </Link>
//                 </Grid>

//                 <Grid item>

//                     <Link activeClass="active" smooth spy to="Duan" style={{ cursor: 'pointer' }}>
//                         Dự án
//                     </Link>
//                 </Grid>
//             </Grid>


//             <Box id="about"><IntroduceGD />
//                 <BusinessSolutionGD />
//             </Box>
//             <Box id="projects"><BenefitGD /> </Box>
//             <Box id="blog"> <Maintenance /> </Box>
//             <Box id="contact">
//                 <  Calculation />

//             </Box>



//             <Box id="Lydo">
//                 <   ReasonGD />

//             </Box>

//             <Box id="Duan">
//                 <   IMPROJECTGD />
//             </Box>
//         </>




//     );
// }

'use client'
import style from './style.module.css';
import { Link } from "react-scroll";
import { Box, Grid } from "@mui/material";
import IntroduceGD from './IntroduceGD'
import BusinessSolutionGD from './BusinessSolutionGD'
import BenefitGD from './BenefitGD'
import Maintenance from './Maintenance'
import Calculation from './Calculation'
import ReasonGD from './ReasonGD'
import IMPROJECTGD from './IMPROJECTGD'
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
                        Chế độ hậu mãi
                    </Link>
                    <Link activeClass="active" smooth spy to="contact" style={{ cursor: 'pointer' }}>
                        Tính toán chi phí
                    </Link>
                    <Link activeClass="active" smooth spy to="Lydo" style={{ cursor: 'pointer' }}>
                        Lý do chọn TNC ENERGY
                    </Link>
                    <Link activeClass="active" smooth spy to="Duan" style={{ cursor: 'pointer' }}>
                        Dự án
                    </Link>

                </div>
                <Box id="about"><IntroduceGD />
                    <BusinessSolutionGD />
                </Box>
                <Box id="projects"><BenefitGD /> </Box>
                <Box id="blog"> <Maintenance /> </Box>
                <Box id="contact">
                    <  Calculation />

                </Box>



                <Box id="Lydo">
                    <   ReasonGD />

                </Box>

                <Box id="Duan">
                    <   IMPROJECTGD />
                </Box>


            </div>


        </>
    )
}