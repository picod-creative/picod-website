import { FC } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import MessageIcon from '../../icons/Message';

const LetsWorkTogetherSection: FC = () => (
  <Box
    sx={(theme) => ({
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#181818',
      pt: 8.25,
      mb: 12,
      [theme.breakpoints.down('lg')]: {
        pt: 6,
      },
    })}
  >
    <Box
      sx={(theme) => ({
        width: '66%',
        mx: 'auto',
        backgroundImage: 'url(/img/lets-work-together.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        py: 7.5,
        px: 9,
        borderRadius: 4,
        mb: -4,
        position: 'relative',
        zIndex: 1,
        [theme.breakpoints.down('md')]: {
          width: '85%',
          px: 4,
          py: 4,
        },
        [theme.breakpoints.down('sm')]: {
          width: '90%',
        },
        '&::before': {
          zIndex: -1,
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      })}
    >
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        spacing={{ xs: 3, lg: 6 }}
        alignItems="center"
      >
        <Stack direction="column" sx={{ flexGrow: 1 }}>
          <Typography
            sx={(theme) => ({
              fontSize: theme.typography.pxToRem(48),
              fontWeight: 800,
              lineHeight: 0.965,
              mb: 5,
              [theme.breakpoints.down('md')]: {
                fontSize: theme.typography.pxToRem(24),
                mb: 2,
                textAlign: 'center',
              },
            })}
          >
            Travaillons ensemble
            <br />
            sur votre prochain projet
          </Typography>
          <Typography
            sx={(theme) => ({
              [theme.breakpoints.down('md')]: {
                textAlign: 'center',
              },
            })}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            lacinia ullamcorper neque sit pretium amet tortor sit. Duis nibh
            mauris ac odio vel donec ipsum sed.
          </Typography>
        </Stack>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            flexShrink: 0,
            textTransform: 'none',
            py: 2,
            px: 3,
            borderRadius: 5,
          }}
        >
          <MessageIcon
            sx={(theme) => ({ fontSize: theme.typography.pxToRem(31) })}
          />
          <Typography
            align="left"
            sx={(theme) => ({
              ml: 2,
              lineHeight: 1,
              fontSize: theme.typography.pxToRem(18),
            })}
          >
            Envoyer
            <br />
            un message
          </Typography>
        </Button>
      </Stack>
    </Box>
  </Box>
);

export default LetsWorkTogetherSection;
