import { Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function HeroText({ children ,customsx }) {
	const theme = useTheme();
	const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<Typography
			sx={{
				paddingInline: '15px',
				color: 'white',
				fontSize: mdScreen ? '60px' : '88px',
				textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // Adjust values for your desired shadow
				fontWeight: '700',
				width: '85%',
				...customsx,
			}}>
			{children}
		</Typography>
	);
}

export default HeroText;
