
'use client'

import { Container } from '@mui/material'
import { Inter } from 'next/font/google'
import HeaderTT from './Header'
import ListItem from './List'
const inter = Inter({ subsets: ['latin'] })

export default function Tintuc() {
    return (
        <>

            <HeaderTT />
            <Container sx={{ display: 'flex', marginTop: 5, marginBottom: 5 }}>
                <ListItem />
            </Container>
        </>
    )
}
