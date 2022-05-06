import React from 'react'

import './introduction.css'

import Background from './assets/background.svg'
import Izquierda from './assets/imagen_izquierda.svg'
import Derecha from './assets/imagen_derecha.svg'
import Download from './assets/download.svg'

const Introduction = () => {
	return (
		<div className="introduction__container">

			<div className="introduction__imagenes">
				<img className="introduction__background__image" src={Background} alt="background" />
				<img className="introduction__izquierda__image" src={Izquierda} alt="izquierda" />
				<img className="introduction__derecha__image" src={Derecha} alt="derecha" />
			</div>

			<div className="introduction__parte__central">
				<h1 className="titulo">IMAGINE A PLACE...</h1>
				<div className="introduction__parte__central__parrafo">
					<p className="parrafo">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
				</div>
				<div className="introduction__buttons__area">
					<button className="button-18"><img src={Download} alt="descargar_logo" className="svg__descarga" />Download for Windows</button>
					<button className="button-19">Open Discord in your browser</button>
				</div>
			</div>


		</div>
	)
}

export default Introduction