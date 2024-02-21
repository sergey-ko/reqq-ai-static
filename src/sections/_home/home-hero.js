import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { alpha, styled, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import Image from 'src/components/image';
import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';
import { HEADER } from 'src/layouts/config-layout';
import { useResponsive } from 'src/hooks/use-responsive';




// ----------------------------------------------------------------------

const StyledInput = styled((props) => <TextField fullWidth {...props} />)(({ theme }) => ({
  [`& .${inputBaseClasses.input}`]: {
    color: theme.palette.common.white,
  },
  [`& .${inputLabelClasses.root}.${inputLabelClasses.shrink}`]: {
    color: theme.palette.grey[500],
    [`&.${inputLabelClasses.focused}`]: {
      color: theme.palette.grey[500],
    },
  },
}));

StyledInput.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      common: PropTypes.shape({
        white: PropTypes.string,
      }),
      grey: PropTypes.string,
    }),
  }),
};


// ...

export default function HomeHero() {
  const mdUp = useResponsive('up', 'md');

  const theme = useTheme();

   // ...

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_1.jpg',
        }),
        overflow: 'hidden',
        position: 'relative',
        height: { md: `calc(100vh - ${HEADER.H_DESKTOP}px)` },
      }}
    >
      <Container sx={{ height: 1 }}>
        <Grid container columnSpacing={3} alignItems="center" sx={{ height: 1 }}>
          <Grid xs={12} md={6} lg={5}>
            <Stack
              spacing={5}
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                py: 15,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h3">
                Elevating Requirements to Excellence <br />
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {` Precisely Assessed, Strategically Enhanced`}
                </Box>
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
              Discover our rapid API solution for advancing the quality of your requirements.
              Streamlined assessment and improvement at your fingertips.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  endIcon={<Iconify icon="carbon:launch" />}
                  target="_blank"
                  rel="noopener"
                  href={paths.sandbox}
                >
                  Explore Our Sandbox
                </Button>

                <Button
                  color="inherit"
                  size="large"
                  variant="contained"
                  endIcon={<Iconify icon="carbon:launch" />}
                  target="_blank"
                  rel="noopener"
                  href="https://apimreqq.developer.azure-api.net/"
                >
                  Check Out Dev Portal
                </Button>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="overline">
                Offering Flexible Solutions: Available for Both Public Cloud and On-Prem Deployments
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={7} textAlign="center">
              <Image
                visibleByDefault
                disabledEffect
                alt="requirements quality"
                src="/assets/illustrations/illustration_services.svg"
                alignItems="center"
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
