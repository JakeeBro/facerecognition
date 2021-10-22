import React from 'react';
import Tilty from 'react-tilty';
import Logo from '../Logo/Logo';

const Navigation = () => {
	return (
		<nav className='ma1 flex justify-between'>
			<Logo />
			<Tilty className='link pointer flex items-center justify-center' options={{max: 25}} style={{ height: 50, width: 150, transformStyle: 'preserve-3d'}} glare={true} maxGlare={.5}>
				<div className='absolute bg-white o-10' style={{ height: 50, width: 150}}></div>
  				<div className='b white f5' style={{ transform: 'translateZ(10px)' }}>SIGN OUT</div>
			</Tilty>
		</nav>
	)
}

export default Navigation;