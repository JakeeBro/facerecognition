import React from 'react';
import Tilty from 'react-tilty';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
	return (
		<div className='dib w-80'>
			<div className='flex items-center justify-center flex-wrap'>
				{/*<div className='absolute bg-white pa3 o-10' style={{width: '50%', height: '100px'}}></div>*/}
				<p className='b f2 white bg-black ma2 pa3' style={{backgroundColor: 'rgba(255,255,255,0)'}}>
					{'This Magic Brain will detect faces in your images'}
				</p>
			</div>
			<div className='flex'>
				{/*<input className='b white f4 tc pa2 w-90 o-90 bw0' type='text' onChange={onInputChange} style={{backgroundColor: 'rgba(255,255,255,0.11)'}}/>*/}
				<input className='b pa2 b--white input-reset ba br3 bg-transparent hover-bg-white white hover-black w-100 grow' type='text' onChange={onInputChange}/>
				{/*<button className='b white f4 pa2 w-10 bw0 pa0 ma0' style={{backgroundColor: 'rgba(255,255,255,.1)'}} >DETECT</button>*/}
				{/*<Tilty className='link pointer flex items-center justify-center w-10' onClick={onSubmit} options={{max: 25}} style={{transformStyle: 'preserve-3d'}} glare={true} maxGlare={.5}>
					<button className='b pointer white f4 pa2 bw0' type='submit' onClick={onSubmit} style={{backgroundColor: 'rgba(0,0,0,0)', transform: 'translateZ(10px)'}}>Go</button>
				</Tilty>*/}
				<button className='b ph3 pv2 input-reset ba br3 b--white bg-transparent hover-bg-white hover-black grow pointer f6 dib white ml4' type='submit' onClick={onSubmit}>Go</button>
			</div>
		</div>
	)
}

export default ImageLinkForm;