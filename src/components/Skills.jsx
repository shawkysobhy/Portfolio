import { Box } from '@mui/material';
import Sea from '../assets/skills33.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HeroText from './Typography/HeroText';
import InfiniteLooper from './InfiniteLooper';
import SkillsTypography from './Typography/SkillsTypography';
import CustomDot from './CustomDot';
import Js from '../assets/skills-svgs/js.svg'
import Ts from '../assets/skills-svgs/Ts.svg'
import Redux from '../assets/skills-svgs/redux.svg'
import Mui from '../assets/skills-svgs/mui.svg'
import Css from '../assets/skills-svgs/css.svg'
import Github from '../assets/skills-svgs/github.svg'
import Html from '../assets/skills-svgs/html.svg'
import Tailwind from '../assets/skills-svgs/tailwind.svg'
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
				backgroundImage: `url(${Sea})`,
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
					scrollbarWidth: 'thin', // For Firefox
					scrollbarColor: 'transparent transparent', // For Firefox
					'&::-webkit-scrollbar': {
						width: '0.4em', // For WebKit browsers
					},
					'&::-webkit-scrollbar-thumb': {
						backgroundColor: 'transparent', // For WebKit browsers
					},
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
					<HeroText customsx={{paddingInline:'1rem'}}>Skils & Technologies</HeroText>
					<Box
						sx={{
							backgroundColor: '#00000057',
							paddingInline: '15px',
							display: 'flex',
							gap: '1rem',
							flexWrap: 'wrap',
							alignItems: 'center',
						}}>
						<SkillsTypography color={'yellow'}>JavaScript</SkillsTypography>
						<CustomDot />
						<SkillsTypography color={'#3178c6'}>TypeScript</SkillsTypography>
						<CustomDot />
						<SkillsTypography color={'#03a9e1'}>React Js</SkillsTypography>{' '}
						<CustomDot />
						<SkillsTypography color={'#b48bf6'}>Redux</SkillsTypography>{' '}
						<CustomDot />
						<SkillsTypography color={'#ef4444'}>React Query</SkillsTypography>
						<CustomDot />
						<SkillsTypography color={'#3399ff'}>Material UI</SkillsTypography>
						<CustomDot />
						<SkillsTypography color={'#0ea5e9'}>Tailwind</SkillsTypography>
						<CustomDot />
						<SkillsTypography color={'#bd0e0e'}>Git/Github</SkillsTypography>
						<CustomDot />
						<SkillsTypography color={'orange'}>Html</SkillsTypography>
						<CustomDot />
						<SkillsTypography color={'skyblue'}>Css</SkillsTypography>
						<SkillsTypography sxcustom={{ fontSize: '18px' }}>
							And learn more depneding on projects requirements
						</SkillsTypography>
					</Box>
					<Box sx={{ padding: '3rem 1rem', width: '100%' }}>
						<InfiniteLooper speed={13} direction='right'>
							<img src={Js} style={{ padding: '18px' }} />
							<img src={Ts} style={{ padding: '18px' }} />
							<img src={Redux} style={{ padding: '18px' }} />
							<img src={Mui} style={{ padding: '18px' }} />
							<img src={Css} style={{ padding: '18px' }} />
							<img src={Html} style={{ padding: '18px' }} />
							<img src={Github} style={{ padding: '18px' }} />
							<img src={Tailwind} style={{ padding: '18px' }} />
						</InfiniteLooper>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Skills;
