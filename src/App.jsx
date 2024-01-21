import Heading from './pages/Heading';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Footer from './pages/Footer';
import Projects from './pages/Projects';
// import HeadingBackground from './assets/profile.jpg';
import { Box } from '@mui/material';
import ScrollPercentageCalculator from './components/ScrollPercentageCalc';
function App() {
	return (
		<>
					<ScrollPercentageCalculator>
			<Box
				sx={{
					// backgroundImage:'conic-gradient(from -90deg at 110% 100%,#2b303b 0deg,#16181d 90deg,#16181d 1turn)',
					// backgroundSize: 'cover',
					// backgroundRepeat: 'no-repeat',
					// backgroundAttachment: 'fixed',
					// backgroundPosition: 'center',
				}}>
					<Heading />
					<Profile />
					<Skills />
					<Projects />
					<Footer/>
			</Box>
					</ScrollPercentageCalculator>
		</>
	);
}

export default App;
