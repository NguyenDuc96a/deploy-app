'use client'
import { Box, Button, Container, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBarMui from '@mui/material/AppBar';
import MenuItems from '../Header/MenuItems';
import { menu } from '../../lib/menu/menu'
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';
import * as Actions from '../../redux/Actions'
import { useDispatch } from 'react-redux';
import Hinh from '../../../public/Trường Đức Logo-04.png'
import Image from 'next/image';
const AppBar = () => {
    const dispatch = useDispatch()
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    return (
        <AppBarMui
            position="sticky"
            color='inherit'
            sx={{
                backgroundImage: 'linear-gradient(to right, #980d05, #71030c, #b20000, #71030c, #b20000)',

            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <IconButton
                    color='inherit'
                    aria-label='open drawer'
                    edge='start'
                    onClick={() => dispatch(Actions.default.set_drawerOpen(true))}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>

                <Box />
                <Image
                    src={Hinh}
                    alt="ImageLogo"
                    style={{
                        height: '8%',
                        width: '8%',
                    }}
                />
                {matches ? menu.map((item, key) => <MenuItems key={key} item={item} />) : null}

            </Toolbar>
        </AppBarMui>
    )
}

export default AppBar