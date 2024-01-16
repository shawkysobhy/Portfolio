import { useState, useEffect } from 'react';

const ScrollPercentageCalculator = ({ children }) => {
	const [scrollPercentage, setScrollPercentage] = useState(0);
	const handleScroll = () => {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		const totalHeight =
			document.documentElement.scrollHeight - window.innerHeight;
		const percentage = (scrollTop / totalHeight) * 100;
		setScrollPercentage(percentage);
	};
	const [lineStyle, setLineStyle] = useState({
		width: '100%',
		height: '20px',
		position: 'fixed',
		display: 'flex',
		alignItems: 'center',
		zIndex: '100',
		background: 'linear-gradient(137deg,#2d595f 0%,#944c61 100%)',
	});

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []); 
	useEffect(() => {
		const newSize = `${Math.min(100, Math.max(0, scrollPercentage))}%`;
		setLineStyle((prevStyles) => ({
			...prevStyles,
			width: newSize,
		}));
	}, [scrollPercentage]);

	return (
		<div>
			<div style={lineStyle}>
				<span style={{ color: '#fff', fontSize: '18px',fontWeight:'500',paddingInline:'5px' }}>
					{scrollPercentage.toFixed(2)}%
				</span>
			</div>
			{children}
		</div>
	);
};

export default ScrollPercentageCalculator;