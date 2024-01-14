import { Box } from '@mui/material';
import SkillsTypography from './SkillsTypography';
function SkillsList({ skills }) {
	return (
		<Box
			sx={{
				paddingInline: '15px',
				display: 'flex',
				gap: '1rem',
				flexWrap: 'wrap',
				alignItems: 'center',
			}}>
			{skills.map((skill) => (
				<SkillsTypography key={skill}>{skill}</SkillsTypography>
			))}
		</Box>
	);
}

export default SkillsList;
