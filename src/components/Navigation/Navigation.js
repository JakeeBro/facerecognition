import React from 'react';
// import Tilty from 'react-tilty';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn === true) {
		// console.log('SI True Path');
		return (
			<nav className='ma1 flex justify-end' style={{ height: '34px'}}>
				{/*<Tilty className='link pointer flex items-center justify-center' options={{max: 25}} style={{ height: 50, width: 150, transformStyle: 'preserve-3d'}} glare={true} maxGlare={.5}>
					<div className='absolute bg-white o-10' style={{ height: 50, width: 150}}></div>
	  				<div className='b white f5' style={{ transform: 'translateZ(10px)' }}>Sign Out</div>
				</Tilty>*/}
				<div>
					<input onClick={() => onRouteChange('signin')} className="b ph3 pv2 input-reset ba br3 b--white bg-transparent hover-bg-white hover-black grow pointer f6 dib white" type="button" value="Sign Out" />
				</div>
			</nav>
		)
	} else if (isSignedIn === false) {
		// console.log('SI False Path');
		return (
			<nav className='ma1 flex justify-end' style={{ height: '34px'}}>
				{/*<Tilty className='link pointer flex items-center justify-center' options={{max: 25}} style={{ height: 50, width: 150, transformStyle: 'preserve-3d'}} glare={true} maxGlare={.5}>
					<div className='absolute bg-white o-10' style={{ height: 50, width: 150}}></div>
	  				<div className='b white f5' style={{ transform: 'translateZ(10px)' }}>Sign Out</div>
				</Tilty>*/}
				{/*<div className=''>
					<input onClick={() => onRouteChange('signin')} className="b ph3 pv2 input-reset ba br3 b--white bg-transparent hover-bg-white hover-black grow pointer f6 dib white" type="button" value="Sign In" />
				</div>
				<div>
					<input onClick={() => onRouteChange('register')} className="b ph3 pv2 input-reset ba br3 b--white bg-transparent hover-bg-white hover-black grow pointer f6 dib white" type="button" value="Register" />
				</div>*/}
			</nav>
		)
	}
}

export default Navigation;