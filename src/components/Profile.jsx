import { Box, Typography } from '@mui/material';
import Sea from '../assets/colors.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HeroText from './Typography/HeroText';

function Profile() {
	const theme = useTheme();
	const mdScreen = useMediaQuery(theme.breakpoints.down('md'));

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
						maxWidth: '1200px',
						marginInline: 'auto',
						display: 'flex',
						flexDirection: 'column',
						alignItems: mdScreen ? 'center' : 'flex-start',
					}}>
					<HeroText>Nice to meet you! I&apos;m Shawky Sobhy.</HeroText>
					<Typography
						sx={{
							'::selection': {
								color: '#087ea4',
								backgroundColor: '#f6f7f9',
							},
							paddingInline: '15px',
							width: '85%',
							[theme.breakpoints.down('sm')]: {
								width: '95%',
							},
							lineHeight: '2',
							fontSize: '20px',
							fontWeight: '500',
							color: 'white',
						}}>
						<span> &#8226; </span>
						<span
							style={{
								fontWeight: '700',
								':selection': {
									color: '#087ea4',
									backgroundColor: '#f6f7f9',
								},
							}}>
							Based in the Egypt
						</span>
						, I&apos;m a front-end developer passionate about building
						accessible web apps that users love. I&apos;m a Frontend Web
						Developer building the Front-end of Websites and Web Applications{' '}
						<span
							style={{
								fontWeight: '700',
								color: '#087ea4',
								backgroundColor: '#f6f7f9',
							}}>
							especially in React
						</span>{' '}
						that leads to the success of the overall product I&apos;m open to
						Job opportunities where I can contribute, learn and grow. If you
						have a good opportunity that matches my skills and experience then
						don&apos;t hesitate to contact me.
					</Typography>
					<Typography
						sx={{
							'::selection': {
								color: '#087ea4',
								backgroundColor: '#f6f7f9',
							},
							paddingInline: '15px',
							width: '85%',
							marginTop: '2rem',
							[theme.breakpoints.down('sm')]: {
								width: '95%',
							},
							lineHeight: '2',
							fontSize: '20px',
							fontWeight: '500',
							color: 'white',
						}}>
						<span> &#8226; </span>
						<span
							style={{
								paddingBottom: '10px',
								borderBottom: 'solid 5px #087ea4',
							}}>
							Education : Benha Faculty of Computers and Artificial Intelligence
						</span>
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default Profile;
