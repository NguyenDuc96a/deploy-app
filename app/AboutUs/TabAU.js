import { Box, Tab, Tabs, Typography, Grid } from '@mui/material';
import { useState } from 'react';
import TabAUitem from '../../shared/tabs/TabAUitem'
import TabAUitem2 from '../../shared/tabs/TabAUitem2'
function TabAU() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    return (
        <Box >
            <Box padding={5}>
                <Tabs value={tabIndex} onChange={handleTabChange} style={{

                }} >
                    <Tab label="Công ty thành viên" sx={{ background: '#fff' }} />

                    <Tab label="Đại lý" sx={{ background: 'black', color: '#fff' }} />

                </Tabs>
            </Box>
            <Box sx={{ padding: 2 }}>
                {tabIndex === 0 && (
                    <Box>
                        <TabAUitem />
                    </Box>
                )}
                {tabIndex === 1 && (
                    <Box>
                        <TabAUitem2 />
                    </Box>
                )}

            </Box>
        </Box>
    );
}

export default TabAU;