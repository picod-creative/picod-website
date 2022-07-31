import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings as SliderSettings } from 'react-slick';
import { Box, Stack } from '@mui/material';
import { forwardRef } from 'react';

const NextSlider = forwardRef<Slider, SliderSettings>((props, ref) => {
  return (
    <Slider
      ref={ref}
      dots={true}
      appendDots={(dots) => (
        <Stack
          component="ul"
          direction="row"
          spacing={0.75}
          sx={(theme) => ({
            listStyle: 'none',
            position: 'static !important',
            my: `${theme.spacing(2)} !important`,
            li: {
              height: 'auto !important',
              width: 'auto !important',
              '&:first-of-type': {
                m: 0,
              },
            },
          })}
        >
          {dots}
        </Stack>
      )}
      customPaging={(index) => (
        <Box
          sx={(theme) => ({
            height: 12,
            borderRadius: 6,
            width: 12,
            backgroundColor: 'gray',
            transition: 'all 250ms ease-in-out',
            'li.slick-active &': {
              width: 30,
              backgroundColor: theme.palette.secondary.main,
            },
          })}
        />
      )}
      {...props}
    />
  );
});

NextSlider.displayName = 'NextSlider';

export default NextSlider;
