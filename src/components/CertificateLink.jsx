import { Box, Typography, Link } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function CertificateLink({ certificateName, certificateLink }) {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
			<Typography
				sx={{
					lineHeight: '2',
					fontSize: '18px',
					fontWeight: '500',
					color: '#eaf4fe',
				}}>
				{certificateName}
			</Typography>
			<Link href={certificateLink} target='_blank'>
				<OpenInNewIcon />
			</Link>
		</Box>
	);
}

export default CertificateLink;
