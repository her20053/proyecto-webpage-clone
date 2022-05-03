import React from 'react'

import './introduction.css'

const Introduction = () => {
	return (
		<div className="introduction__container">
			<h1 className="introduction__title">The new PayPal app is here</h1>
			<img src="https://www.paypalobjects.com/marketing/web/shared/qrc-sms/device-hero.png" alt="device" className="device__mobile" />
		</div>
	)
}

export default Introduction