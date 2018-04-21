import { connect } from 'react-redux'
import Root from './index.jsx'
import select from 'select'
import { request } from 'duck/image'

const mapStateToProps = state => ({
	image: select.image(state)
})

export default hot(connect(mapStateToProps, () => ({}))(Root))
