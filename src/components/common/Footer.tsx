import type { FC } from 'react';
import { Twitter as TwitterIcon } from '@mui/icons-material';
import {
  IconButton,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  Link as MuiLink,
} from '@mui/material';
import Link from 'next/link';
import PicodIcon from '../icons/Picod';
import FacebookIcon from '../icons/Facebook';
import DribbbleIcon from '../icons/Dribbble';
import BehanceIcon from '../icons/Behance';

const Footer: FC = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  return (
    <footer>
      <Stack
        direction="row"
        alignItems="center"
        spacing={isMobile ? 4 : 0}
        sx={(theme) => ({
          position: 'relative',
          px: 4,
          py: 3.5,
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: 3,
          borderTopStyle: 'solid',
          borderBottomStyle: 'solid',
          [theme.breakpoints.up('md')]: {
            px: 6,
          },
          [theme.breakpoints.up('lg')]: {
            px: 8,
          },
          [theme.breakpoints.up('xl')]: {
            px: 16,
          },
        })}
      >
        <Stack
          direction={isMobile ? 'column' : 'row'}
          justifyContent="space-between"
          spacing={isMobile ? 2 : 0}
          sx={{
            flex: !isMobile ? 1 : undefined,
          }}
        >
          <Link href="/">
            <a>
              <PicodIcon
                variant="logo-monochrome"
                sx={{ fontSize: isMobile ? 36 : 55 }}
              />
            </a>
          </Link>
          <Stack
            direction="row"
            alignItems="center"
            spacing={isMobile ? 1.5 : 5}
            sx={{
              marginLeft: isMobile ? '-8px !important' : undefined,
            }}
          >
            <IconButton
              component="a"
              href="https://twitter.com/Picod"
              color="secondary"
            >
              <TwitterIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              component="a"
              href="https://facebook.com"
              color="secondary"
            >
              <FacebookIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              component="a"
              href="https://danze.com"
              color="secondary"
            >
              <DribbbleIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              component="a"
              href="https://behance.net"
              color="secondary"
            >
              <BehanceIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={6}
          sx={(theme) => ({
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            [theme.breakpoints.down('md')]: {
              alignSelf: 'flex-start',
              position: 'relative',
              transform: 'none',
              left: 0,
              display: 'grid',
              gridAutoFlow: 'row',
              gridTemplateColumns: '1fr 1fr',
              alignItems: 'space-between',
              width: '100%',
              height: '100%',
              gridGap: theme.spacing(2),
              '& > *': {
                margin: '0 !important',
              },
            },
          })}
        >
          <MuiLink href="#services" color="text.primary" underline="hover">
            Services
          </MuiLink>
          <MuiLink href="#portfolio" color="text.primary" underline="hover">
            Portfolio
          </MuiLink>
          <MuiLink href="#whyUs" color="text.primary" underline="hover">
            Pourquoi nous?
          </MuiLink>
          <MuiLink href="#ourWeapons" color="text.primary" underline="hover">
            Nos armes
          </MuiLink>
          <MuiLink href="#testimonial" color="text.primary" underline="hover">
            Testimonial
          </MuiLink>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ py: 3.5 }}
      >
        <Typography variant="body2" color="GrayText">
          @PICOD_Creative_{new Date().getFullYear()}
        </Typography>
      </Stack>
    </footer>
  );
};

export default Footer;
