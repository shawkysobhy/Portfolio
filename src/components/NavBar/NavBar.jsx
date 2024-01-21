import CONTACT from '../../data/contactData';
import { Typography, Box, List } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import NavBarItem from './NavBarItem';
const IconStyle = {
	width: '30px',
	height: '30px',
	display: 'block',
	cursor: 'pointer',
};
function NavBar() {

	return (
		<Box
			sx={{
				padding: '20px 15px',
				marginInline: 'auto',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				width: { xs: '100%', md: '90%' },
				flexDirection: { xs: 'column', sm: 'row' },
				flexWrap: { xs: 'wrap', xmd: 'nowrap' },
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
				<NavBarItem contactData={'mailto:shawkysobhy98@gmail.com'}>
					<AlternateEmailIcon sx={IconStyle} />
				</NavBarItem>
				<NavBarItem contactData={`tel:${CONTACT.phone1}`}>
					<PhoneInTalkIcon sx={IconStyle} />
				</NavBarItem>
				<NavBarItem contactData={CONTACT.linkedIn}>
					<LinkedInIcon sx={IconStyle} />
				</NavBarItem>
				<NavBarItem contactData={CONTACT.github}>
					<GitHubIcon sx={IconStyle} />
				</NavBarItem>
				<NavBarItem
					contactData={
						'https://drive.google.com/drive/folders/1a2Atq24jMS1u7J9lkwBvZye90U9wpdL0'
					}>
					<Typography sx={{ fontWeight: '500', fontSize: '20px' }}>
						Ruesme
					</Typography>
				</NavBarItem>
			</List>
		</Box>
	);
}
export default NavBar;
