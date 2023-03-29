'use client'
import { DataTT } from '../../components/Data/DataTT'
import { Grid, Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import List from '@mui/material/List';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';

import Link from 'next/link'
const ListItem = () => {
    const router = useRouter();
    return (


        <Grid container xs={12} sm={12} spacing={2} >
            {DataTT.map((e, i) =>
                < Grid item xs={12} sm={4} >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={e.img}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {e.name}

                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Link href={`/ListNew/${e.id}`}>
                                <Button size="small">Learn More</Button>
                            </Link>


                        </CardActions>
                    </Card>
                </Grid >
            )
            }
        </Grid >
    )
}

export default ListItem