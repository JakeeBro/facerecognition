import React from 'react';

const Register = ({ onRouteChange }) => {
	return (
		<article className='br3 ba dark-gray b--white-90 mv4 w-100 w-50-m w-25-l mw5 center'>
			<main className="pa4 black-80">
					<div className="measure center">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						<legend className="f4 fw6 ph0 mh0 white">Register</legend>
						<div className="mt3">
		    				<label className="db fw6 lh-copy f6 white" htmlFor="name">Name</label>
		    				<input className="b pa2 b--white input-reset ba br3 bg-transparent hover-bg-white white hover-black w-100 grow" type="email" name="email-address"  id="email-address" />
		  				</div>
		  				<div className="mt3">
		    				<label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
		    				<input className="b pa2 b--white input-reset ba br3 bg-transparent hover-bg-white white hover-black w-100 grow" type="email" name="email-address"  id="email-address" />
		  				</div>
		  				<div className="mv3">
		    				<label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
		    				<input className="b pa2 b--white input-reset ba br3 bg-transparent hover-bg-white white hover-black w-100 grow" type="password" name="password"  id="password" />
		  				</div>
					</fieldset>
					<div className="">
		  				<input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba br3 b--white bg-transparent hover-bg-white hover-black grow pointer f6 dib white" type="submit" value="Register" />
					</div>
					<div className="lh-copy mt3">
		  				<button onClick={() => onRouteChange('signin')} className='b ph3 pv2 input-reset ba br3 b--white bg-transparent hover-bg-white hover-black grow pointer f6 dib white' type="button">Have an Account?</button>
					</div>
					</div>
			</main>
		</article>
	)
}

export default Register;