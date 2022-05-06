import React from 'react'

import './navbar.css'

import Logo from './assets/logo.svg'

const Navbar = () => {
	return (
		<div className="navbar__container">
			<div className="navbar__logo">
				<img className="navbar__logo__svg" src={Logo} alt="logo" />
			</div>
			<div className="navbar__info">
				<a className="navbar__info__item" href="">Download</a>
				<a className="navbar__info__item" href="">Nitro</a>
				<a className="navbar__info__item" href="">Safety</a>
				<a className="navbar__info__item" href="">Support</a>
				<a className="navbar__info__item" href="">Blog</a>
				<a className="navbar__info__item" href="">Careers</a>
			</div>
			<div className="navbar__boton">
				<button className="button-17">Open Discord</button>
			</div>

		</div>
	)
}

export default Navbar