import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HeroText from '../components/Typography/HeroText';
import { projectKeywords } from '../Mock/skillsList';

import ProjectsCard from '../components/ProjectsCard';
function Projects() {
	const filterKeyword = Object.values(projectKeywords);
	const theme = useTheme();
	return (
		<Box
			sx={{
				minHeight: '100vh',
				paddingTop: '1rem',
				maxWidth: '1500px',
				width: '100%',
				marginInline: 'auto',
				paddingInline: '1rem',
			}}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					[theme.breakpoints.down('md')]: {
						alignItems: 'center',
					},
				}}>
				<HeroText customsx={{ fontSize: '65px' }}>Projects</HeroText>
				<Box
					sx={{
						display: 'flex',
						gap: '1rem',
						flexWrap: 'wrap',
						marginTop: '1rem',
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
									color: 'black',
								},
							}}
							key={keyword}>
							{keyword}
						</Box>
					))}
				</Box>
				<Box
					sx={{
						marginTop: '2rem',
						width: '100%',
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
					}}>
					<ProjectsCard
						projectTitle={'hello world'}
						projectDesc={
							'This app will test your skills (as well as your knowledge!) as you build out a fully functional quiz. We provide a local JSON file to help you practice working with JSON! This app will test your skills'
						}
						tools={[projectKeywords.htmlCss, projectKeywords.react]}
						links={[
							{
								title: 'Github',
								url: 'https://github.com/shawkysobhy?tab=repositories',
							},
							{
								title: 'Demo',
								url: 'https://github.com/shawkysobhy',
							},
						]}
					/>
					<ProjectsCard
						projectTitle={'hello world'}
						projectDesc={
							'This app will test your skills (as well as your knowledge!) as you build out a fully functional quiz. We provide a local JSON file to help you practice working with JSON! This app will test your skills'
						}
						tools={[projectKeywords.htmlCss, projectKeywords.react]}
					/>
					<ProjectsCard
						projectTitle={'hello world'}
						projectDesc={
							'This app will test your skills (as well as your knowledge!) as you build out a fully functional quiz. We provide a local JSON file to help you practice working with JSON! This app will test your skills'
						}
						tools={[projectKeywords.htmlCss, projectKeywords.react]}
					/>
					<ProjectsCard
						projectTitle={'hello world'}
						projectDesc={
							'This app will test your skills (as well as your knowledge!) as you build out a fully functional quiz.'
						}
						tools={[projectKeywords.htmlCss, projectKeywords.react]}
					/>
					<ProjectsCard
						projectTitle={'hello world'}
						projectDesc={
							'This app will test your skills (as well as your knowledge!) as you build out a fully functional quiz. We provide a local JSON file to help you practice working with JSON! This app will test your skills'
						}
						tools={[projectKeywords.htmlCss, projectKeywords.react]}
					/>
					<ProjectsCard
						projectTitle={'hello world'}
						projectDesc={
							'This app will test your skills (as well as your knowledge!) as you build out a fully functional quiz. We provide a local JSON file to help you practice working with JSON! This app will test your skills'
						}
						tools={[projectKeywords.htmlCss, projectKeywords.react]}
					/>
					<ProjectsCard
						projectLink={
							'https://testbook.com/web-development/how-to-make-an-image-clickable-in-html'
						}
						projectTitle={'hello world'}
						projectDesc={
							'This app will test your skills (as well as your knowledge!) as you build out a fully functional quiz. We provide a local JSON file to help you practice working with JSON! This app will test your skills'
						}
						tools={[projectKeywords.htmlCss, projectKeywords.react]}
					/>
					<ProjectsCard
						projectTitle={'hello world'}
						projectDesc={
							'This app will test your skills (as well as your knowledge!) as you build out a fully functional quiz.'
						}
						tools={[projectKeywords.htmlCss, projectKeywords.react]}
					/>
				</Box>
				<Button
					sx={{
						border: '2px solid white',
						padding: '8px 32px',
						color: 'black',
						borderRadius: '5px',
						fontSize: '18px',
						whiteSpace: 'nowrap',
						textOverflow: 'ellipsis',
						cursor: 'pointer',
						fontWeight: '700',
						backgroundColor: 'white',
						userSelect: 'none',
						margin: '1rem auto',
						':hover': {
							backgroundColor: 'black',
							color: 'white',
						},
					}}>
					Show More ...
				</Button>
			</Box>
		</Box>
	);
}

export default Projects;
