import { FC } from 'react';
import {
  Box,
  Grid,
  Stack,
  SvgIconProps,
  Theme,
  Avatar,
  Tooltip,
  Typography,
  useMediaQuery,
  IconButton,
  ButtonGroup,
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
import { SocialMedia, TeamMemberProfile } from '../../../@types';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type TeamMemberProfileCardProps = TeamMemberProfile;

const teamMemberProfileList = [
  {
    name: 'john doe',
    role: 'web developer',
    image: '/img/profile/profile.png',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      github: 'https://www.github.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
  {
    name: 'john doe',
    role: 'web developer',
    image: '/img/profile/profile.png',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      github: 'https://www.github.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
  {
    name: 'john doe',
    role: 'web developer',
    image: '/img/profile/profile.png',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      github: 'https://www.github.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
  {
    name: 'john doe',
    role: 'web developer',
    image: '/img/profile/profile.png',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      github: 'https://www.github.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
  {
    name: 'john doe',
    role: 'web developer',
    image: '/img/profile/profile.png',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      github: 'https://www.github.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
  {
    name: 'john doe',
    role: 'web developer',
    image: '/img/profile/profile.png',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      github: 'https://www.github.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
  {
    name: 'john doe',
    role: 'web developer',
    image: '/img/profile/profile.png',
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      github: 'https://www.github.com/',
      linkedin: 'https://www.linkedin.com/',
    },
  },
];

const TeamMemberProfileCard: FC<TeamMemberProfileCardProps> = ({
  name,
  role,
  image,
  socialMedia,
}) => (
  <Stack spacing={2} alignItems="center">
    <Avatar alt={name} src={image} sx={{ width: 144, height: 144, mb: 3 }} />
    <Typography fontWeight={'bolder'} fontSize={18}>
      {name}
    </Typography>
    <Typography mt={0} fontWeight={'light'} fontSize={16} color="secondary">
      {role}
    </Typography>
    <ButtonGroup variant="contained" aria-label="outlined  button group">
      {Object.keys(socialMedia).map(function (key) {
        return (
          <IconButton
            aria-label="upload picture"
            component="a"
            href={socialMedia[key as keyof SocialMedia]}
            sx={{
              ':hover': {
                color: 'orange',
              },
            }}
          >
            {key === 'facebook' && <FacebookIcon />}
            {key === 'github' && <GitHubIcon />}
            {key === 'linkedin' && <LinkedInIcon />}
          </IconButton>
        );
      })}
    </ButtonGroup>
  </Stack>
);

export interface ServiceSectionProps {
  active?: boolean;
  onEnter?: (value: string) => void;
}

const OurTeamsSection: FC<ServiceSectionProps> = ({ active, onEnter }) => {
  const isDesktop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  return (
    <Section
      id="ourTeams"
      prefix="Nos"
      title="Equipes"
      active={active}
      onEnter={() => onEnter?.('ourTeams')}
    >
      <Grid
        container
        spacing={{ lg: 5, xs: 2 }}
        justifyContent="space-evenly"
        alignItems="center"
      >
        {teamMemberProfileList.map((teamMemberProfile, index) => (
          <Grid key={index} item xs={12} md={3} alignItems="center">
            <TeamMemberProfileCard {...teamMemberProfile} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default OurTeamsSection;
