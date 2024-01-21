import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HeroText from '../components/Typography/HeroText';
function Profile() {
	const theme = useTheme();
	return (
		<Box
			sx={{
				backgroundImage:
					'conic-gradient(from 90deg at -10% 100%,#2b303b 0deg,#2b303b 90deg,#16181d 1turn)',
				paddingInline: { xs: '1.5rem',xmd:'4rem', lg: '8rem' },
				paddingBlock: { xs: '4rem', xmd: '8rem' },
				marginInline:'auto',
			}}>
			<Box
				sx={{
					display: 'flex',
					marginInline: 'auto',
					maxWidth: '1200px',
					flexDirection: 'column',
				}}>
				<HeroText>Profile</HeroText>
				<Typography
					sx={{
						'::selection': {
							color: theme.palette.gray.main,
							backgroundColor: theme.palette.selection.main,
						},
						lineHeight: '2',
						fontSize: { xs: '16px', sm: '20px' },
						fontWeight: '500',
						color: 'white',
					}}>
					<span> &#8226; </span>
					<span
						style={{
							fontWeight: '700',
							':selection': {
								color: theme.palette.gray.main,
								backgroundColor: theme.palette.selection.main,
							},
						}}>
						Based in the Egypt
					</span>
					, I&apos;m a front-end developer passionate about building accessible
					web apps that users love, Websites and Web Applications
					<span
						style={{
							fontWeight: '700',
							color: '#087ea4',
							backgroundColor: '#f6f7f9',
						}}>
						especially in React and it&apos;s ecosystem
					</span>
					that leads to the success of the overall product I&apos;m open to Job
					opportunities where I can contribute, learn and grow. If you have a
					good opportunity that matches my skills and experience then don&apos;t
					hesitate to contact me.
				</Typography>
				<Typography
					sx={{
						'::selection': {
							color: theme.palette.gray.main,
							backgroundColor: theme.palette.selection.main,
						},
						width: '85%',
						marginTop: '2rem',
						lineHeight: '2',
						fontSize: { xs: '16px', xmd: '20px' },
						fontWeight: '700',
						color: 'white',
					}}>
					<span> &#8226; </span>
						Education : Benha Faculty of Computers and Artificial Intelligence
						(2019-2023)
				</Typography>
			</Box>
		</Box>
	);
}

export default Profile;
