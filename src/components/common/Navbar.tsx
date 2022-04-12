import { FC, useState } from 'react';
import { Twitter as TwitterIcon } from '@mui/icons-material';
import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  Link as MuiLink,
  Stack,
  SwipeableDrawer,
  Typography,
  useTheme,
} from '@mui/material';
import PicodIcon from '../icons/Picod';
import Link from 'next/link';
import MenuIcon from '../icons/Menu';
import CloseIcon from '../icons/Close';
import FacebookIcon from '../icons/Facebook';
import DribbbleIcon from '../icons/Dribbble';
import BehanceIcon from '../icons/Behance';

const Navbar: FC = () => {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar
      elevation={0}
      color="transparent"
      position="fixed"
      sx={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 5,
        px: 8,
        fontFamily: 'Roboto',
        transition: 'padding .25s ease-out',
        [theme.breakpoints.down('md')]: {
          py: 2,
          px: 3,
        },
      }}
    >
      <Link href="/" passHref>
        <MuiLink sx={{ display: 'flex' }}>
          <PicodIcon variant="icon" />
        </MuiLink>
      </Link>
      <Hidden mdUp implementation="css">
        <IconButton onClick={() => setOpenDrawer(true)} sx={{ p: 2, mr: -2 }}>
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Stack direction="row" alignItems="center" spacing={4}>
          <Link href="/about" passHref>
            <MuiLink underline="none" color="inherit">
              A propos
            </MuiLink>
          </Link>
          <Link href="/contact" passHref>
            <Button
              variant="contained"
              color="inherit"
              sx={{
                borderRadius: 100,
                textTransform: 'none',
                color: '#666666',
                px: 4,
                py: 1,
              }}
              component="a"
            >
              Contact
            </Button>
          </Link>
        </Stack>
      </Hidden>
      <Hidden mdUp>
        <SwipeableDrawer
          anchor="right"
          onOpen={() => setOpenDrawer(true)}
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          sx={{
            '& .MuiPaper-root': {
              background: 'linear-gradient(180deg, #151515 0%, #0C0C0C 100%)',
              width: 345,
              p: 4.25,
            },
          }}
        >
          <IconButton
            onClick={() => setOpenDrawer(false)}
            sx={(theme) => ({
              p: 2,
              position: 'absolute',
              right: theme.spacing(2),
              top: theme.spacing(2),
            })}
          >
            <CloseIcon
              sx={(theme) => ({ fontSize: theme.typography.pxToRem(18) })}
            />
          </IconButton>
          <Stack direction="column" spacing={4} sx={{ height: '100%', mt: 6 }}>
            {[
              { id: 'services', label: 'Services' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'whyUs', label: 'Pourquoi nous?' },
              { id: 'ourWeapons', label: 'Nos armes' },
              { id: 'ourTeams', label: 'Nos équipes' },
            ].map(({ id, label }) => (
              <Link key={id} href={`#${id}`} passHref>
                <MuiLink
                  underline="none"
                  sx={(theme) => ({
                    textAlign: 'right',
                    fontSize: theme.typography.pxToRem(24),
                    fontFamily: 'Public Sans',
                    fontWeight: 900,
                    color: 'rgba(102, 102, 102, 1)',
                    position: 'relative',
                    transition: 'color .25s ease-out',
                    '&.active': {
                      color: theme.palette.secondary.main,
                    },
                    '&.active::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      left: theme.spacing(2.625),
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 0,
                      height: 0,
                      borderLeftWidth: 14,
                      borderRightWidth: 14,
                      borderTopWidth: 8,
                      borderBottomWidth: 8,
                      borderStyle: 'solid',
                      borderColor: 'transparent',
                      borderLeftColor: theme.palette.secondary.main,
                    },
                  })}
                >
                  {label}
                </MuiLink>
              </Link>
            ))}
            <Stack
              direction="row"
              justifyContent="flex-end"
              spacing={2}
              sx={{ mt: 'auto !important' }}
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
                  target="_blank"
                  sx={(theme) => ({ fontSize: theme.typography.pxToRem(30) })}
                >
                  <Icon fontSize="inherit" />
                </IconButton>
              ))}
            </Stack>
            <Link href="/about" passHref>
              <Button
                variant="contained"
                color="secondary"
                sx={(theme) => ({
                  alignSelf: 'flex-end',
                  mt: `${theme.spacing(3.5)} !important`,
                  borderRadius: 100,
                  textTransform: 'none',
                  py: 1,
                  width: theme.spacing(20),
                  fontSize: theme.typography.pxToRem(16),
                  fontFamily: 'Roboto',
                })}
                component="a"
              >
                A propos
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button
                variant="contained"
                color="inherit"
                sx={(theme) => ({
                  alignSelf: 'flex-end',
                  mt: `${theme.spacing(3.5)} !important`,
                  borderRadius: 100,
                  textTransform: 'none',
                  color: '#666666',
                  py: 1,
                  width: theme.spacing(20),
                  fontSize: theme.typography.pxToRem(16),
                  fontFamily: 'Roboto',
                })}
                component="a"
              >
                Contact
              </Button>
            </Link>
            <Typography
              variant="body2"
              color="GrayText"
              sx={(theme) => ({
                alignSelf: 'flex-end',
                mt: `${theme.spacing(4.25)} !important`,
              })}
            >
              @PICOD_Creative_{new Date().getFullYear()}
            </Typography>
          </Stack>
        </SwipeableDrawer>
      </Hidden>
    </AppBar>
  );
};

export default Navbar;
