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
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('lg')
  );

  const isLarge = useMediaQuery((theme: Theme) => theme.breakpoints.down('xl'));

  return (
    <footer>
      <Stack
        direction="row"
        alignItems="center"
        spacing={isMobile ? 4 : 0}
        sx={(theme) => ({
          position: 'relative',
          px: 1.5,
          py: 1.5,
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: 3,
          borderTopStyle: 'solid',
          borderBottomStyle: 'solid',
          [theme.breakpoints.up('sm')]: {
            px: 4,
            py: 3.5,
          },
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
                sx={{ fontSize: isSmall ? 28 : isMobile ? 40 : 55 }}
              />
            </a>
          </Link>
          <Stack
            direction="row"
            alignItems="center"
            spacing={isMobile ? 1 : isTablet ? 2 : isLarge ? 3 : 5}
            sx={(theme) => ({
              marginLeft: isMobile ? '-8px !important' : undefined,
              '& > *': {
                [theme.breakpoints.down('sm')]: {
                  p: 0.5,
                  fontSize: theme.typography.pxToRem(15),
                },
              },
            })}
          >
            {[
              { href: 'https://twitter.com/picod', icon: TwitterIcon },
              {
                href: 'https://www.facebook.com/picod/',
                icon: FacebookIcon,
              },
              { href: 'https://dribbble.com/picod', icon: DribbbleIcon },
              { href: 'https://www.behance.net/picod', icon: BehanceIcon },
            ].map(({ href, icon: Icon }) => (
              <IconButton
                key={href}
                component="a"
                href={href}
                color="secondary"
                target="_blank"
              >
                <Icon fontSize="inherit" />
              </IconButton>
            ))}
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={isMobile ? undefined : isTablet ? 2 : isLarge ? 3 : 6}
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
          {[
            { id: 'services', text: 'Services' },
            { id: 'portfolio', text: 'Portfolio' },
            { id: 'whyUs', text: 'Pourquoi nous?' },
            { id: 'ourWeapons', text: 'Nos armes' },
            { id: 'testimonial', text: 'Testimonial' },
          ].map(({ id, text }) => (
            <MuiLink
              key={id}
              href={`#${id}`}
              color="text.primary"
              underline="hover"
            >
              {text}
            </MuiLink>
          ))}
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
