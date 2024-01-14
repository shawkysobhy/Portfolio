/* eslint-disable no-unused-vars */
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { Typography, ListItem, Box, List, Link } from '@mui/material';
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
	color: inherit; /* Inherit the color from the parent */
	&:hover {
		color: #e36588;
	}
`;
function NavBar() {
	const theme = useTheme();
	const smScreen = useMediaQuery(theme.breakpoints.down('500px'));

	return (
		<Box
			sx={{
				padding: '20px 15px',
				maxWidth: '1200px',
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
				sx={{ fontSize: '32px', textAlign: 'center', fontWeight: '700' }}>
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
			</List>
		</Box>
	);
}
export default NavBar;
