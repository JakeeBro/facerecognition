import React from 'react';
// import Tilty from 'react-tilty';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<nav className='ma1 flex justify-end'>
				{/*<Tilty className='link pointer flex items-center justify-center' options={{max: 25}} style={{ height: 50, width: 150, transformStyle: 'preserve-3d'}} glare={true} maxGlare={.5}>
					<div className='absolute bg-white o-10' style={{ height: 50, width: 150}}></div>
	  				<div className='b white f5' style={{ transform: 'translateZ(10px)' }}>Sign Out</div>
				</Tilty>*/}
				<div>
					<input onClick={() => onRouteChange('signin')} className="b ph3 pv2 input-reset ba br3 b--white bg-transparent hover-bg-white hover-black grow pointer f6 dib white" type="submit" value="Sign Out" />
				</div>
			</nav>
		)
	} else {
		return (
			<nav className='ma1 flex justify-end'>
				{/*<Tilty className='link pointer flex items-center justify-center' options={{max: 25}} style={{ height: 50, width: 150, transformStyle: 'preserve-3d'}} glare={true} maxGlare={.5}>
					<div className='absolute bg-white o-10' style={{ height: 50, width: 150}}></div>
	  				<div className='b white f5' style={{ transform: 'translateZ(10px)' }}>Sign Out</div>
				</Tilty>*/}
				<div>
					<input onClick={() => onRouteChange('signin')} className="b ph3 pv2 input-reset ba br3 b--white bg-transparent hover-bg-white hover-black grow pointer f6 dib white" type="submit" value="Sign In" />
				</div>
				<div>
					<input onClick={() => onRouteChange('register')} className="b ph3 pv2 input-reset ba br3 b--white bg-transparent hover-bg-white hover-black grow pointer f6 dib white" type="submit" value="Register" />
				</div>
			</nav>
		)
	}
}

export default Navigation;