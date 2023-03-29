import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Image from "next/image"

export const WrapperPage = ({ title, value, children, backgroundImage }) => {
    return (
        <Grid2 container direction="column" justifyContent="space-between" alignItems="center"
            sx={{ backgroundImage: backgroundImage ? backgroundImage : 'none', textAlign: 'center' }} marginTop={5} >
            <Grid2 item xs={12} sm={12} >
                <Typography variant="subtitle1" >{title}</Typography>
            </Grid2>
            <Grid2 item xs={12} sm={12}>
                <Typography variant="h4" fontWeight={800}>{value}</Typography>
            </Grid2>
            {children}
        </Grid2>
    )
}