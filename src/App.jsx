import Heading from './pages/Heading';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import HeadingBackground from './assets/profile.jpg';
import Projects from './pages/Projects';
import { Box } from '@mui/material';
import ScrollPercentageCalculator from './components/ScrollPercentageCalc';
function App() {
	// const [scrollPercentage, setScrollPercentage] = useState(0);

	// const handleScroll = () => {
	// 	const scrollTop = window.scrollY || document.documentElement.scrollTop;
	// 	const totalHeight =
	// 		document.documentElement.scrollHeight - window.innerHeight;
	// 	const percentage = (scrollTop / totalHeight) * 100;

	// 	setScrollPercentage(percentage);
	// };

	// useEffect(() => {
	// 	// Attach the scroll event listener when the component mounts
	// 	window.addEventListener('scroll', handleScroll);

	// 	// Remove the scroll event listener when the component unmounts
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []); // Empty dependency array ensures the effect runs only once when the component mounts

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
				<Box sx={{ backdropFilter: 'blur(8px) brightness(.8)' }}>

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
