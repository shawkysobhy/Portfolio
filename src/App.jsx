import Heading from './pages/Heading';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Footer from './pages/Footer';
import Projects from './pages/Projects';
import Certificate from './pages/Certificate';
import { Box } from '@mui/material';
import ScrollPercentageCalculator from './components/ScrollPercentageCalc';
function App() {
	return (
		<>
			<ScrollPercentageCalculator>
				<Box>
					<Heading />
					<Profile />
					<Skills />
					<Projects />
					<Certificate />
					<Footer />
				</Box>
			</ScrollPercentageCalculator>
		</>
	);
}

export default App;
