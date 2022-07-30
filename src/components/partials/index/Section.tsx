import { forwardRef, HTMLAttributes, useImperativeHandle, useRef } from 'react';
import { Container, ContainerProps, Typography } from '@mui/material';
import InView from '../../common/InView';

export type SectionProps = HTMLAttributes<HTMLElement> &
  ContainerProps<'section'> & {
    prefix?: string;
    title: string;
    active?: boolean;
    onEnter?: () => void;
  };

const Section = forwardRef<HTMLElement | null, SectionProps>(
  ({ prefix, title, children, active, onEnter, ...props }, ref) => {
    const sectionRef = useRef<HTMLElement>(null);

    useImperativeHandle<HTMLElement | null, HTMLElement | null>(
      ref,
      () => sectionRef.current
    );

    return (
      <InView targetRef={sectionRef} onEnter={onEnter} threshold={160}>
        <Container
          ref={sectionRef}
          component="section"
          {...props}
          sx={(theme) => ({
            [theme.breakpoints.down('md')]: {
              py: 5,
            },
            ...(typeof (props.sx as any) === 'function'
              ? (props.sx as any)(theme)
              : props.sx),
            py: 6.5,
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
      </InView>
    );
  }
);

Section.displayName = 'Section';

export default Section;
