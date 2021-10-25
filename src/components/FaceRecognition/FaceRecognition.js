import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
	return (
		<div className='flex items-center justify-center ma4'>
			<img className='w-20 h-auto' src={imageUrl} alt='' />
		</div>
	)
}

export default FaceRecognition;