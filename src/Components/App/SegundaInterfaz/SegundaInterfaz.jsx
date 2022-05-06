import React from 'react'

import './segundainterfaz.css'

import Imagen from './assets/imagen.svg'

const SegundaInterfaz = () => {
	return (
		<div className="area__segunda__interfaz">
			<div className="area__segunda__interfaz__container">

				<div className="area__segunda__interfaz__texto">
					<h1 className="titulo__segunda__interfaz">Where hanging out is easy</h1>
					<p className="parrafo__segunda__interfaz">Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
				</div>

				<div className="area__segunda__interfaz__imagen">
					<img src={Imagen} alt="imagen_segunda_interfaz" />
				</div>

			</div>
		</div>
	)
}

export default SegundaInterfaz