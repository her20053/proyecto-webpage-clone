import React from 'react'

import './footer.css'

import Flag from './assets/images/usa_flag.png'
import Arrow from './assets/images/arrow_down.svg'

import TwitterLogo from './assets/images/Twitter.svg'

import DiscordLogo from './assets/images/discord_logo.png'

const Footer = () => {
	return (
		<div className="footer__area">

			<div className="footer__area__info">

				<div className="columna footer__columna__titulo">

					<h1 className='titulo__imagine'>IMAGINE A PLACE</h1>
					<div className="seleccion__idioma__area">
						<img className="img_bandera" src={Flag} alt="bandera" />
						<p>English, USA</p>
						<img className="flecha_idioma" src={Arrow} alt="flecha" />
					</div>
					<div className="area__iconos">
						{/* <img src={TwitterLogo} alt="twitter" /> */}

					</div>


				</div>

				<div className="columna footer__columna__product">

					<p className="titulo__columna">Product</p>
					<a className="link__footer" href="">Download</a>
					<a className="link__footer" href="">Nitro</a>
					<a className="link__footer" href="">Status</a>


				</div>

				<div className="columna footer__columna__company">


					<p className="titulo__columna">Company</p>
					<a className="link__footer" href="">About</a>
					<a className="link__footer" href="">Jobs</a>
					<a className="link__footer" href="">Branding</a>
					<a className="link__footer" href="">Newsroom</a>


				</div>

				<div className="columna footer__columna__resources">


					<p className="titulo__columna">Resources</p>
					<a className="link__footer" href="">College</a>
					<a className="link__footer" href="">Support</a>
					<a className="link__footer" href="">Safety</a>
					<a className="link__footer" href="">Blog</a>
					<a className="link__footer" href="">Feedback</a>
					<a className="link__footer" href="">Developers</a>
					<a className="link__footer" href="">Streamkit</a>


				</div>

				<div className="columna footer__columna__policies">

					<p className="titulo__columna">Policies</p>
					<a className="link__footer" href="">Terms</a>
					<a className="link__footer" href="">Privacy</a>
					<a className="link__footer" href="">Cookie Settings</a>
					<a className="link__footer" href="">Guidelines</a>
					<a className="link__footer" href="">Acknowledgements</a>
					<a className="link__footer" href="">Licenses</a>
					<a className="link__footer" href="">Moderation</a>

				</div>

			</div>

			<div className="barra__division__footer"></div>

			<div className="area__logo__boton">
				<img src={DiscordLogo} alt="logo_discord" className="logo__discord__footer" />
				<button className="button-21">Open Discord</button>
			</div>

		</div>
	)
}

export default Footer