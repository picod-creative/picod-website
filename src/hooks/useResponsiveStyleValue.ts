import { useTheme } from '@mui/material';
import { ResponsiveStyleValue, Breakpoint } from '@mui/system';
import useWindowSize from './useWindowSize';

const sortedBreakpoints: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl'];

type UseResponsiveStyleValue = <T>(
  value: ResponsiveStyleValue<T>
) => T | undefined;

/**
 * Hook for getting the responsive style value matching the current window size.
 */
const useResponsiveStyleValue: UseResponsiveStyleValue = (value) => {
  const {
    breakpoints: { values: breakpointValues },
  } = useTheme();
  const { width } = useWindowSize();

  if (typeof value !== 'object' && !Array.isArray(value)) {
    return value;
  }

  if (typeof value === 'object') {
    const keys: Breakpoint[] = Object.keys(value).sort(
      (a, b) =>
        sortedBreakpoints.indexOf(b as Breakpoint) -
        sortedBreakpoints.indexOf(a as Breakpoint)
    ) as Breakpoint[];
    if (!keys.length) return 0;

    for (let key of keys) {
      if (key in breakpointValues) {
        if (width !== undefined) {
          if (width > breakpointValues[key]) {
            return (value as { [key in Breakpoint]: any })[key];
          }
        }
      }
    }
  }
};

export default useResponsiveStyleValue;
