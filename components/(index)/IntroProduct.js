import { WrapperPage } from "@/shared/WrapperPage"
import { Button, Typography } from "@mui/material"

import Tabs from '../../shared/tabs/tabs'
import Link from 'next/link'
export const IntroProduct = () => {
    return (
        <WrapperPage title="SẢN PHẨM TIÊU CHUẨN VÀ CHẤT LƯỢNG" value="THIẾT BỊ & PHỤ KIỆN">
            <Tabs />
            <Link href="/Linhkien" legacyBehavior >
                <Button variant="contained" color="success">Xem tất cả</Button>
            </Link>
        </WrapperPage>

    )
} 