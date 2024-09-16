import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { bgBlur } from 'src/theme/css';
import Logo from 'src/components/logo';
import { useOffSetTop } from 'src/hooks/use-off-set-top';

import { HEADER } from '../config-layout';

// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
  const theme = useTheme();

  const offset = useOffSetTop();

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{ height: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ lineHeight: 0, position: 'relative' }}>

            <Logo />

          </Box>

        </Container>
      </Toolbar>

    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
