import React from 'react'
import { hot } from 'react-hot-loader'
import BeauxLogo from './beaux-logo'

import './index.scss'

const Root = () => (
	<div className="app">
		<BeauxLogo />
		<p className="contact">h a l @ b e a u x . n z</p>
	</div>
)

export default hot(module)(Root)
