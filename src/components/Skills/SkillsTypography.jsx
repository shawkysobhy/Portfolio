import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CustomDot from '../Typography/CustomDot';
function SkillsTypography({  children ,sxcustom }) {
		const theme = useTheme();

	return (
		<>
			<CustomDot />
			<Typography
				sx={{
					color: 'white',
					fontSize: '30px',
					fontWeight: '500',
					[theme.breakpoints.down('md')]: {
						fontSize: '20px',
					},
					textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
					...sxcustom,
				}}>
				{children}
			</Typography>
		</>
	);
}

export default SkillsTypography;
