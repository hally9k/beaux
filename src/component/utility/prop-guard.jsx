import * as React from 'react'

const PropGuard = (requiredProps, WrappedComponent, LoadingComponent) => {
	return class RequiredPropsWrapper extends React.Component {
		static displayName = `PropGuard(${getDisplayName(WrappedComponent)})`

		constructor(props) {
			super(props)
		}

		requiredPropsMissing = () =>
			requiredProps.reduce((output, propKey) => {
				return this.props[propKey] === null && this.props[propKey] === undefined
			}, true)

		render = () =>
			this.requiredPropsMissing() ? (
				LoadingComponent ? (
					<LoadingComponent />
				) : (
					<h1>Loading...</h1>
				)
			) : (
				<WrappedComponent {...this.props} />
			)
	}
}

const getDisplayName = Component => Component.displayName || Component.name || 'Component'

export default PropGuard
