'use client'
import {
    Dialog,
    Slide,
    DialogContent,
    IconButton,
    Grid
} from "@mui/material";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import Image from "next/image";
import * as React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} mountOnEnter unmountOnExit />;
});

const ProductImg = ({ open, onClose, product, onPrevClick, onNextClick }) => {
    const handlePrevClick = () => {
        onPrevClick();
    };

    const handleNextClick = () => {
        onNextClick();
    };

    return (
        <Dialog
            TransitionComponent={Transition}
            variant="permanant"
            open={open}
            onClose={onClose}
        >

            <DialogContent >
                <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                    <Grid item >
                        <IconButton
                            onClick={() => handlePrevClick()}
                        >
                            <ArrowBackIosNewSharpIcon />
                        </IconButton>
                    </Grid>
                    <Grid item >
                        <Image draggable="false" src={product} width={270} height={270} alt="hinhanh" priority />
                    </Grid>
                    <Grid item >
                        <IconButton
                            onClick={() => handleNextClick()}
                        >
                            <ArrowForwardIosSharpIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default ProductImg