import Heading from './pages/Heading'
import Profile from './pages/Profile'
import Skills from './pages/Skills'
import HeadingBackground from './assets/profile.jpg';
import { Box } from '@mui/material';
function App() {
	return (
		<>
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
				</Box>
			</Box>
		</>
	);
}

export default App;
