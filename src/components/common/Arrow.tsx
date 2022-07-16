import { FC } from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { ResponsiveStyleValue } from '@mui/system';
import useResponsiveStyleValue from '../../hooks/useResponsiveStyleValue';

export interface ArrowProps {
  direction: 'up' | 'down' | 'left' | 'right';
  size?: ResponsiveStyleValue<number>;
  thickness?: ResponsiveStyleValue<number>;
  color?: string;
  sx?: SxProps<Theme>;
}

const Arrow: FC<ArrowProps> = ({
  direction,
  color,
  thickness,
  size,
  sx = {},
}) => {
  const thicknessValue = useResponsiveStyleValue(thickness) ?? 4;
  const sizeValue = useResponsiveStyleValue(size) ?? 80;

  return (
    <Box
      sx={(theme) => {
        color = color ?? theme.palette.primary.main;

        return {
          height:
            direction === 'up' || direction === 'down'
              ? sizeValue
              : thicknessValue,
          width:
            direction === 'up' || direction === 'down'
              ? thicknessValue
              : sizeValue,
          py:
            direction === 'up' || direction === 'down'
              ? 0
              : `${thicknessValue / 2}px`,
          px:
            direction === 'up' || direction === 'down'
              ? `${thicknessValue / 2}px`
              : 0,
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
            width:
              direction === 'up' || direction === 'down' ? '60%' : undefined,
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
        };
      }}
    />
  );
};

export default Arrow;
