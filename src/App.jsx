import Heading from './pages/Heading';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import HeadingBackground from './assets/profile.jpg';
import Projects from './pages/Projects';
import { Box } from '@mui/material';
import ScrollPercentageCalculator from './components/ScrollPercentageCalc';
function App() {
	return (
		<>
					<ScrollPercentageCalculator>
			<Box
				sx={{
					backgroundImage: `url(${HeadingBackground})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
					backgroundPosition: 'center',
				}}>
				<Box sx={{ backdropFilter: 'blur(8px) brightness(.9)' }}>
					<Heading />
					<Profile />
					<Skills />
					<Projects />
				</Box>
			</Box>
					</ScrollPercentageCalculator>
		</>
	);
}

export default App;
