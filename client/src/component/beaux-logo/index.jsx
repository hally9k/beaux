import * as React from 'react'
import Typing from 'react-typing-animation'
import './beaux.scss'

function randomColor() {
	const red = getRandomHex()
	const green = getRandomHex()
	const blue = getRandomHex()

	return `#${red}${green}${blue}`
}

function getRandomHex() {
	return Math.floor(Math.random() * 256)
		.toString(16)
		.padStart(2, '0')
}

const root = document.querySelector(':root')

export default () => (
	<div className="container" onLoad={onFinishedTyping}>
		<Typing
			className="beaux"
			startDelay={2000}
			speed={150}
			loop={true}
			onFinishedTyping={onFinishedTyping}
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
		<h2 className="strap-line" />
	</div>
)

let count = -1

const getMessage = () => {
	return messages[++count % 6]
}

const messages = [
	'Beautiful User Experiences',
	'Watch This Space',
	'Seductive UX',
	'Watch This Space',
	'Experience The Beautiful',
	'Watch This Space'
]

const onFinishedTyping = () => {
	root.style.setProperty('--ux-color', randomColor())
	const strapLine = document.querySelector('.strap-line')
	strapLine.classList.remove('visible')

	addVisibility()
}

const addVisibility = () => {
	setTimeout(() => {
		const strapLine = document.querySelector('.strap-line')
		strapLine.innerText = getMessage()
	}, 2000)
	setTimeout(() => {
		const strapLine = document.querySelector('.strap-line')
		strapLine.classList.add('visible')
	}, 4000)
}

addVisibility()
