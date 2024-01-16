import { Box, Typography, Link } from '@mui/material';
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
						fill in the form, and I’ll get back to you as soon as possible.
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
						<Link
							href='https://drive.google.com/drive/folders/1a2Atq24jMS1u7J9lkwBvZye90U9wpdL0'
							target='_blank'>
							<Typography sx={{ fontSize: 'inherit', letterSpacing: '3px' }}>
								Ruesme
							</Typography>
						</Link>
						<Link href='mailto:shawkysobhy98@gmail.com' target='_blank'>
							<Typography sx={{ fontSize: 'inherit' }}>
								shawkysobhy98@gmail.com
							</Typography>
						</Link>
						<Link href='https://wa.me/201503014979' target='_blank'>
							<Typography sx={{ fontSize: 'inherit', letterSpacing: '3px' }}>
								Whatsapp : 01503014979
							</Typography>
						</Link>
						<Link
							href='https://www.linkedin.com/in/shawky-sobhy/'
							target='_blank'>
							<Typography sx={{ fontSize: '25px', color: '#fff' }}>
								Linkedin
							</Typography>
						</Link>
						<Link href='https://wa.me/201503014979' target='_blank'>
							<Typography sx={{ fontSize: 'inherit', letterSpacing: '3px' }}>
								Phone : 201503014979
							</Typography>
						</Link>
						<Link href='https://wa.me/201503014979' target='_blank'>
							<Typography sx={{ fontSize: 'inherit', letterSpacing: '3px' }}>
								Phone : 01156243776
							</Typography>
						</Link>

						<Link href='https://github.com/shawkysobhy/'>
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
