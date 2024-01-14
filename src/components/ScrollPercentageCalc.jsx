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
	const [circleStyles, setCircleStyles] = useState({
		width: '100%',
		height: '20px',
    position:'fixed',
    display:'flex',
    alignItems:'center',
    zIndex:'100',
		backgroundColor: 'whitesmoke',
    
	});

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []); 
	useEffect(() => {
		const newSize = `${Math.min(100, Math.max(0, scrollPercentage))}%`;
		setCircleStyles((prevStyles) => ({
			...prevStyles,
			width: newSize,
		}));
	}, [scrollPercentage]);

	return (
		<div>
			<div style={circleStyles}>
				<span style={{ color: 'black', fontSize: '18px',fontWeight:'500',paddingInline:'15px' }}>
					{Math.ceil(scrollPercentage.toFixed(2))}%
				</span>
			</div>
			{children}
		</div>
	);
};

export default ScrollPercentageCalculator;