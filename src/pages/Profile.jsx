import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HeroText from '../components/Typography/HeroText';
function Profile() {
	const theme = useTheme();
	return (
		<Box
			sx={{
				display: 'flex',
				padding: '2rem 30px',
				minHeight: '100vh',
				marginInline: 'auto',
				maxWidth: '1200px',
				flexDirection: 'column',
				alignItems:{sm:'center',xmd:'start'}
			}}>
			<HeroText>Profile :</HeroText>
			<Typography
				sx={{
					'::selection': {
						color: theme.palette.gray.main,
						backgroundColor: theme.palette.selection.main,
					},
					width: { xs: '95%', xmd: '85%' },
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
							color: theme.palette.gray.main,
							backgroundColor: theme.palette.selection.main,
						},
					}}>
					Based in the Egypt
				</span>
				, I&apos;m a front-end developer passionate about building accessible
				web apps that users love, Websites and Web Applications{' '}
				<span
					style={{
						fontWeight: '700',
						color: '#087ea4',
						backgroundColor: '#f6f7f9',
					}}>
					especially in React and it&apos;s ecosystem
				</span>
				that leads to the success of the overall product I&apos;m open to Job
				opportunities where I can contribute, learn and grow. If you have a good
				opportunity that matches my skills and experience then don&apos;t
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
						borderBottom: `solid 5px ${theme.palette.yellow.main}`,
					}}>
					Education : Benha Faculty of Computers and Artificial Intelligence
					(2019-2023)
				</span>
			</Typography>
		</Box>
	);
}

export default Profile;
