import { connect } from 'react-redux'
import BeauxLogo from './beaux-logo'
import select from 'select'
import { request } from 'duck/image'

const mapStateToProps = state => ({
	image: select.image(state)
})

const mapDispatchToProps = dispatch => ({
	requestImageForColor: payload => dispatch(request(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(BeauxLogo)
