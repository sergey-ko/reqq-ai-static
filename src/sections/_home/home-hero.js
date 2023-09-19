import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
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
import SvgColor from 'src/components/svg-color';
import { HEADER } from 'src/layouts/config-layout';
import { useResponsive } from 'src/hooks/use-responsive';
import { useBoundingClientRect } from 'src/hooks/use-bounding-client-rect';


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
  const [setFileUrl] = useState(null);
  const requirementTextInputRef = useRef(null);
  const mdUp = useResponsive('up', 'md');

  const theme = useTheme();

  // ...

  const handleSendRequest = async () => {
    const response = await fetch('https://ca-reqq-app.redriver-7ccc9618.eastus.azurecontainerapps.io/Report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        requirementText: requirementTextInputRef.current.value,
      }),
    });

    if (response.ok) {
      requirementTextInputRef.current.value = "";
      const fileBlob = await response.blob();
      const fileUrl = URL.createObjectURL(fileBlob);
      window.open(fileUrl, '_blank');
      setFileUrl(fileUrl);
    } else {
      console.error('Failed to send request');
    }
  };

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
              <Typography variant="h2">
                Requirements quality. <br />
                Assessed. Improved. <br />
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {` ReQQ`}
                </Box>
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                Analyze single requiremnts and recieve Excel report.
              </Typography>

              <StyledInput
                name="requirement-text"
                label="Requirement text"
                multiline
                rows={4}
                sx={{ mb: 2.5 }}
                inputRef={requirementTextInputRef}
                placeholder="The aircraft shall be able to fly at a speed of at least 500 km/h."
              />

              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={handleSendRequest}
                disabled={requirementTextInputRef.current.value?.length < 10}
              >
                Send Request
              </Button>


              <Typography variant="caption" component="div" sx={{ color: 'text.secondary' }}>
                * The service is free for now. We reserve the right to change this at any time. <br />
                ** The service is provided as is. We do not guarantee any results.<br />
                *** Processing time depends on the number of requests in the queue and might take up to 1 minute.
              </Typography>
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
