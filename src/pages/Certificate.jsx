import { Box, List, ListItem } from '@mui/material';
import HeroText from '../components/Typography/HeroText';
import CertificateLink from '../components/CertificateLink';
const Certificates = [
	{
		certificateName: 'Udacity Nanodegree Program',
		certificateLink: 'https://graduation.udacity.com/confirm/AE5XHKMK',
	},
	{
		certificateName: 'JavaScript Algorithms and Data Structures Masterclass',
		certificateLink:
			'https://www.udemy.com/certificate/UC-c8dd84cb-d8a8-43dc-b68c-b8f23de26732/',
	},
	{
		certificateName:
			'React - The Complete Guide 2022 (incl. React Router & Redux)',
		certificateLink:
			'https://www.udemy.com/certificate/UC-eb886f31-ac51-4114-bcfd-0faa45c20d49/',
	},
	{
		certificateName:
			'The Complete JavaScript Course 2022: From Zero to Expert!',
		certificateLink:
			'https://www.udemy.com/certificate/UC-d4e21042-9db4-491e-b509-9719c6b83340/',
	},
	{
		certificateName: 'Responsive Web Design',
		certificateLink:
			'https://freecodecamp.org/certification/shawky88/responsive-web-design',
	},
	{
		certificateName: 'Build Responsive Real-World Websites with HTML and CSS',
		certificateLink:
			'https://www.udemy.com/certificate/UC-72f8d0b8-d123-4ece-a62e-e8fec87c2e8b/',
	},
];
function Certificate() {
	return (
		<Box
			sx={{
				backgroundImage:
					'conic-gradient(from 90deg at -10% 100%,#2b303b 0deg,#2b303b 90deg,#16181d 1turn)',
				paddingInline: '15px',
				paddingBlock: '8rem',
			}}>
			<Box
				sx={{
					display: 'flex',
					marginInline: 'auto',
					maxWidth: '1200px',
					flexDirection: 'column',
					alignItems: { sm: 'center', xmd: 'start' },
				}}>
				<HeroText>Certificate</HeroText>
				<List>
					{Certificates.map(({ certificateName, certificateLink }) => {
						return (
							<ListItem key={certificateName}>
								<CertificateLink
									certificateName={certificateName}
									certificateLink={certificateLink}
								/>
							</ListItem>
						);
					})}
				</List>
			</Box>
		</Box>
	);
}

export default Certificate;
