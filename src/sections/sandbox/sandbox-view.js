'use client';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import MainLayout from 'src/layouts/main';
import { RouterLink } from 'src/routes/components';


// ----------------------------------------------------------------------

export default function SandboxView() {
  return (
    <MainLayout>
      <Container>
        {/* <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            This is sandbox
          </Typography>
        </m.div> */}

        <iframe
          title="reqq-sandbox"
          src="https://reqq-sandbox.streamlit.app/?embed=true"
          height="1000"
          style={{width: '100%', border: 0}}
        />

        <Button component={RouterLink} href="/" size="large" color="inherit" variant="contained">
          Go to Home
        </Button>
      </Container>
    </MainLayout>
  );
}
