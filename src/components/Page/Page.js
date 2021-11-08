import React from 'react';
import SignIn from './../SignIn/SignIn';
import Register from './../Register/Register';
import Rank from './../Rank/Rank';
import ImageLinkForm from './../ImageLinkForm/ImageLinkForm';

const Page = ({ route, onRouteChange, onInputChange, onSubmit }) => {
	switch (route) {
		case 'signin':
			return (
				<SignIn onRouteChange={onRouteChange} style={{zIndex: '10'}}/>
			)
		case 'register':
			return (
				<Register onRouteChange={onRouteChange} style={{zIndex: '10'}}/>
			)
		case 'home':
			return (
				<div>
					<Rank />
					<ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} style={{zIndex: '10'}}/>
				</div>
			)
		default:
	}
}

export default Page;