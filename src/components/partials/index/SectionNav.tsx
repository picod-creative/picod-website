import {
  createRef,
  FC,
  MouseEventHandler,
  useCallback,
  useEffect,
} from 'react';
import type { Section } from '../../../@types';
import { Container, Tab, Tabs, Box, useScrollTrigger } from '@mui/material';
import { useDimensionContext } from '../../common/DimensionContext';
import { scrollTo } from '../../../utils/window';

export const sections: Section[] = [
  {
    id: 'services',
    title: 'Services',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
  },
  {
    id: 'whyUs',
    title: 'Pourquoi nous',
  },
  {
    id: 'ourWeapons',
    title: 'Nos armes',
  },
  {
    id: 'ourTeams',
    title: 'Nos équipes',
  },
  {
    id: 'testimonial',
    title: 'Témoignages',
  },
];

export interface SectionNavProps {
  activeSection: string;
}

const SectionNav: FC<SectionNavProps> = ({ activeSection }) => {
  const ref = createRef<HTMLDivElement>();

  const { sectionNavHeight, setSectionNavHeight, navHeight, hiddenNavbar } =
    useDimensionContext();
  const scrollTrigger = useScrollTrigger();

  const onTabClick = useCallback<MouseEventHandler<HTMLDivElement>>(
    (e) => {
      e.preventDefault();
      const target = e.currentTarget,
        sectionTarget = target.dataset.target,
        targetElement = sectionTarget && document.getElementById(sectionTarget);

      if (targetElement) {
        scrollTo({
          top: targetElement.offsetTop - navHeight - sectionNavHeight,
        });
      }
    },
    [navHeight, sectionNavHeight]
  );

  useEffect(() => {
    if (ref.current) {
      setSectionNavHeight(ref.current.offsetHeight);
    }
  }, [ref, setSectionNavHeight]);

  return (
    <Box
      sx={(theme) => ({
        position: 'sticky',
        top: !scrollTrigger ? theme.typography.pxToRem(navHeight) : 0,
        backgroundColor: '#0f0f0f',
        zIndex: theme.zIndex.drawer,
        transition: 'top 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
        [theme.breakpoints.down('md')]: {
          display: 'none',
        },
      })}
    >
      <Container>
        <Tabs
          variant="fullWidth"
          value={activeSection}
          centered
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: 'text.primary',
            },
          }}
        >
          {sections.map(({ id, title }) => (
            <Tab
              key={id}
              label={title}
              value={id}
              data-target={id}
              sx={(theme) => ({
                textTransform: 'none',
                p: 4,
                fontSize: theme.typography.pxToRem(18),
                '&.Mui-selected': {
                  color: 'text.primary',
                },
              })}
              onClick={onTabClick}
            />
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default SectionNav;
