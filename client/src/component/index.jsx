import React from 'react'
import { hot } from 'react-hot-loader'
import Attribution from './attribution'
import BeauxLogo from './beaux-logo'
import color from 'utility/color'
import './index.scss'

class Root extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			colorName: null,
			backgroundImage: null
		}
	}
	render() {
		return (
			<div className="app">
				<BeauxLogo />
				<div className="footer">
					<p className="contact">h a l @ b e a u x . n z</p>
					<Attribution />
				</div>
			</div>
		)
	}
}

export default hot(module)(Root)
