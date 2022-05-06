import React from 'react'

import './cuartainterfaz.css'

import Imagen from './assets/imagen.svg'

const CuartaInterfaz = () => {
	return (
		<div className="area__cuarta__interfaz">
			<div className="area__cuarta__interfaz__container">

				<div className="area__cuarta__interfaz__texto">
					<h1 className="titulo__cuarta__interfaz">RELIABLE TECH FOR STAYING CLOSE</h1>
					<p className="parrafo__cuarta__interfaz">Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
				</div>

				<div className="area__cuarta__interfaz__imagen">
					<img src={Imagen} alt="imagen_cuarta_interfaz" className='cuarta__imagen' />
				</div>

			</div>
		</div>
	)
}

export default CuartaInterfaz