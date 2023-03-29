
'use client'
import { Inter } from 'next/font/google'


import HeaderLH from './Header'
import New from './new'
import ItemCarouse from './ItemCarouse'
import Map from './Map'


const inter = Inter({ subsets: ['latin'] })

export default function LienHe() {
    return (



        <>

            <HeaderLH />
            <New />
            <ItemCarouse />
            <Map />
        </>





    )
}
