import React, { useEffect, useRef } from 'react';
import {
  CardProps as MuiCardProps,
  Card as MuiCard,
  useMediaQuery,
  Theme,
  Button,
} from '@mui/material';

interface CardProps extends MuiCardProps {
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  background?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  borderRadius = 2.5,
  borderWidth = 1,
  borderColor,
  background = 'radial-gradient(150% 150% at 0% 100%, #1F1F1F 0%, #111111 100%)',
  backgroundImage,
  backgroundColor,
  backgroundSize,
  backgroundPosition,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  // Listen for every mouse move on the body, and update the border's background accordingly
  useEffect(() => {
    let lastMouseY: number,
      onMouseMove: ((this: Document, event: MouseEvent) => void) | null = null,
      onScroll: ((this: Document, event: Event) => void) | null = null;

    // Only run this effect if we are not on mobile
    if (!isMobile) {
      onMouseMove = function (e) {
        if (cardRef.current) {
          const { x, y } = cardRef.current.getBoundingClientRect();
          const { clientX, clientY } = e;
          lastMouseY = clientY;

          if (borderRef.current) {
            // Get the mouse position relative to the card
            const offsetX = clientX - x - borderRef.current.offsetWidth / 2,
              offsetY = clientY - y - borderRef.current.offsetHeight / 2;
            // Set the custom properties on the border used for the background's position
            borderRef.current.style.setProperty('--offsetX', `${offsetX}px`);
            borderRef.current.style.setProperty('--offsetY', `${offsetY}px`);
          }
        }
      };

      onScroll = function (e) {
        if (cardRef.current) {
          const { y } = cardRef.current.getBoundingClientRect();

          if (borderRef.current && lastMouseY !== undefined) {
            // Update position in the y axis as we know the card is moving only in the y axis when scrolling
            const offsetY = lastMouseY - y - borderRef.current.offsetHeight / 2;
            borderRef.current.style.setProperty('--offsetY', `${offsetY}px`);
          }
        }
      };

      document.addEventListener('scroll', onScroll);
      document.addEventListener('mousemove', onMouseMove);
    }

    return () => {
      // Cleanup all event listeners on unmount
      onScroll && document.removeEventListener('scroll', onScroll);
      onMouseMove && document.removeEventListener('mousemove', onMouseMove);
      onScroll = onMouseMove = null;
    };
  }, [borderRadius, borderRef, isMobile]);

  return (
    <MuiCard
      component={Button}
      ref={cardRef}
      tabIndex={0}
      {...props}
      elevation={0}
      sx={(theme) => ({
        position: 'relative',
        p: 2,
        zIndex: 1,
        borderRadius,
        textTransform: 'none',
        textAlign: 'left',
        alignItems: 'flex-start',
        '& .border': {
          display: 'block',
          position: 'absolute',
          left: 0,
          top: 0,
          overflow: 'visible',
          width: '175%',
          aspectRatio: '1/1',
          borderRadius,
          zIndex: -1,
          backgroundImage: `radial-gradient(circle at center, ${
            borderColor || theme.palette.secondary.main
          } 0%, rgba(255, 164, 29, 0) 60%)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `var(--offsetX, -1000px) var(--offsetY, -1000px)`,
          [theme.breakpoints.down('md')]: {
            display: 'none',
          },
        },
        '&::after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          left: borderWidth,
          top: borderWidth,
          right: borderWidth,
          bottom: borderWidth,
          borderRadius,
          zIndex: -1,
          ...{
            background,
            backgroundImage,
            backgroundColor,
            backgroundSize,
            backgroundPosition,
          },
        },
        ...((typeof props.sx as any) === 'function'
          ? (props.sx as any)(theme)
          : props.sx),
      })}
    >
      <div ref={borderRef} className="border" />
      <div className="contentWrapper">{children}</div>
    </MuiCard>
  );
};

export default Card;
