import { useRef } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import Image from 'src/components/image';
import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { HEADER } from 'src/layouts/config-layout';
import { useResponsive } from 'src/hooks/use-responsive';
import { useBoundingClientRect } from 'src/hooks/use-bounding-client-rect';

// ----------------------------------------------------------------------

export default function HomeHero() {
  const theme = useTheme();

  const containerRef = useRef(null);

  const mdUp = useResponsive('up', 'md');

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

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
              <Typography variant="h1">
                Requirements quality <br />
                Assessed. Improved. <br />
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {` ReQQ`}
                </Box>
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                Analyze single or set of requiremnts. With or without additional data sets.
              </Typography>

              <Button
                color="inherit"
                size="large"
                variant="contained"
                // endIcon={<Iconify icon="carbon:launch" />}
                target="_blank"
                rel="noopener"
                disabled
                // href={paths.figmaPreview}
              >
                coming soon ...
              </Button>

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
