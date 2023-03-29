'use client'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import { Box, Button, Divider, Grid, Typography, IconButton, Toolbar } from "@mui/material"
import { Posts } from '../../components/Data/DataCT';
export default function PinnedSubheaderList() {
    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 760,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 700,
                '& ul': { padding: 0 },
            }}

        >

            <Box >
                {Posts.map((e, i) =>


                    <Grid padding={2} container xs={12} sm={12}

                    >

                        <Grid item xs={12} sm={12}>
                            <Typography color={'blue'}>{e.name}</Typography>
                            <Typography>{e.diachi}</Typography>
                        </Grid>


                    </Grid>

                )}
            </Box>

        </List>
    );
}