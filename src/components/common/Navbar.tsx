import { FC } from 'react';
import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  Link as MuiLink,
  Stack,
  useTheme,
} from '@mui/material';
import PicodIcon from '../icons/Picod';
import Link from 'next/link';
import MenuIcon from '../icons/Menu';

const Navbar: FC = () => {
  const theme = useTheme();

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
        py: 3.5,
        px: 4.5,
        fontFamily: 'Roboto',
        [theme.breakpoints.down('md')]: {
          py: 1,
          px: 0,
        },
      }}
    >
      <Link href="/" passHref>
        <MuiLink sx={{ display: 'flex' }}>
          <PicodIcon variant="icon" />
        </MuiLink>
      </Link>
      <Hidden mdUp implementation="css">
        <IconButton sx={{ mr: 2, p: 2 }}>
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Stack direction="row" alignItems="center" spacing={4} sx={{ pr: 4 }}>
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
              component={MuiLink}
            >
              Contact
            </Button>
          </Link>
        </Stack>
      </Hidden>
    </AppBar>
  );
};

export default Navbar;
