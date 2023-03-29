'use client'
import Carosel from "../../lib/carousel"
import { Container, Grid, Stack } from "@mui/material"
import WrapperProduct from "../(Component)/WrapperProduct"
import { listProduct } from "../../lib/ListProduct/listProduct"
import { CategoryMenu } from "../../lib/menu/CategoryMenu"
import { IntroValue } from "./IntroValue"
import { SolutionObject } from "./SolutionObject"
import { IntroProduct } from "./IntroProduct"
import Carousel1 from "../Carousel/HeaderCarousel"
import Impressivenumbers from "./Impressivenumbers"
import Partner from "./Partner"
import Project from "./Project"
import Construction from "./Construction"
import News from "./News"


const HomePage = () => {



    return (

        <Stack >

            <Carousel1 />
            <IntroValue />
            <SolutionObject />
            <IntroProduct />
            <Impressivenumbers />
            <Partner />
            <Project />
            <Construction />
            <News />
        </Stack>


    )
}

export default HomePage