'use client'
import useDialogModal from '@/hooks/useDialogModal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Image from 'next/image';
import ProductImg from './ProductImg';
import { useState, memo, useEffect, useCallback, useMemo } from 'react';
import { Box } from '@mui/material';


// const MemoizedTab = memo(({ img }) => (
//     <Tab key={img.k} icon={<Image draggable="false" src={img.v} priority alt="Image" width={120} height={120} />} />
//   ));


function VerticalTabs({ PathImg }) {
    const [value, setValue] = useState(0);
    const [ProductDetailDialog, showProductDetailDialog] = useDialogModal(ProductImg);

    const handleChange = useCallback((event, newValue) => {
        setValue(newValue);
    }, []);

    const handlePrevClick = useCallback(() => {
        setValue((prevValue) => (prevValue - 1 + PathImg.length) % PathImg.length);
    }, [PathImg.length]);

    const handleNextClick = useCallback(() => {
        setValue((prevValue) => (prevValue + 1) % PathImg.length);
    }, [PathImg.length]);

    const productImage = useMemo(() => PathImg?.[value]?.v ?? PathImg?.[0]?.v, [PathImg, value]);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            {productImage && (
                <Image
                    draggable="false"
                    onClick={() => showProductDetailDialog()}
                    src={productImage}
                    alt="showProduct"
                    priority
                    width={300}
                    height={360}

                />
            )}
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                {PathImg?.map((img) => (
                    <Tab key={img.k} icon={<Image draggable="false" src={img.v} priority alt="Image" width={120} height={120} />} />
                ))}
            </Tabs>
            {productImage && <ProductDetailDialog product={productImage} onPrevClick={handlePrevClick} onNextClick={handleNextClick} />}
        </Box>
    );
}

export default memo(VerticalTabs);
