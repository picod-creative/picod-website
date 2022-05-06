import { FC, useState } from 'react';
import {
  Tab,
  Tabs,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Section from './Section';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from '../../common/TabPanel';

const tabs = [
  {
    value: 'all',
    label: 'Tous',
  },
  {
    value: 'web',
    label: 'Web',
  },
  {
    value: 'app',
    label: 'App',
  },
  {
    value: 'software',
    label: 'Logiciel',
  },
  {
    value: 'design',
    label: 'Design',
  },
];

export interface PortfolioSectionProps {
  active?: boolean;
  onEnter?: (value: string) => void;
}

const PortfolioSection: FC<PortfolioSectionProps> = ({ active, onEnter }) => {
  const theme = useTheme();
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

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
        value={tabs[currentTabIndex].value}
        onChange={(_, newValue) =>
          setCurrentTabIndex(tabs.findIndex((tab) => tab.value === newValue))
        }
        centered={!mobile}
        variant={mobile ? 'scrollable' : 'standard'}
        scrollButtons="auto"
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
          [theme.breakpoints.down('md')]: {
            mt: 2,
          },
        })}
      >
        {tabs.map((tab, i) => (
          <Tab key={tab.value} {...tab} id={`portfolio-category-tab-${i}`} />
        ))}
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={currentTabIndex}
        onChangeIndex={setCurrentTabIndex}
      >
        {tabs.map((tab, i) => (
          <TabPanel
            key={tab.value}
            name="portfolio-category"
            index={currentTabIndex}
            value={i}
            sx={{
              pt: 8,
              pb: 4,
            }}
          >
            <Typography textAlign="center">{tab.label}</Typography>
          </TabPanel>
        ))}
      </SwipeableViews>
    </Section>
  );
};

export default PortfolioSection;
