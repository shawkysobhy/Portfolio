import { Box } from '@mui/material';
import SkillsTypography from './SkillsTypography';
import CustomDot from '../Typography/CustomDot';
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
				<>
					<SkillsTypography>{skill}</SkillsTypography>
					<CustomDot />
				</>
			))}
		</Box>
	);
}

export default SkillsList;
