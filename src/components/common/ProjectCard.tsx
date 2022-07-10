import { FC } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export interface ProjectCardProps {
  title: string;
  shortDescription: string;
  image: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  shortDescription,
  image,
}) => (
  <Card
    sx={{
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      boxShadow: 'none',
    }}
  >
    <CardMedia
      component="img"
      image={image}
      alt={shortDescription}
      sx={{
        aspectRatio: '16/9',
      }}
    />
    <CardContent>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography>{shortDescription}</Typography>
    </CardContent>
  </Card>
);

export default ProjectCard;
