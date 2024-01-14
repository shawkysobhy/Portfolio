import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HeroText from '../components/Typography/HeroText';
import { projectKeywords } from '../Mock/skillsList';
function Projects() {
	const filterKeyword = Object.values(projectKeywords);
	const theme = useTheme();
	return (
		<Box
			sx={{
				minHeight: '100vh',
				paddingTop: '2rem',
				marginInline: 'auto',
				maxWidth: '1200px',
			}}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					paddingInline: '15px',

					[theme.breakpoints.down('md')]: {
						alignItems: 'center',
					},
				}}>
				<HeroText>Projects</HeroText>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '1rem',
						flexWrap: 'wrap',
						margin: '1rem auto',
					}}>
					<Box
						sx={{
							border: '2px solid white',
							padding: '8px 16px',
							color: 'black',
							borderRadius: '5px',
							fontSize: '18px',
							whiteSpace: 'nowrap',
							textOverflow: 'ellipsis',
							cursor: 'pointer',
							fontWeight: '700',
							backgroundColor: 'white',
							userSelect: 'none',
						}}>
						Filter&#8605;
					</Box>
					{filterKeyword.map((keyword) => (
						<Box
							sx={{
								border: '2px solid white',
								padding: '8px 16px',
								color: 'white',
								userSelect: 'none',
								borderRadius: '5px',
								fontSize: '18px',
								whiteSpace: 'nowrap',
								textOverflow: 'ellipsis',
								cursor: 'pointer',
								fontWeight: '500',
								':hover': {
									backgroundColor: 'white',
                  color:'black',
								},
							}}
							key={keyword}>
							{keyword}
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
}

export default Projects;
