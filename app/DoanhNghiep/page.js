'use client'
import { Inter } from 'next/font/google'
import IntroHeaderDN from './IntroHeaderDN'
import Introduce from './Introduce'
import BusinessSolution from './BusinessSolution'
import Benefit from './Benefit'
import Narbar from './Narbar'

const inter = Inter({ subsets: ['latin'] })

export default function DoanhNghiep() {
    return (



        <>

            <IntroHeaderDN />
            <Narbar />
            {/* <Introduce />
            <BusinessSolution />
            <Benefit /> */}

        </>





    )
}
