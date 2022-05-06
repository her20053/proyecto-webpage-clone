import React from 'react'

import './tercerainterfaz.css'

import Imagen from './assets/imagen.svg'

const TerceraInterfaz = () => {
	return (
		<div className="area__tercera__interfaz">
			<div className="area__tercera__interfaz__container">

				<div className="area__tercera__interfaz__imagen">
					<img src={Imagen} alt="imagen_tercera_interfaz" />
				</div>

				<div className="area__tercera__interfaz__texto">
					<h1 className="titulo__tercera__interfaz">From few to a fandom</h1>
					<p className="parrafo__tercera__interfaz">Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
				</div>

			</div>
		</div>
	)
}

export default TerceraInterfaz