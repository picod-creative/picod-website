import { FC } from 'react';
import {
  Grid,
  Stack,
  Theme,
  Avatar,
  Typography,
  useMediaQuery,
  IconButton,
  ButtonGroup,
} from '@mui/material';
import Section from './Section';
import { SocialMedia, TeamMemberProfile } from '../../../@types';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type TeamMemberProfileCardProps = TeamMemberProfile;

const teamMemberProfileList = [
  {
    id: '1',
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
    id: '2',
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
    id: '3',
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
    id: '4',
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
    id: '5',
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
    id: '6',
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
    id: '7',
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
  id,
  name,
  role,
  image,
  socialMedia,
}) => (
  <Stack alignItems="center">
    <Avatar alt={name} src={image} sx={{ width: 144, height: 144, mb: 3 }} />
    <Typography fontWeight={'bolder'} fontSize={18}>
      {name}
    </Typography>
    <Typography mt={0} fontWeight={'light'} fontSize={16} color="secondary">
      {role}
    </Typography>
    <ButtonGroup variant="contained">
      {Object.keys(socialMedia).map(function (key) {
        return (
          <IconButton
            key={key + id}
            component="a"
            href={socialMedia[key as keyof SocialMedia]}
            sx={{
              ':hover': {
                color: 'orange',
              },
            }}
          >
            {key === 'facebook' && <FacebookIcon key={key + id} />}
            {key === 'github' && <GitHubIcon key={key + id} />}
            {key === 'linkedin' && <LinkedInIcon key={key + id} />}
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
  return (
    <Section
      id="ourTeams"
      prefix="Nos"
      title="Equipes"
      active={active}
      onEnter={() => onEnter?.('ourTeams')}
    >
      <Grid container justifyContent="space-evenly" alignItems="center">
        {teamMemberProfileList.map((teamMemberProfile, index) => (
          <Grid key={index} mt={5} item xs={12} md={3} alignItems="center">
            <TeamMemberProfileCard {...teamMemberProfile} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default OurTeamsSection;
