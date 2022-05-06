import React from 'react'

import './primerainterfaz.css'

import Imagen from './assets/imagen.svg'

const PrimeraInterfaz = () => {
	return (
		<div className="area__primera__interfaz">

			<div className="area__primera__interfaz__container">
				<div className="area__primera__interfaz__imagen">
					<img src={Imagen} alt="imagen_primera_interfaz" />
				</div>
				<div className="area__primera__interfaz__texto">
					<h1 className="titulo__primera__interfaz">Create an invite-only place where you belong</h1>
					<p className="parrafo__primera__interfaz">Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
				</div>
			</div>

		</div>
	)
}

export default PrimeraInterfaz