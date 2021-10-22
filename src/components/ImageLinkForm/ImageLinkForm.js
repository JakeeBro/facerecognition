import React from 'react';
import Tilty from 'react-tilty';

const ImageLinkForm = () => {
	return (
		<div className='dib w-80'>
			<div className='flex items-center justify-center flex-wrap'>
				{/*<div className='absolute bg-white pa3 o-10' style={{width: '50%', height: '100px'}}></div>*/}
				<p className='b f2 white bg-black ma2 pa3' style={{backgroundColor: 'rgba(255,255,255,0)'}}>
					{'This Magic Brain will detect faces in your images'}
				</p>
			</div>
			<div className='flex'>
				<input className='b white f4 tc pa2 w-90 o-90 bw0' type='text' style={{backgroundColor: 'rgba(255,255,255,0.11)'}}/>
				{/*<button className='b white f4 pa2 w-10 bw0 pa0 ma0' style={{backgroundColor: 'rgba(255,255,255,.1)'}} >DETECT</button>*/}
				<Tilty className='link pointer flex items-center justify-center w-10' options={{max: 25}} style={{transformStyle: 'preserve-3d'}} glare={true} maxGlare={.5}>
					<button className='b pointer white f4 pa2 bw0' style={{backgroundColor: 'rgba(0,0,0,0)', transform: 'translateZ(10px)'}}>GO</button>
				</Tilty>
			</div>
		</div>
	)
}

export default ImageLinkForm;