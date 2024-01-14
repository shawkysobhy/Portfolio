// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#2196f3', // Change to your preferred primary color
		},
		secondary: {
			main: '#ff4081', // Change to your preferred secondary color
		},
	},
	typography: {
		fontFamily: 'Space Grotesk , sans-serif',
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 500,
			xmd:600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
});

export default theme;
