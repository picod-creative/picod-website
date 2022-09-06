import { FC } from 'react';
import { Avatar, Box, Stack, Typography } from '@mui/material';

import Section from './Section';
import Card from '../../common/Card';
import NextSlider from '../../common/NextSlider';
import useResponsiveStyleValue from '../../../hooks/useResponsiveStyleValue';
import { HomeSectionProps } from '../../../@types';

const testimonialsList = [
  {
    id: '1',
    name: 'john doe',
    role: 'web developer',
    image: '/img/profile/profile.png',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas lacinia ullamcorper neque sit pretium amet tortor sit. Duis nibh mauris ac odio vel donec ipsum sed. Nascetur tristique odio aliquet et, amet mattis non molestie a.',
  },
  {
    id: '1',
    name: 'john doe',
    role: 'web developer',
    image: '/img/profile/profile.png',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas lacinia ullamcorper neque sit pretium amet tortor sit. Duis nibh mauris ac odio vel donec ipsum sed. Nascetur tristique odio aliquet et, amet mattis non molestie a.',
  },
  {
    id: '1',
    name: 'john doe',
    role: 'web developer',
    image: '/img/profile/profile.png',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas lacinia ullamcorper neque sit pretium amet tortor sit. Duis nibh mauris ac odio vel donec ipsum sed. Nascetur tristique odio aliquet et, amet mattis non molestie a.',
  },
  {
    id: '1',
    name: 'john doe',
    role: 'web developer',
    image: '/img/profile/profile.png',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas lacinia ullamcorper neque sit pretium amet tortor sit. Duis nibh mauris ac odio vel donec ipsum sed. Nascetur tristique odio aliquet et, amet mattis non molestie a.',
  },
];

type TestimonialCardProps = {
  id: string;
  name: string;
  role: string;
  image: string;
  testimonial: string;
};

const TestimonialCard: FC<TestimonialCardProps> = ({
  id,
  name,
  role,
  image,
  testimonial,
}) => (
  <Stack direction="column" alignItems="center">
    <Avatar
      alt={name}
      src={image}
      sx={(theme) => ({
        width: 144,
        height: 144,
        mb: -12,
        zIndex: 2,
        [theme.breakpoints.down('md')]: { width: 110, height: 110 },
      })}
    />
    <Card
      borderRadius={6.5}
      sx={{
        width: '100%',
        pt: 9,
        pb: 3,
        mt: 5,
        '& .contentWrapper': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'visible',
        },
      }}
    >
      <Typography
        align="center"
        sx={(theme) => ({
          fontWeight: 'bolder',
          fontSize: `${theme.typography.pxToRem(18)} !important`,
        })}
      >
        {name}
      </Typography>
      <Typography
        align="center"
        color="secondary"
        sx={(theme) => ({
          fontWeight: 'light',
          fontSize: `${theme.typography.pxToRem(16)} !important`,
          mb: 2,
        })}
      >
        {role}
      </Typography>
      <Typography
        align="center"
        variant="body2"
        sx={(theme) => ({
          [theme.breakpoints.down('md')]: {
            fontSize: theme.typography.pxToRem(12),
          },
        })}
      >
        {testimonial}
      </Typography>
    </Card>
  </Stack>
);

const TestimonialsSection: FC<HomeSectionProps> = ({ active, onEnter }) => {
  const centerPadding = useResponsiveStyleValue({
    xs: '60px',
    md: '210px',
    lg: '292px',
  });

  return (
    <Section
      id="testimonials"
      prefix="Ici nos"
      title="Témoignages"
      active={active}
      onEnter={() => onEnter?.('testimonials')}
      sx={(theme) => ({
        '& .testimonialSlide': {
          [theme.breakpoints.down('md')]: {
            mx: -2,
          },
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: centerPadding,
            background: `linear-gradient(to right, ${theme.palette.background.default} 10%, ${theme.palette.background.default}99 70%, ${theme.palette.background.default}00 100%)`,
            zIndex: 10,
            pointerEvents: 'none',
          },
          '&::before': {
            left: 0,
          },
          '&::after': {
            right: -1,
            transform: 'rotate(180deg)',
          },
        },
      })}
    >
      <Typography
        sx={(theme) => ({
          mb: 10,
          [theme.breakpoints.down('md')]: {
            mb: 4,
          },
        })}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas lacinia
        ullamcorper neque sit pretium amet tortor sit. Duis nibh mauris ac odio
        vel donec ipsum sed. Nascetur tristique odio aliquet et, amet mattis non
        molestie a.
      </Typography>

      <NextSlider
        className="testimonialSlide"
        centerMode={true}
        arrows={false}
        centerPadding={centerPadding}
        slidesToShow={1}
        autoplay
        autoplaySpeed={3000}
      >
        {testimonialsList.map((testimonial, index) => (
          <Box
            key={index}
            sx={(theme) => ({
              px: 4,
              [theme.breakpoints.down('md')]: { px: 1 },
            })}
          >
            <TestimonialCard key={index} {...testimonial} />
          </Box>
        ))}
      </NextSlider>
    </Section>
  );
};

export default TestimonialsSection;
