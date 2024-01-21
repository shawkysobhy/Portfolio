import { Box, Typography, Link } from '@mui/material';
import CONTACT from '../data/contactData';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
const IconStyle = {
	width: '20px',
	height: '20px',
	display: 'block',
	cursor: 'pointer',
	color: '#f6f7f9',
};
const currentYear=new Date();
function Footer() {
	return (
		<Box
			sx={{
				backgroundImage:
					'conic-gradient(from -90deg at 110% 100%,#2b303b 0deg,#16181d 90deg,#16181d 1turn)',
				marginInline: 'auto',
			}}>
			<Box
				sx={{
					padding: '4rem 15px',
					marginInline: 'auto',
					display: 'flex',
					justifyContent: {xs:'center',xmd:'space-between'},
					gap: '2rem',
					flexWrap:'wrap',
					maxWidth: '1200px',
					
				}}>
				<Typography>
					&#169; 2023 - {currentYear.getFullYear()} Shawky Sobhy
				</Typography>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '1rem',
						flexWrap: 'wrap',
						order:{xs:'-1',xmd:'1'}
					}}>
					{' '}
					<Link href={`${CONTACT.ruesme}`} target='_blank'>
						<Typography>Ruesme</Typography>
					</Link>
					<Link href={`mailto:${CONTACT.email}`} target='_blank'>
						<MailIcon sx={IconStyle} />
					</Link>
					<Link
						href={CONTACT.whatsApp}
						target='_blank'
						sx={{ display: 'flex', alignItems: 'center' }}>
						<WhatsAppIcon sx={IconStyle} />
					</Link>
					<Link href={`${CONTACT.linkedIn}`} target='_blank'>
						<LinkedInIcon sx={IconStyle} />
					</Link>
					<Link href='https://github.com/shawkysobhy/' target='_blank'>
						<GitHubIcon sx={IconStyle} />
					</Link>
				</Box>
			</Box>
		</Box>
	);
}

export default Footer;
