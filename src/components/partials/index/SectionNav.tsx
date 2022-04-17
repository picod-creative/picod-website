import { FC, useEffect, useState } from 'react';
import type { Section } from '../../../@types';
import { Container, Tab, Tabs, Box } from '@mui/material';

const sections: Section[] = [
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

const SectionNav: FC = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll: (this: Window, event: Event) => void = function (
      event
    ) {};

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={(theme) => ({
        position: 'sticky',
        top: theme.typography.pxToRem(126),
        backgroundColor: 'rgba(14, 14, 14, 0.6)',
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
