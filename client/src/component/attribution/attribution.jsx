import * as React from 'react'
import './attribution.scss'

export default ({ image }) => (
	<div className="attribution">
		{image && (
			<p>
				Images by <a href="http://unsplash.com?utm_source=beaux.nz&utm_medium=referral">Unsplash</a>. Currently
				showing the work of{' '}
				<a href={`${image.photographerProfile}?utm_source=beaux.nz&utm_medium=referral`}>
					{image.photographerName}
				</a>.
			</p>
		)}
	</div>
)
