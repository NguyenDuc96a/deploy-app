'use client'
import { Button, Grid, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Carosel = () => {
  const Responsive = {
    // superLargeDesktop: {
    //     // the naming can be any, depends on you.
    //     breakpoint: { max: 4000, min: 200 },
    //     items: 1
    // },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1
    }
  }
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={Responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      // showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <Grid container  >
        <Grid item xs={12} md={6} >
          <Paper sx={{ minHeight: '60vh' }}>
            <Stack spacing={2} padding={7} justifyContent="space-around" alignItems="center">
              <Typography variant="h6"> Diện tích mái: 35 m2</Typography>
              <Typography> Giải pháp tiết kiệm điện, sở hữu nguồn năng lượng xanh tiên tiến dành cho hộ gia đình.</Typography>
              <Typography> Công suất điện : 120(kh/h)</Typography>
              <Button variant='contained' endIcon={<ArrowForwardIcon />}> Nhận báo giá</Button>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            alt="Ausrufezeichenxs"
            src="/img-new.jpg"
            sizes="(max-width: 768px) 50vw,
                            (max-width: 1200px) 50vw,
                            33vw"
            width="200"
            height="200"
            style={{
              height: '90%',
              width: '100%'
            }}
          />

        </Grid>
      </Grid>
    </Carousel>
  )
}

export default Carosel