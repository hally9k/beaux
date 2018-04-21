import { connect } from 'react-redux'
import Attribution from './attribution'
import select from 'select'
import { request } from 'duck/image'

const mapStateToProps = state => ({
	image: select.image(state)
})

export default connect(mapStateToProps, () => ({}))(Attribution)
