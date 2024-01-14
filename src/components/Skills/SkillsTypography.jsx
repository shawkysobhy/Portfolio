import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
function SkillsTypography({  children ,sxcustom }) {
		const theme = useTheme();

	return (
		<Typography
			sx={{
				color: 'white',
				fontSize: '30px',
				fontWeight: '500',
				[theme.breakpoints.down('sm')]: {
					fontSize: '25px',
				},
				textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
				...sxcustom,
			}}>
			{children}
		</Typography>
	);
}

export default SkillsTypography;
