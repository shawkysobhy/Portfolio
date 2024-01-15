import { Box, Typography } from '@mui/material';
function ContactContainer({ contactName, contactData, color }) {
	return (
		<Box
			sx={{
				display: 'flex',
				gap: '1rem',
			}}>
			<Typography sx={{ fontSize: '25px', color: color }}>
				{contactName}
			</Typography>
			<Typography sx={{ color: '#fff', fontSize: '25px' }}>
				{contactData}
			</Typography>
		</Box>
	);
}

export default ContactContainer;
