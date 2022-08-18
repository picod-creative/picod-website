import type { FC } from 'react';
import { Grid, Theme, Typography, useMediaQuery } from '@mui/material';
import Section from './Section';
import { HomeSectionProps, Service } from '../../../@types';
import {
  Api as ApiIcon,
  BarChart as BarChartIcon,
  Devices as DevicesIcon,
  Language as LanguageIcon,
  Tv as TvIcon,
  Wysiwyg as WysiwygIcon,
} from '@mui/icons-material';
import UIDesignIcon from '../../icons/UIDesign';
import UXDesign from '../../icons/UXDesign';
import Card from '../../common/Card';

const services: Service[] = [
  {
    id: 'web',
    title: 'Web',
    description:
      'Envie de créer un site internet pour votre entreprise ? Comptez sur nos experts pour développer et mettre en ligne un site web à votre image.',
    icon: TvIcon,
  },
  {
    id: 'software',
    title: 'Apps/Logiciels',
    description:
      'Vous préférez créer une application ou une logiciel ? Notre équipe vous accompagnera pour répondre au mieux à vos besoins.',
    icon: DevicesIcon,
  },
  {
    id: 'apis',
    title: 'Création d’API',
    description:
      'Nous sommes disponibles pour vous aider à créer des API pour aider à synchroniser vos systèmes et échanges de données.',
    icon: ApiIcon,
  },
  {
    id: 'cms',
    title: 'CMS',
    description:
      'Notre équipe est également qualifiée pour créer votre site internet à partir de CMS, tels que Wordpress, Joomla, Shopify et Drupal.',
    icon: WysiwygIcon,
  },
  {
    id: 'ui',
    title: 'UI Design',
    description:
      'Pour participer à une bonne expérience utilisateur, nos experts veilleront à concevoir une interface utilisateur agréable engendrant une expérience positive chez vos internautes.',
    icon: UIDesignIcon,
  },
  {
    id: 'ux',
    title: 'UX Design',
    description:
      'Nos experts créent des sites internet permettant une bonne expérience à vos utilisateurs et internautes.',
    icon: UXDesign,
  },
  {
    id: 'seo',
    title: 'Référencement',
    description:
      'Une fois un site développé et publié, notre équipe optimisera son référencement (naturel ou payant) afin d’améliorer sa visibilité sur les moteurs de recherches.',
    icon: BarChartIcon,
  },
  {
    id: 'social-networks',
    title: 'Réseaux sociaux',
    description:
      'Nous établirons une stratégie de communication sur vos réseaux sociaux, pour toucher votre audience en fonction de vos objectifs !',
    icon: LanguageIcon,
  },
];

const ServiceSection: FC<HomeSectionProps> = ({ active, onEnter }) => {
  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  return (
    <Section
      id="services"
      prefix="Nos"
      title="Services"
      active={active}
      onEnter={() => onEnter?.('services')}
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
      <Grid
        sx={(theme) => ({
          mt: 9,
          [theme.breakpoints.down('md')]: {
            mt: 2,
          },
        })}
        container
        spacing={isXs ? 2 : isMobile ? 1 : 3.5}
      >
        {services.map(({ id, title, description, icon: Icon }) => (
          <Grid key={id} item xs={6} md={4} lg={3}>
            <Card
              borderRadius={2.5}
              sx={(theme) => ({
                p: 4,
                height: '100%',
                '& .icon': {
                  color: theme.palette.secondary.main,
                  mb: 2,
                },
                '& h6': {
                  fontWeight: 800,
                  mb: 1.5,
                },
                [theme.breakpoints.down('md')]: {
                  p: 2,
                  minHeight: 'auto',
                },
              })}
            >
              <Icon className="icon" />
              <br />
              <Typography variant="h6">{title}</Typography>
              <Typography variant="body2">{description}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default ServiceSection;
