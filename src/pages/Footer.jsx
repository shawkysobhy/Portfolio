import { Box, Typography, Link } from '@mui/material';
import CONTACT from '../data/contactData';
import HeroText from '../components/Typography/HeroText';
function Footer() {
	return (
		<Box
			sx={{
				backgroundColor: '#0d1118',
				marginInline: 'auto',
				width: '100vw',
				maxWidth: '100%',
				padding: '4rem 0',
				position: 'relative',
				paddingInline: '1rem',
			}}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					justifyContent: 'space-between',
					gap: '3rem',
					alignItems: 'center',
					maxWidth: '1200px',
					marginInline: 'auto',
				}}>
				<Box sx={{ maxWidth: '445px' }}>
					<HeroText customsx={{ textAlign: 'center' }}>Contact</HeroText>
					<Typography
						sx={{
							fontSize: '18px',
							color: 'white',
							textAlign: { xs: 'center', md: 'left' },
						}}>
						I would love to hear about your project and how I could help. Please
						fill free to use any method to reach me, and I’ll get back to you as soon as possible.
					</Typography>
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
					<Box
						sx={{
							display: 'flex',
							gap: '1rem',
							flexDirection: 'column',
							borderRadius: '10px',
							padding: '.5rem 1rem',
							color: '#fff',
							fontSize: { xs: '20px', sm: '25px' },
						}}>
						<Link href={`${CONTACT.ruesme}`} target='_blank'>
							<Typography sx={{ fontSize: 'inherit', letterSpacing: '3px' }}>
								Ruesme
							</Typography>
						</Link>
						<Link href={`mailto:${CONTACT.email}`} target='_blank'>
							<Typography sx={{ fontSize: 'inherit' }}>
								{CONTACT.email}
							</Typography>
						</Link>
						<Link href={CONTACT.whatsApp} target='_blank'>
							<Typography sx={{ fontSize: 'inherit', letterSpacing: '3px' }}>
								Whatsapp : {CONTACT.phone1}
							</Typography>
						</Link>
						<Link href={`${CONTACT.linkedIn}`} target='_blank'>
							<Typography sx={{ fontSize: '25px', color: '#fff' }}>
								Linkedin
							</Typography>
						</Link>
						<Link href={`tel:${CONTACT.phone1}`} target='_blank'>
							<Typography sx={{ fontSize: 'inherit', letterSpacing: '3px' }}>
								Phone : {CONTACT.phone1}
							</Typography>
						</Link>
						<Link href={`tel:${CONTACT.phone2}`} target='_blank'>
							<Typography sx={{ fontSize: 'inherit', letterSpacing: '3px' }}>
								Phone : {CONTACT.phone2}
							</Typography>
						</Link>
						<Link href='https://github.com/shawkysobhy/' target="_blank">
							<Typography sx={{ fontSize: '25px', color: '#fff' }}>
								Github
							</Typography>
						</Link>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Footer;
