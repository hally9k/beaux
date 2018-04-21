import * as React from 'react'
import './attribution.scss'

export default ({ image }) => (
	<div className="attribution">
		{image && (
			<p>
				Images by <a href="http://unsplash.com">Unsplash</a>. Currently showing the work of{' '}
				<a href={image.photographerProfile}>{image.photographerName}</a>.
			</p>
		)}
	</div>
)
