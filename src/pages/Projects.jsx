import { Box, Button } from '@mui/material';
import HeroText from '../components/Typography/HeroText';
import { projectKeywords } from '../Mock/skillsList';
import { PROJECTS } from '../projects';
import ProjectsCard from '../components/ProjectsCard';
function Projects() {
	const filterKeyword = Object.values(projectKeywords);
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
					alignItems: 'center',
				}}>
				<HeroText customsx={{ fontSize: '65px', textAlign: 'center' }}>
					Projects
				</HeroText>
				<Box
					sx={{
						display: 'flex',
						gap: '1rem',
						flexWrap: 'wrap',
						marginTop: '1rem',
					}}>
					<Box
						sx={{
							cursor: 'not-allowed',
							border: '2px solid white',
							padding: '8px 16px',
							color: 'black',
							borderRadius: '5px',
							fontSize: '18px',
							whiteSpace: 'nowrap',
							textOverflow: 'ellipsis',
							fontWeight: '700',
							backgroundColor: 'white',
							userSelect: 'none',
						}}>
						Filter&#8605;
					</Box>
					{filterKeyword.map((keyword) => (
						<Box
							sx={{
								cursor: 'not-allowed',
								border: '2px solid white',
								padding: '8px 16px',
								color: 'white',
								userSelect: 'none',
								borderRadius: '5px',
								fontSize: '18px',
								whiteSpace: 'nowrap',
								textOverflow: 'ellipsis',
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
					{PROJECTS.map((project) => (
						<ProjectsCard
							key={project.projectTitle}
							projectLink={project.projectLink}
							projectImage={project.projectImage}
							projectTitle={project.projectTitle}
							projectDesc={project.projectDesc}
							tools={project.tools}
							links={project.links}
						/>
					))}
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
