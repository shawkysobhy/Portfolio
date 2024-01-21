import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { skillsList } from '../Mock/skillsList';
import SkillIconContainer from '../components/Skills/SkillIconContainer';
import SkillsList from '../components/Skills/SkillsList';
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
function Skills() {
	const theme = useTheme();
	const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<Box
			sx={{
				backgroundImage:
					'conic-gradient(from -90deg at 110% 100%,#2b303b 0deg,#16181d 90deg,#16181d 1turn)',
				paddingInline: { xs: '1.5rem', xmd: '4rem', lg: '8rem' },
				paddingBlock: { xs: '4rem', md: '8rem' },
			}}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					marginInline: 'auto',
					minHeight: { xs: '70vh', md: '100vh' },
					maxWidth: '1200px',
					gap: '3rem',
					alignItems: mdScreen ? 'center' : 'flex-start',
				}}>
				<HeroText>
					Skills
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
	);
}

export default Skills;
