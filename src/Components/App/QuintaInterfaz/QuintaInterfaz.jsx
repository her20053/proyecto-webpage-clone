import React from 'react'

import './quintainterfaz.css'

import Imagen from './assets/imagen.svg'
import Download from './assets/download.svg'

const QuintaInterfaz = () => {
	return (
		<div className="area__quinta__interfaz">
			<div className="area__quinta__interfaz__container">

				<div className="area__quinta__interfaz__texto">
					<h1 className="titulo__quinta__interfaz">Ready to start your journey?</h1>
				</div>

				<div className="area__quinta__interfaz__imagen">
					<img src={Imagen} alt="imagen_quinta_interfaz" className='quinta__imagen' />
				</div>

				<div className="area__quinta__interfaz__boton">
					<button className="button-20">
						<img src={Download} alt="descarga__ultima" className="svg__descarga__ultima" />
						Download for Windows
					</button>
				</div>

			</div>
		</div>
	)
}

export default QuintaInterfaz