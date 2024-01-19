import { ListItem ,Link} from '@mui/material';
import styled from '@emotion/styled';
const StyledLink = styled(Link)`
	text-decoration: none;
	display: 'flex';
	gap: '5px';
	align-items: 'center';
	color: inherit;
	&:hover {
		color: #924d61;
	}
`;

function NavBarItem({ children ,contactData}) {
	return (
		<ListItem
			sx={{
				color: 'white',
				padding:{xs:'8px',sm:'8px 12px'},
			}}>
			<StyledLink href={contactData} target='_blank'>
				{children}
			</StyledLink>
		</ListItem>
	);
}

export default NavBarItem;
