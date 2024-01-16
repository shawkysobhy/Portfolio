import { useTheme } from '@mui/material/styles';
import { Typography, Box, List, Link } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import styled from '@emotion/styled';
import NavBarItem from './NavBarItem';
const IconStyle = {
	width: '30px',
	height: '30px',
	display: 'block',
	cursor: 'pointer',
};
const StyledLink = styled(Link)`
	text-decoration: none;
	display: 'flex';
	gap:'5px';
	align-items:'center';
	color: inherit; 
	&:hover {
		color: #e36588;
	}
`;
function NavBar() {
	const theme = useTheme();

	return (
		<Box
			sx={{
				padding: '20px 15px',
				// maxWidth: '1200px',
				width: '80%',
				marginInline: 'auto',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				[theme.breakpoints.down('sm')]: {
					flexDirection: 'column',
					flexWrap: 'wrap',
					alignItems: 'center',
				},
			}}>
			<Typography
				sx={{
					fontSize: '32px',
					textAlign: 'center',
					fontWeight: '700',
					color: 'white',
				}}>
				ShawkySobhy
			</Typography>
			<List sx={{ display: 'flex' }}>
				<NavBarItem>
					<StyledLink href={'mailto:shawkysobhy98@gmail.com'}>
						<AlternateEmailIcon sx={IconStyle} />
					</StyledLink>
				</NavBarItem>
				<NavBarItem>
					<StyledLink href='tel:+021503014979' target='_blank'>
						<PhoneInTalkIcon sx={IconStyle} />
					</StyledLink>
				</NavBarItem>
				<NavBarItem>
					<StyledLink
						href='https://www.linkedin.com/in/shawky-sobhy/'
						target='_blank'>
						<LinkedInIcon sx={IconStyle} />
					</StyledLink>
				</NavBarItem>
				<NavBarItem>
					<StyledLink href='https://github.com/shawkysobhy' target='_blank'>
						<GitHubIcon sx={IconStyle} />
					</StyledLink>
				</NavBarItem>
				<NavBarItem>
					<StyledLink
					sx={{fontWeight:'500',fontSize:'20px'}}
						href='https://drive.google.com/drive/folders/1a2Atq24jMS1u7J9lkwBvZye90U9wpdL0'
						target='_blank'>
						Ruesme
					</StyledLink>
				</NavBarItem>
			</List>
		</Box>
	);
}
export default NavBar;
