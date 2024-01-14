import { Box } from '@mui/material';
import { skillsList } from '../Mock/skillsList';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HeroText from '../components/Typography/HeroText';
import InfiniteLooper from '../components/InfiniteLoop/InfiniteLooper';
import Js from '../assets/skills-svgs/js.svg';
import Ts from '../assets/skills-svgs/ts.svg';
import Redux from '../assets/skills-svgs/redux.svg';
import Mui from '../assets/skills-svgs/mui.svg';
import Css from '../assets/skills-svgs/css.svg';
import Github from '../assets/skills-svgs/github.svg';
import Html from '../assets/skills-svgs/html.svg';
import Tailwind from '../assets/skills-svgs/tailwind.svg';
import SkillIconContainer from '../components/Skills/SkillIconContainer';
import SkillsList from '../components/Skills/SkillsList';
function Skills() {
	const theme = useTheme();
	const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				marginInline: 'auto',
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
					<SkillsList skills={skillsList} />
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
