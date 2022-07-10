import { FC } from 'react';
import { Box, SxProps, Theme, useTheme } from '@mui/material';

export interface ArrowProps {
  direction: 'up' | 'down' | 'left' | 'right';
  size?: number;
  thickness?: number;
  color?: string;
  sx?: SxProps<Theme>;
}

const Arrow: FC<ArrowProps> = ({
  direction,
  color,
  thickness = 4,
  size = 80,
  sx = {},
}) => {
  const theme = useTheme();
  color = color ?? theme.palette.primary.main;

  return (
    <Box
      sx={(theme) => ({
        height: direction === 'up' || direction === 'down' ? size : thickness,
        width: direction === 'up' || direction === 'down' ? thickness : size,
        py:
          direction === 'up' || direction === 'down' ? 0 : `${thickness / 2}px`,
        px:
          direction === 'up' || direction === 'down' ? `${thickness / 2}px` : 0,
        display: 'flex',
        boxSizing: 'content-box',
        flexDirection:
          direction === 'up' || direction === 'down' ? 'column' : 'row',
        alignItems: 'center',
        ...(typeof sx === 'function' ? (sx as any)(theme) : sx),
        '&:before, &:after': {
          content: '""',
          display: 'block',
        },
        '&:before': {
          flexGrow: 1,
          height:
            direction === 'right' || direction === 'left' ? '60%' : undefined,
          width: direction === 'up' || direction === 'down' ? '60%' : undefined,
          backgroundColor: color,
        },
        '&:after': {
          width: 0,
          height: 0,
          order: direction === 'up' || direction === 'left' ? -1 : undefined,
          borderTop:
            direction === 'down'
              ? `${thickness}px solid ${color}`
              : direction === 'right' || direction === 'left'
              ? `${thickness}px solid transparent`
              : undefined,
          borderLeft:
            direction === 'right'
              ? `${thickness}px solid ${color}`
              : direction === 'up' || direction === 'down'
              ? `${thickness}px solid transparent`
              : undefined,
          borderRight:
            direction === 'left'
              ? `${thickness}px solid ${color}`
              : direction === 'up' || direction === 'down'
              ? `${thickness}px solid transparent`
              : undefined,
          borderBottom:
            direction === 'up'
              ? `${thickness}px solid ${color}`
              : direction === 'right' || direction === 'left'
              ? `${thickness}px solid transparent`
              : undefined,
          zIndex: -1,
        },
      })}
    />
  );
};

export default Arrow;
