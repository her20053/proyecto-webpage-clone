import React from 'react'

import './navbar.css'

const Navbar = () => {
	return (
		<div className="navbar__container">
			<div className="logo__paypal" />
			<a className="link__navbar" href="">Personal</a>
			<a className="link__navbar" href="">Business</a>
			<a className="link__navbar" href="">Developer</a>
			<a className="link__navbar" href="">Help</a>
			<div className="header__buttons">
				<a className='boton__navbar__login' href="">Log In</a>
				<a className='boton__navbar__signup' href="">Sign Up</a>
			</div>
		</div>
	)
}

export default Navbar