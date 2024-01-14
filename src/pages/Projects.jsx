import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HeroText from '../components/Typography/HeroText';

function Projects() {
	const theme = useTheme();
	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				marginInline: 'auto',
				maxWidth: '1200px',
			}}>
			<Box
				sx={{
					overflow: 'auto',
					paddingBlock: '2rem',
					flex: '1',
					backdropFilter: 'blur(8px) brightness(.8)',
					scrollbarWidth: 'thin', // For Firefox
					scrollbarColor: 'transparent transparent', // For Firefox
					'&::-webkit-scrollbar': {
						width: '0.4em', // For WebKit browsers
					},
					'&::-webkit-scrollbar-thumb': {
						backgroundColor: 'transparent', // For WebKit browsers
					},
				}}>
				<Box
					sx={{
						marginInline: 'auto',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						[theme.breakpoints.down('md')]: {
							alignItems: 'center',
						},
					}}>
					<HeroText>Projects</HeroText>
          </Box>
			</Box>
		</Box>
	);
}

export default Projects;
