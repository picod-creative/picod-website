import { FC } from 'react';
import { Grid, Stack, SvgIconProps, Tooltip, Typography } from '@mui/material';
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
import { HomeSectionProps } from '../../../@types';

interface BrandListCardProps {
  title: string;
  icons: { icon: FC<SvgIconProps>; title?: string }[];
}

const BrandListCard: FC<BrandListCardProps> = ({ title, icons }) => (
  <Card
    borderRadius={6.5}
    sx={(theme) => ({
      width: '100%',
      py: 6,
      [theme.breakpoints.down('md')]: {
        py: 3,
      },
      '& .contentWrapper': {
        width: '100%',
        filter: 'grayscale(1)',
        transition: 'filter 0.25s ease-in-out',
      },
      '&:hover': {
        '& .contentWrapper': {
          filter: 'grayscale(0)',
        },
        '& .brand-list-title': {
          color: theme.palette.secondary.main,
        },
      },
    })}
  >
    <Typography
      align="center"
      variant="h5"
      className="brand-list-title"
      sx={(theme) => ({
        fontWeight: 800,
        mb: 7,
        transition: 'color 0.25s ease-in-out',
        [theme.breakpoints.down('md')]: {
          fontSize: theme.typography.pxToRem(18),
          mb: 2,
        },
      })}
    >
      {title}
    </Typography>
    <Stack
      direction="row"
      justifyContent="space-evenly"
      sx={(theme) => ({
        fontSize: theme.typography.pxToRem(56),
        [theme.breakpoints.down('md')]: {
          fontSize: theme.typography.pxToRem(30),
        },
      })}
    >
      {icons.map(({ icon: IconComponent, title }, index) =>
        !!title ? (
          <Tooltip key={index} title={title} arrow>
            <div style={{ display: 'flex' }}>
              <IconComponent fontSize="inherit" />
            </div>
          </Tooltip>
        ) : (
          <IconComponent key={index} fontSize="inherit" />
        )
      )}
    </Stack>
  </Card>
);

const OurWeaponsSection: FC<HomeSectionProps> = ({ active, onEnter }) => (
  <Section
    id="ourWeapons"
    prefix="Alors"
    title="Nos armes"
    active={active}
    onEnter={() => onEnter?.('ourWeapons')}
  >
    <Typography
      sx={(theme) => ({
        mb: 10,
        [theme.breakpoints.down('md')]: {
          mb: 4,
        },
      })}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas lacinia
      ullamcorper neque sit pretium amet tortor sit. Duis nibh mauris ac odio
      vel donec ipsum sed. Nascetur tristique odio aliquet et, amet mattis non
      molestie a.
    </Typography>

    <Grid container spacing={{ lg: 5, xs: 2 }}>
      <Grid item xs={12} md={6}>
        <BrandListCard
          title="Langages"
          icons={[
            { icon: HTML5Icon, title: 'HTML5' },
            { icon: CSS3Icon, title: 'CSS3' },
            { icon: JSIcon, title: 'JavaScript' },
            { icon: DartIcon, title: 'Dart' },
          ]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <BrandListCard
          title="Logiciels graphiques"
          icons={[
            { icon: FigmaIcon, title: 'Figma' },
            { icon: AdobeXDIcon, title: 'Adobe XD' },
            { icon: BlenderIcon, title: 'Blender' },
            { icon: AdobeIcon, title: 'Suite Adobe' },
          ]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <BrandListCard
          title="Framework"
          icons={[
            { icon: ReactIcon, title: 'ReactJS' },
            { icon: FlutterIcon, title: 'Flutter' },
            { icon: NodeJSExpressIcon, title: 'Node JS' },
            { icon: SymfonyIcon, title: 'Symfony' },
          ]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <BrandListCard
          title="Bases de données"
          icons={[
            { icon: MySQLIcon, title: 'MySQL' },
            { icon: MongoDBIcon, title: 'MongoDB' },
          ]}
        />
      </Grid>
    </Grid>
  </Section>
);

export default OurWeaponsSection;
