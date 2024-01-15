import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HeroText from '../components/Typography/HeroText';

function Profile() {
	const theme = useTheme();
	return (
		<Box
			sx={{
				minHeight: '100vh',
				paddingBlock: '2rem',
				marginInline: 'auto',
				maxWidth: '1200px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				[theme.breakpoints.down('md')]: {
					alignItems: 'center',
				},
			}}>
			<HeroText customsx={{ paddingInline: '1rem' }}>
				Profile :
			</HeroText>
			<Typography
				sx={{
					'::selection': {
						color: theme.palette.gray.main,
						backgroundColor: theme.palette.selection.main,
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
