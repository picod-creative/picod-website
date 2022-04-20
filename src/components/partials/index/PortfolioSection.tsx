import { FC, useState } from 'react';
import { Tab, Tabs, Theme, Typography, useMediaQuery } from '@mui/material';
import Section from './Section';

export interface PortfolioSectionProps {
  active?: boolean;
  onEnter?: (value: string) => void;
}

const PortfolioSection: FC<PortfolioSectionProps> = ({ active, onEnter }) => {
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const [currentTab, setCurrentTab] = useState<string>('all');

  return (
    <Section
      id="portfolio"
      prefix="Notre"
      title="Portfolio"
      active={active}
      onEnter={() => onEnter?.('portfolio')}
      sx={{
        position: 'relative',
        '&::before': {
          zIndex: -1,
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: '50%',
          width: '100vw',
          transform: 'translateX(-50%)',
          height: 'clamp(0px, 771px, 100%)',
          backgroundImage:
            'linear-gradient(180deg, #1A1A1A 0%, rgba(24, 24, 24, 0) 100%)',
        },
      }}
    >
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas lacinia
        ullamcorper neque sit pretium amet tortor sit. Duis nibh mauris ac odio
        vel donec ipsum sed. Nascetur tristique odio aliquet et, amet mattis non
        molestie a. Blandit ut feugiat eu luctus aliquet eget neque bibendum
        diam. Tempus dapibus aenean sit in consequat. Sed rutrum praesent
        euismod nullam. Lectus eget nunc habitant id urna amet. Urna libero
        mauris eu suspendisse elit, enim. Maecenas eu ac sollicitudin viverra
        nec aliquet at vulputate.
      </Typography>
      <Tabs
        value={currentTab}
        onChange={(_, newValue) => setCurrentTab(newValue)}
        centered={!mobile}
        variant={mobile ? 'scrollable' : 'standard'}
        textColor="secondary"
        sx={(theme) => ({
          mt: 7.5,
          '& .MuiTabs-indicator': {
            backgroundColor: 'text.primary',
          },
          '& .MuiTab-root': {
            textTransform: 'none',
            fontSize: theme.typography.pxToRem(18),
          },
        })}
      >
        <Tab label="Tous" value="all" />
        <Tab label="Web" value="web" />
        <Tab label="Apps" value="app" />
        <Tab label="Logiciel" value="software" />
        <Tab label="Graphic Design" value="design" />
      </Tabs>
    </Section>
  );
};

export default PortfolioSection;
