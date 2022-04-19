import type { FC } from 'react';
import type { Section } from '../../../@types';
import { Container, Tab, Tabs, Box, useScrollTrigger } from '@mui/material';

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
  setActiveSection: (section: string) => void;
}

const SectionNav: FC<SectionNavProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const scrollTrigger = useScrollTrigger();

  return (
    <Box
      sx={(theme) => ({
        position: 'sticky',
        top: !scrollTrigger ? theme.typography.pxToRem(126) : 0,
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
          onChange={(_, value) => setActiveSection(value)}
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
              sx={(theme) => ({
                textTransform: 'none',
                p: 4,
                fontSize: theme.typography.pxToRem(18),
                '&.Mui-selected': {
                  color: 'text.primary',
                },
              })}
            />
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default SectionNav;
