import { Box } from '@mui/material';
import SkillsBackground from '../assets/skills.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HeroText from '../components/Typography/HeroText';
import InfiniteLooper from '../components/InfiniteLoop/InfiniteLooper';
import SkillsTypography from '../components/Skills/SkillsTypography';
import CustomDot from '../components/Typography/CustomDot';
import Js from '../assets/skills-svgs/js.svg';
import Ts from '../assets/skills-svgs/ts.svg';
import Redux from '../assets/skills-svgs/redux.svg';
import Mui from '../assets/skills-svgs/mui.svg';
import Css from '../assets/skills-svgs/css.svg';
import Github from '../assets/skills-svgs/github.svg';
import Html from '../assets/skills-svgs/html.svg';
import Tailwind from '../assets/skills-svgs/tailwind.svg';
import SkillIconContainer from '../components/Skills/SkillIconContainer';
function Skills() {
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
				backgroundImage: `url(${SkillsBackground})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
				backgroundPosition: 'center',
			}}>
			<Box
				sx={{
					overflow: 'auto',
					flex: '1',
					backdropFilter: 'blur(3px) brightness(.8) ',
				}}>
				<Box
					sx={{
						maxWidth: '1200px',
						marginInline: 'auto',
						display: 'flex',
						flexDirection: 'column',
						gap: '3rem',
						alignItems: mdScreen ? 'center' : 'flex-start',
					}}>
					<HeroText customsx={{ paddingInline: '1rem' }}>
						Skils & Technologies
					</HeroText>
					<Box
						sx={{
							backgroundColor: '#00000057',
							paddingInline: '15px',
							display: 'flex',
							gap: '1rem',
							flexWrap: 'wrap',
							alignItems: 'center',
						}}>
						<SkillsTypography>JavaScript</SkillsTypography>
						<CustomDot />
						<SkillsTypography>TypeScript</SkillsTypography>
						<CustomDot />
						<SkillsTypography>React Js</SkillsTypography> <CustomDot />
						<SkillsTypography>Redux</SkillsTypography> <CustomDot />
						<SkillsTypography>React Query</SkillsTypography>
						<CustomDot />
						<SkillsTypography>Material UI</SkillsTypography>
						<CustomDot />
						<SkillsTypography>Tailwind</SkillsTypography>
						<CustomDot />
						<SkillsTypography>Git/Github</SkillsTypography>
						<CustomDot />
						<SkillsTypography>Html</SkillsTypography>
						<CustomDot />
						<SkillsTypography>Css</SkillsTypography>
						<SkillsTypography sxcustom={{ fontSize: '18px', color: '#d9d9d9' }}>
							And learn more depneding on projects requirements
						</SkillsTypography>
					</Box>
					<Box sx={{ padding: '3rem 1rem', width: '100%' }}>
						<InfiniteLooper speed={13} direction='right'>
							<SkillIconContainer icon={Js} />
							<SkillIconContainer icon={Ts} />
							<SkillIconContainer icon={Redux} />
							<SkillIconContainer icon={Mui} />
							<SkillIconContainer icon={Css} />
							<SkillIconContainer icon={Html} />
							<SkillIconContainer icon={Github} />
							<SkillIconContainer icon={Tailwind} />
						</InfiniteLooper>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Skills;
