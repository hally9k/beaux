import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import todo, { epics as todoEpics } from 'duck/todo'

export default combineReducers({
	todo
})

export const epics = combineEpics(...Object.values(todoEpics))
