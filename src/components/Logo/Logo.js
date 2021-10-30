import React from 'react';
import Tilty from 'react-tilty';
import logo from '../../logo.png'

// {<a target="_blank" href="https://icons8.com/icon/2070/brain">Brain</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>}

const Logo = () => {
	return (
		<div className='flex justify-center'>
			<Tilty className='flex items-center justify-center mb3' options={{max: 25}} style={{ height: 150, width: 150, transformStyle: 'preserve-3d'}} glare={true} maxGlare={.5}>
				<div className='absolute bg-white o-10' style={{ height: 150, width: 150}}></div>
				<img src={logo} alt='logo' style={{ transform: 'translateZ(30px)' }}/>
  				{/*<div className='b white f1' style={{ transform: 'translateZ(30px)' }}>FR</div>*/}
			</Tilty>
		</div>
	)
}

export default Logo;