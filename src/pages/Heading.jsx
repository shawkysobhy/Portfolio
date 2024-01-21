import { Box } from '@mui/material';
import NavBar from '../components/NavBar/NavBar';
import Mouse from '../components/MouseAnimation';
import HeroText from '../components/Typography/HeroText';
import { useTheme } from '@emotion/react';
function Heading() {
	const theme = useTheme();
	return (
		<Box
			sx={{
				minHeight: '95vh',
				backgroundImage:
'conic-gradient(from -90deg at 110% 100%,#2b303b 0deg,#16181d 90deg,#16181d 1turn)',

				display: 'flex',
				flexDirection: 'column',
				marginInline: 'auto',
				width: '100vw',
				maxWidth: '100%',
			}}>
			<NavBar />
			<Box
				sx={{
					flex: '1',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-evenly',
					maxWidth: '1200px',
					marginInline: 'auto',
				}}>
				<HeroText customsx={{ paddingInline: '1rem' }}>
					Nice to meet you! I&apos;m{' '}
					<span
						style={{
							textDecoration: `underline 10px ${theme.palette.yellow.main} `,
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
