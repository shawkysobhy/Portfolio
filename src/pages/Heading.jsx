import { Box } from '@mui/material';
import Sea from '../assets/img100.jpg';
import NavBar from '../components/NavBar/NavBar';
import Mouse from './Mouse';
import HeroText from '../components/Typography/HeroText';
function Heading() {
	return (
		<Box
			sx={{
				position: 'sticky',
				top: '0%',
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				marginInline: 'auto',
				backgroundImage: `url(${Sea})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
				backgroundPosition: 'center',
			}}>
			<Box
				sx={{
					width: '100vw',
					maxWidth: '100%',
					backgroundColor: 'rgba(21, 21, 21, 0.8)',
				}}>
				<NavBar />
			</Box>
			<Box
				sx={{
					flex: '1',
					backdropFilter: 'blur(1px)',
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
				{/* <Typography
						sx={{
							paddingInline: '15px',
							margin: '40px 0',
							width: '40%',
							lineHeight: '2',
							fontSize: '18px',
							color: 'rgb(217, 217, 217)',
						}}>
						Based in the UK, I&apos;m a front-end developer passionate about
						building accessible web apps that users love.
					</Typography> */}
				<Box sx={{ marginInline: 'auto', width: '30px' }}>
					<Mouse />
				</Box>
			</Box>
		</Box>
	);
}

export default Heading;
