import { Typography } from "@mui/material"
function CustomTypography({children}) {
  return (
		<Typography
			sx={{
				'::selection': {
					color: '#087ea4',
					backgroundColor: '#f6f7f9',
				},
				paddingInline: '15px',
				width: '85%',
				lineHeight: '2',
				fontSize: '20px',
				fontWeight: '500',
				color: 'white',
			}}>{children}</Typography>
	);
}

export default CustomTypography
