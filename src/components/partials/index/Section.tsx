import type { FC, HTMLAttributes } from 'react';
import { Container, ContainerProps, Typography } from '@mui/material';

export type SectionProps = HTMLAttributes<HTMLElement> &
  ContainerProps<'section'> & {
    prefix?: string;
    title: string;
  };

const Section: FC<SectionProps> = ({ prefix, title, children, ...props }) => (
  <Container
    component="section"
    {...props}
    sx={{
      py: 6.5,
    }}
  >
    <Typography
      variant="h1"
      sx={(theme) => ({
        position: 'relative',
        fontSize: theme.typography.pxToRem(36),
        textTransform: 'uppercase',
        fontWeight: 800,
        lineHeight: 1,
        mb: 6.25,
        '&::after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          right: 0,
          bottom: theme.spacing(2.25),
          backgroundColor: theme.palette.secondary.main,
          width: 330,
          height: 2,
        },
      })}
    >
      {prefix ? (
        <>
          <Typography
            component="span"
            color="secondary"
            sx={{ textTransform: 'none', fontWeight: 500, lineHeight: 1 }}
          >
            {prefix}
          </Typography>
          <br />
        </>
      ) : null}
      {title}
    </Typography>
    {children}
  </Container>
);

export default Section;
