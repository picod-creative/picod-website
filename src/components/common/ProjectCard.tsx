import { FC } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Arrow from './Arrow';

export interface ProjectCardProps {
  title: string;
  shortDescription: string;
  image: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  shortDescription,
  image,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        boxShadow: 'none',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={shortDescription}
          sx={{
            aspectRatio: '16/9',
          }}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
            {title}
          </Typography>
          <Typography sx={{ fontWeight: 300, mb: 2 }}>
            {shortDescription}
          </Typography>
          <Stack direction="row" justifyContent="flex-end" alignItems="center">
            <Typography
              component="span"
              color="secondary"
              sx={(theme) => ({
                mr: 2,
                textTransform: 'none',
                fontSize: theme.typography.pxToRem(18),
              })}
            >
              Visiter
            </Typography>
            <Arrow
              direction="right"
              color={theme.palette.secondary.main}
              thickness={4}
              size={{ lg: 80, md: 60, xs: 40, sm: 50 }}
            />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
