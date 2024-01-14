import { Box, Typography ,Container } from '@mui/material';
import Sea from '../assets/sea20.jpg';
// import NavBar from './NavBar';
function Heading2() {
	return (
		<Box
			style={{
				height: '100vh',
				backgroundImage: `url(4)`, // Replace with your background image
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				position: 'relative',
				overflow: 'hidden',
			}}>
			<Container
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					textAlign: 'center',
					color: '#fff', // Text color
				}}>
				<Typography variant='h3'>Your Scrolling Text Goes Here</Typography>
				<Typography variant='body1'>Additional content...</Typography>
			</Container>
		</Box>
	);
}

export default Heading2;

/**	<Typography
					sx={{
						color: 'white',
						fontSize: '88px',
						textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // Adjust values for your desired shadow
						fontWeight: '700',
						width: '70%',
					}}>
					Nice to meet you! I&apos;m Adam Keyes.
				</Typography>
				<Typography
					sx={{
						margin: '40px 0',
						width: '40%',
						lineHeight: '1.7',
						fontSize: '18px',
						color: 'rgb(217, 217, 217)',
					}}>
					Based in the UK, I&apos;m a front-end developer passionate about
					building accessible web apps that users love.
				</Typography> */
