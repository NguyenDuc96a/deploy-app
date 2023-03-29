'use client'



import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Hinh from '../../../public/static/Logo/de-heus-logo.jpg'
import Hinh1 from '../../../public/static/Logo/galaxy-studio.png'
import Hinh2 from '../../../public/static/Logo/kizuna.png'
import Hinh3 from '../../../public/static/Logo/lien-anh-rubber.png'
import Hinh4 from '../../../public/static/Logo/sense-city.png'
import Hinh5 from '../../../public/static/Logo/tin-nghia-corp.png'
import Hinh6 from '../../../public/static/Logo/ttc-edu.png'
import Hinh7 from '../../../public/static/Logo/vng.png'
import Hinh8 from '../../../public/static/Logo/logo1a.png'
import Hinh9 from '../../../public/static/Logo/logo3a.png'
import Hinh10 from '../../../public/static/Logo/novaland.png'
import Hinh11 from '../../../public/static/Logo/kymdan.png'

export default function PartnerImage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box >
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                <Tab
                    icon={<Image src={Hinh} priority alt="Image"
                        style={{
                            display: 'block',
                            height: '20vh',
                            margin: 'auto',
                            width: '15vw'
                        }} />}
                />
                <Tab
                    icon={<Image src={Hinh1} priority alt="Image"
                        style={{
                            display: 'block',
                            height: '20vh',
                            margin: 'auto',
                            width: '15vw'
                        }} />}
                />
                <Tab
                    icon={<Image src={Hinh2} priority alt="Image"
                        style={{
                            display: 'block',
                            height: '20vh',
                            margin: 'auto',
                            width: '15vw'
                        }} />}
                />
                <Tab
                    icon={<Image src={Hinh3} priority alt="Image"
                        style={{
                            display: 'block',
                            height: '20vh',
                            margin: 'auto',
                            width: '15vw'
                        }} />}
                />
                <Tab
                    icon={<Image src={Hinh4} priority alt="Image"
                        style={{
                            display: 'block',
                            height: '20vh',
                            margin: 'auto',
                            width: '15vw'
                        }} />}
                />
                <Tab
                    icon={<Image src={Hinh5} priority alt="Image"
                        style={{
                            display: 'block',
                            height: '20vh',
                            margin: 'auto',
                            width: '15vw'
                        }} />}
                />

                <Tab
                    icon={<Image src={Hinh6} priority alt="Image"
                        style={{
                            display: 'block',
                            height: '20vh',
                            margin: 'auto',
                            width: '15vw'
                        }} />}
                />
                <Tab
                    icon={<Image src={Hinh7} priority alt="Image"
                        style={{
                            display: 'block',
                            height: '20vh',
                            margin: 'auto',
                            width: '15vw'
                        }} />}
                />
                <Tab
                    icon={<Image src={Hinh8} priority alt="Image"
                        style={{
                            display: 'block',
                            height: '20vh',
                            margin: 'auto',
                            width: '15vw'
                        }} />}
                />
                <Tab
                    icon={<Image src={Hinh9} priority alt="Image"
                        style={{
                            display: 'block',
                            height: '20vh',
                            margin: 'auto',
                            width: '15vw'
                        }} />}
                />
                <Tab
                    icon={<Image src={Hinh10} priority alt="Image"
                        style={{
                            display: 'block',
                            height: '20vh',
                            margin: 'auto',
                            width: '15vw'
                        }} />}
                />
                <Tab
                    icon={<Image src={Hinh11} priority alt="Image"
                        style={{
                            display: 'block',
                            height: '20vh',
                            margin: 'auto',
                            width: '15vw'
                        }} />}
                />
            </Tabs>
        </Box>
    );
}