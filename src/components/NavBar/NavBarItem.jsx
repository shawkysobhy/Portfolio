import { ListItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function NavBarItem({ children }) {
	const theme = useTheme();
	return (
		<ListItem
			sx={{
				padding: '8px 16px',
				color: 'white',
				[theme.breakpoints.down('xmd')]: {
					padding: '8px',
				},
			}}>
			{children}
		</ListItem>
	);
}

export default NavBarItem;
