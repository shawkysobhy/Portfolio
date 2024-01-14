import { Typography } from '@mui/material';

function SkillsTypography({ color, children ,sxcustom }) {
	return (
		<Typography
			sx={{
				color: color,
				fontSize: '30px',
				fontWeight: '500',
				textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
				...sxcustom,
			}}>
			{children}
		</Typography>
	);
}

export default SkillsTypography;
