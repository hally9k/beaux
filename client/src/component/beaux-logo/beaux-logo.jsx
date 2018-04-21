import * as React from 'react'
import classnames from 'classnames'
import color from 'utility/color'
import Typing from 'react-typing-animation'
import './beaux.scss'

const timeouts = []

export default class BeauxLogo extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			message: this.message,
			visible: false
		}
	}

	componentDidMount() {
		const nextColor = this.color
		this.addVisibility(nextColor)
		this.setCSSVariables(nextColor)
	}

	componentWillUnmount() {
		timeouts.forEach(clearTimeout)
	}

	componentDidUpdate() {
		document.querySelector(':root').style.setProperty('--ux-image-url', `url("${this.props.image.imageUrl}")`)
	}

	count = -1

	messages = [
		'Beautiful User Experiences',
		'Watch This Space',
		'Seductive UX',
		'Watch This Space',
		'Experience The Beautiful',
		'Watch This Space'
	]

	getRandomHex() {
		return Math.floor(Math.random() * 256)
			.toString(16)
			.padStart(2, '0')
	}

	get message() {
		return this.messages[this.count++ % 6]
	}

	get color() {
		const red = this.getRandomHex()
		const green = this.getRandomHex()
		const blue = this.getRandomHex()

		return `#${red}${green}${blue}`
	}

	onFinishedTyping = () => {
		const nextColor = this.color

		this.setCSSVariables(nextColor)
		this.setState({ visible: false })

		this.addVisibility(nextColor)
	}

	setCSSVariables = nextColor => {
		const colorName = color.name(nextColor.replace('#', ''))
		if (colorName[1]) {
			this.props.requestImageForColor(colorName[1])
		}

		const rgba = hexToRGB(nextColor, 0.5)

		document.querySelector(':root').style.setProperty('--ux-color', rgba)
	}

	addVisibility = nextColor => {
		timeouts.push(
			setTimeout(
				function() {
					this.setState({ message: this.message })
				}.bind(this),
				2000
			)
		)
		timeouts.push(
			setTimeout(
				function() {
					this.setState({ visible: true })
				}.bind(this),
				4000
			)
		)
	}

	render() {
		const { visible, message } = this.state
		return (
			<div className="container" onLoad={this.onFinishedTyping}>
				<Typing
					className="beaux"
					startDelay={2000}
					speed={150}
					loop={true}
					onFinishedTyping={this.onFinishedTyping}
					cursor={<Typing.Cursor className="cursor" />}
				>
					<span>BE</span>
					<Typing.Speed ms={200} />
					<span>A</span>
					<Typing.Speed ms={300} />
					<span className="ux">UX</span>
					<Typing.Delay ms={4000} />
					<Typing.Backspace count={5} />
				</Typing>
				<h2 className={classnames('strap-line', { visible })}>{message}</h2>
			</div>
		)
	}
}

function hexToRGB(hex, alpha) {
	var r = parseInt(hex.slice(1, 3), 16),
		g = parseInt(hex.slice(3, 5), 16),
		b = parseInt(hex.slice(5, 7), 16)

	if (alpha) {
		return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
	} else {
		return 'rgb(' + r + ', ' + g + ', ' + b + ')'
	}
}
