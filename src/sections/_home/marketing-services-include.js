import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'INCOSE Compliance',
    description: 'Align with INCOSE standards for superior requirement quality assessment.',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Flexible Deployment Options',
    description: 'Choose between secure on-premises or convenient cloud deployments to fit your organizational needs.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Comprehensive Requirement Analysis',
    description: 'Analyze entire sets of requirements for thorough and consistent quality evaluation.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'AI-Powered Insights',
    description: 'Utilize AI to uncover deep insights and elevate the quality of your requirements.',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Scalability for Growth',
    description: 'Easily scale to accommodate growing project sizes and complexity without losing performance.',
    icon: '/assets/icons/ic_report.svg',
  },
  {
    title: 'Tailored Customization',
    description: 'Customize rules and pipelines for a solution that perfectly fits your enterprise\'s unique needs. ',
    icon: '/assets/icons/ic_file.svg',
  },
];

// ----------------------------------------------------------------------

export default function MarketingServicesInclude() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2">Key Features</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        Intelligent & Evolving API Solutions
      </Typography>

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {SERVICES.map((value) => (
          <div key={value.title}>
            <SvgColor
              src={value.icon}
              color="info"
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                bgcolor: 'primary.main',
              }}
            />

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
