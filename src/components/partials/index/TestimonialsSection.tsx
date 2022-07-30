import { FC, useState } from 'react';
import Slider from 'react-slick';
import { Avatar, Box, Stack, Typography } from '@mui/material';

import Section from './Section';
import Card from '../../common/Card';
import NextSlider from '../../common/NextSlider';

export interface ServiceSectionProps {
  active?: boolean;
  onEnter?: (value: string) => void;
}

type TestimonialCardProps = {
  id: string;
  name: string;
  role: string;
  image: string;
  testimonial: string;
};

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
      sx={{ width: 144, height: 144, mb: -12, zIndex: 2 }}
    />
    <Card
      borderRadius={6.5}
      sx={(theme) => ({
        width: '100%',
        pt: 8,
        pb: 3,
        mt: 5,
        '& .contentWrapper': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'visible',
        },
      })}
    >
      <Typography
        align="center"
        sx={{ fontWeight: 'bolder', fontSize: 18, mb: 0.625 }}
      >
        {name}
      </Typography>
      <Typography
        align="center"
        color="secondary"
        sx={{
          fontWeight: 'light',
          fontSize: 16,
          mb: 3,
        }}
      >
        {role}
      </Typography>
      <Typography align="center" variant="body2">
        {testimonial}
      </Typography>
    </Card>
  </Stack>
);

const TestimonialsSection: FC<ServiceSectionProps> = ({ active, onEnter }) => {
  return (
    <Section
      id="testimonials"
      prefix="Ici nos"
      title="Testimonial"
      active={active}
      onEnter={() => onEnter?.('ourTeam')}
      key="testimonials"
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
      {/* <Grid container justifyContent="center" alignItems="center"></Grid> */}

      <NextSlider
        className="center"
        centerMode={true}
        arrows={false}
        centerPadding={'292px'}
        slidesToShow={1}
        speed={500}
      >
        {testimonialsList.map((testimonial, index) => (
          <Box px={4}>
            <TestimonialCard key={index} {...testimonial} />
          </Box>
        ))}
      </NextSlider>
    </Section>
  );
};

export default TestimonialsSection;
