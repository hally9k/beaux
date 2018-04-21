import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import image, { epics as imageEpics } from 'duck/image'

export default combineReducers({
	image
})

export const epics = combineEpics(...Object.values(imageEpics))
