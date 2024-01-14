import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
function HeroText({ children, customsx }) {
	const theme = useTheme();
	return (
		<Typography
			sx={{
				paddingInline: '15px',
				color: 'white',
				fontSize: '88px',
				textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // Adjust values for your desired shadow
				fontWeight: '700',
				width: '85%',
				...customsx,
				[theme.breakpoints.down('md')]: {
					fontSize: '60px',
				},
			}}>
			{children}
		</Typography>
	);
}

export default HeroText;
