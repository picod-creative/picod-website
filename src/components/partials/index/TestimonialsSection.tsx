import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import Section from './Section';

export interface ServiceSectionProps {
  active?: boolean;
  onEnter?: (value: string) => void;
}

const TestimonialsSection: FC<ServiceSectionProps> = ({ active, onEnter }) => {
  return (
    <Section
      id="testimonials"
      prefix="Ici nos"
      title="Testimonial"
      active={active}
      onEnter={() => onEnter?.('ourTeam')}
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
      <Grid container justifyContent="center" alignItems="center"></Grid>
    </Section>
  );
};

export default TestimonialsSection;
