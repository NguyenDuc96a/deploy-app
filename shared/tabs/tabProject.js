import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Carosel from '../../shared/Carousel'
import ProjectCarousel from '../../components/Carousel/ProjectCarousel';
import ProjectCarouselpart from '@/components/Carousel/ProjectCarouselpart';

export default function CenteredTabProject() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', }}>
            <Tabs value={value} onChange={handleChange} centered >
                <Tab label="Hộ gia đình" style={{ background: 'red', color: '#fff', marginRight: 15 }} />
                <Tab label="Doanh Nghiệp" style={{ background: 'orange', color: '#fff' }} />
            </Tabs>
            <Box sx={{ padding: 2 }}>
                {value === 0 && (
                    <Box>
                        <ProjectCarousel />
                    </Box>
                )}
                {value === 1 && (
                    <Box>
                        <ProjectCarouselpart />
                    </Box>
                )}

            </Box>
        </Box>
    );
}