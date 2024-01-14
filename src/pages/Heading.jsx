import { Box } from '@mui/material';
import NavBar from '../components/NavBar/NavBar';
import Mouse from '../components/MouseAnimation';
import HeroText from '../components/Typography/HeroText';
function Heading() {
	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				marginInline: 'auto',
			}}>
			<Box
				sx={{
					width: '100vw',
					maxWidth: '100%',
				}}>
				<NavBar />
			</Box>
			<Box
				sx={{
					flex: '1',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-evenly',
					maxWidth: '1200px',
					marginInline: 'auto',
				}}>
				<HeroText>
					Nice to meet you! I&apos;m{' '}
					<span
						style={{
							textDecoration: 'underline 10px #087ea4',
						}}>
						Shawky Sobhy
					</span>
					.
				</HeroText>
				<Box sx={{ marginInline: 'auto', width: '30px' }}>
					<Mouse />
				</Box>
			</Box>
		</Box>
	);
}

export default Heading;
