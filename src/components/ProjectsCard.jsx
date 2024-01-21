import { Box, Typography, Link } from '@mui/material';
import HeadingBackground from '../assets/profile.jpg';
function ProjectsCard({
	projectTitle,
	projectDesc,
	tools,
	projectLink,
	links,
	projectImage,
}) {
	
	return (
		<Box
			sx={{
				flex: '0 1 380px',
				alignSelf: 'normal',
				margin: '10px',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: 'rgb(21, 21, 21)',
				border: '1px solid #e5e5e5',
				borderRadius: '5px',
			}}>
			<Link href={projectLink} target='_blank' rel='noreferrer'>
				<Box
					component='img'
					sx={{
						padding: '0px',
						margin: '0',
						maxWidth: '100%',
						maxHeight: '215px',
						cursor: 'pointer',
						width: '100%',
					}}
					alt={`project cover of ${projectTitle}.`}
					src={projectImage ? projectImage : HeadingBackground}
				/>
			</Link>
			<Box sx={{ padding: '2rem' }}>
				<Link
					href={projectLink}
					target='_blank'
					sx={{
						fontSize: '2rem',
						fontWeight: '500',
						lineHeight: 'normal',
						textDecoration: 'none',
						cursor: 'pointer',
					}}>
					{projectTitle}
				</Link>
				<Box
					component='ul'
					sx={{
						paddingLeft: '0',
						listStyle: 'none',
						display: 'flex',
						width: '100%',
						flexWrap:'wrap',
						gap: '1rem',
					}}>
					{tools?.map((tool) => (
						<Box component='li' key={tool} sx={{ fontWeight: '500' }}>
							{tool}
						</Box>
					))}
				</Box>
				<Typography sx={{ fontWeight: '400', lineHeight: '2' }}>
					{projectDesc}
				</Typography>
				{links?.length && (
					<Box
						sx={{
							marginBlock: '20px',
							display: 'flex',
							gap: '1rem',
							fontWeight: '500',
						}}>
						{links.map((link) => {
							return (
								<Link href={`${link.url}`} key={link.url} target='_blank'>
									{link.title}
								</Link>
							);
						})}
					</Box>
				)}
			</Box>
		</Box>
	);
}

export default ProjectsCard;
