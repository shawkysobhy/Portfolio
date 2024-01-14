// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#ffffff',
		},
		yellow: {
			main: '#00b6d3',
		},
		gray: {
			main: '#2a2e34',
		},
		selection: {
			main: '#f6f7f9',
		},
	},
	typography: {
		fontFamily: 'Space Grotesk , sans-serif',
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 500,
			xmd: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
});

export default theme;
