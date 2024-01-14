import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
function HeroText({ children, customsx }) {
	const theme = useTheme();
	return (
		<Typography
			sx={{
				'::selection': {
					color: theme.palette.gray.main,
					backgroundColor: theme.palette.selection.main,
				},
				color: 'white',
				fontSize: '88px',
				textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // Adjust values for your desired shadow
				fontWeight: '700',
				width: '85%',
				...customsx,
				[theme.breakpoints.down('md')]: {
					fontSize: '64px',
					width: '100%',
				},
				[theme.breakpoints.down('sm')]: {
					fontSize: '45px',
					textAlign: 'center',
				},
			}}>
			{children}
		</Typography>
	);
}

export default HeroText;
