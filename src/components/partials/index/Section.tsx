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
    sx={(theme) => ({
      ...(typeof (props.sx as any) === 'function'
        ? (props.sx as any)(theme)
        : props.sx),
      py: 6.5,
      [theme.breakpoints.down('md')]: {
        py: 5,
      },
    })}
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
        [theme.breakpoints.down('md')]: {
          mb: 1.5,
          fontSize: theme.typography.pxToRem(24),
          '&::after': {
            width: '21vw',
            bottom: theme.spacing(0.5),
          },
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
