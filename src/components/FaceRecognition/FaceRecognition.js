import React from 'react';
import './FaceRecognition.css';

// div 1 = flex items-center justify-center ma4
// div 2 = 
// img   = w-20 h-auto

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className='flex justify-center ma'>
			<div className='absolute mt2'>
				<img id='inputImage' src={imageUrl} alt='' width='500px' height='auto'/>
				<div className='bounding-box' style={{ top: box.topRow, bottom: box.bottomRow, right: box.rightCol, left: box.leftCol}}></div>
			</div>
		</div>
	)
}

export default FaceRecognition;