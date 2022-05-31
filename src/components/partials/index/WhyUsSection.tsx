import { Grid, Typography, Theme, useMediaQuery } from '@mui/material';
import React, { FC } from 'react';
import { Service } from '../../../@types';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BuildIcon from '@mui/icons-material/Build';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import Section from './Section';
import Card from '../../common/Card';

export interface PortfolioSectionProps {
  active?: boolean;
  onEnter?: (value: string) => void;
}

const WhyUsSection: FC<PortfolioSectionProps> = ({ active, onEnter }) => {
  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  const services: Service[] = [
    {
      id: 'report',
      title: 'Un rapport qualité-prix optimal',
      description:
        'Chez PICOD Creative, nous pensons que la révolution numérique en cours doit pouvoir être accessible à tous sans concession sur la qualité.',
      icon: AttachMoneyIcon,
    },
    {
      id: 'collective',
      title: 'Un collectif d’experts dédiés à votre projet',
      description:
        'Chez PICOD Creative, chaque projet fait l’objet d’un suivi rigoureux avec intégration dans des outils de suivi (Trello et Slack).',
      icon: BuildIcon,
    },
    {
      id: 'guarantee',
      title: 'Des garanties élevées',
      description:
        'Chez PICOD Creative, chaque projet est garanti entre 30 et 60 jours même après la livraison du projet afin de répondre à toutes les éventuelles demandes.',
      icon: HourglassFullIcon,
    },
  ];

  return (
    <Section
      id="portfolio"
      prefix="Alors"
      title="Pourquoi nous ?"
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
        molestie a.
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
          <Grid key={id} item xs={12} sm={6} md={4} lg={4}>
            <Card
              borderRadius={2.5}
              sx={(theme) => ({
                minHeight: 330,
                minWidth: 330,
                textAlign: 'center',
                p: 4,
                '& .icon': {
                  color: theme.palette.secondary.main,
                  mb: 2,
                  backgroundColor: '#362C1C',
                  p: 0.5,
                  borderRadius: 1,
                  fontSize: 35,
                },
                '& h6': {
                  fontWeight: 800,
                  mb: 1.5,
                },
                [theme.breakpoints.down('md')]: {
                  p: 2,
                  minHeight: 'auto',
                  height: '100%',
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

export default WhyUsSection;
