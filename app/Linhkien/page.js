
'use client'
import { Container } from '@mui/system'
import { Inter } from 'next/font/google'

import Item from './Item'




const inter = Inter({ subsets: ['latin'] })

export default function Linhkien() {
    return (
        <Container sx={{ display: 'flex', marginTop: 5, marginBottom: 5 }}>
            <Item />
        </Container>
    )
}
