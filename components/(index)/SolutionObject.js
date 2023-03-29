import { Button, Container, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Carosel from "@/shared/Carousel"
import { WrapperPage } from "@/shared/WrapperPage"
import CenteredTabHome from "@/shared/tabs/tabHome"
import { useState } from "react"
export const SolutionObject = () => {
    const [isToggle, setIsToggle] = useState(false)
    return (
        <WrapperPage

        >
            <Grid container
                padding={5}
                xs={12}
                sm={12}
                justifyContent="space-around"
                alignItems="center"
                sx={{
                    backgroundImage: "url(https://www.ttcenergy.vn/Data/Sites/1/skins/default/img/bg-2.jpg) ",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 'cover',

                }}  >

                <Grid item xs={12} sm={7}>
                    <Typography variant="h5" fontWeight={700} color={'#fff'}> TTC ENERGY CUNG CẤP GIẢI PHÁP TỐI ƯU</Typography>
                    <Typography color={'#fff'}> GIẢI PHÁP TTC ENERGY</Typography>
                </Grid >
                {/* <Grid item xs={6} sm={2}  >
                    <Button
                        onClick={() => setIsToggle(!isToggle)}
                        style={{ backgroundColor: 'red', color: '#fff' }}>Hộ gia đình</Button>

                </Grid >
                <Grid item xs={6} sm={3}>
                    <Button style={{ backgroundColor: 'red', color: '#fff' }}>Doanh nghiệp</Button>
                </Grid > */}

                {/* <Grid item xs={12} sm={12}>
                    <CenteredTabHome />
                </Grid> */}
                <Grid item xs={12} sm={12} marginTop={3} >
                    <CenteredTabHome />
                </Grid >
            </Grid>
        </WrapperPage>

    )
}