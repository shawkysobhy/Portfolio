/* eslint-disable react/prop-types */
import { Box } from '@mui/material';

function Container({ children }) {
	return (
		<Box sx={{ paddingInline: '15px', marginInline: 'auto' }}>{children}</Box>
	);
}

export default Container;
