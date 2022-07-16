import { FC } from 'react';
import {
  Grid,
  Stack,
  SvgIconProps,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Section from './Section';
import Card from '../../common/Card';
import HTML5Icon from '../../icons/HTML5';
import CSS3Icon from '../../icons/CSS3';
import JSIcon from '../../icons/JS';
import DartIcon from '../../icons/Dart';
import FigmaIcon from '../../icons/Figma';
import AdobeXDIcon from '../../icons/AdobeXD';
import BlenderIcon from '../../icons/Blender';
import AdobeIcon from '../../icons/Adobe';
import ReactIcon from '../../icons/React';
import FlutterIcon from '../../icons/Flutter';
import NodeJSExpressIcon from '../../icons/NodeJSExpress';
import SymfonyIcon from '../../icons/Symfony';
import MySQLIcon from '../../icons/MySQL';
import MongoDBIcon from '../../icons/MongoDB';

interface BrandListCardProps {
  title: string;
  icons: FC<SvgIconProps>[];
}

const BrandListCard: FC<BrandListCardProps> = ({ title, icons }) => (
  <Card
    borderRadius={6.5}
    sx={{
      width: '100%',
      py: 6,
      filter: 'grayscale(1)',
      transition: 'filter 0.25s ease-in-out',
      '&:hover': {
        filter: 'grayscale(0)',
      },
      '& .contentWrapper': { width: '100%' },
    }}
  >
    <Typography align="center" variant="h5" sx={{ fontWeight: 800, mb: 7 }}>
      {title}
    </Typography>
    <Stack
      direction="row"
      justifyContent="space-evenly"
      sx={(theme) => ({
        fontSize: theme.typography.pxToRem(56),
      })}
    >
      {icons.map((IconComponent, index) => (
        <IconComponent key={index} fontSize="inherit" />
      ))}
    </Stack>
  </Card>
);

export interface ServiceSectionProps {
  active?: boolean;
  onEnter?: (value: string) => void;
}

const OurWeaponsSection: FC<ServiceSectionProps> = ({ active, onEnter }) => {
  const isDesktop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  return (
    <Section
      id="ourWeapons"
      prefix="Alors"
      title="Nos armes"
      active={active}
      onEnter={() => onEnter?.('ourWeapons')}
    >
      <Typography sx={{ mb: 10 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas lacinia
        ullamcorper neque sit pretium amet tortor sit. Duis nibh mauris ac odio
        vel donec ipsum sed. Nascetur tristique odio aliquet et, amet mattis non
        molestie a.
      </Typography>

      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <BrandListCard
            title="Langages"
            icons={[HTML5Icon, CSS3Icon, JSIcon, DartIcon]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <BrandListCard
            title="Logiciels graphiques"
            icons={[FigmaIcon, AdobeXDIcon, BlenderIcon, AdobeIcon]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <BrandListCard
            title="Framework"
            icons={[ReactIcon, FlutterIcon, NodeJSExpressIcon, SymfonyIcon]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <BrandListCard
            title="Bases de données"
            icons={[MySQLIcon, MongoDBIcon]}
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default OurWeaponsSection;
