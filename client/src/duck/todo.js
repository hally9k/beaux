import { List } from 'immutable'

const GET = 'GET'
const ADD = 'ADD'
const REMOVE = 'REMOVE'
const RECEIVE = 'RECEIVE'

export function get() {
	return { type: GET }
}
export function add(payload) {
	return { type: ADD, payload }
}
export function remove(payload) {
	return { type: REMOVE, payload }
}
export function receive(payload) {
	return { type: RECEIVE, payload }
}

const INITIAL_STATE = List()

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RECEIVE:
			return List(action.payload)

		default:
			return state
	}
}

const getEpic = $action =>
	$action.ofType(GET).mergeMap(() =>
		fetch('/api')
			.then(x => x.json())
			.then(items => receive(items))
	)

const addEpic = $action =>
	$action.ofType(ADD).mergeMap(({ payload }) => {
		return fetch('/api', { method: 'POST', body: payload })
			.then(x => x.json())
			.then(items => receive(items))
	})

const removeEpic = $action =>
	$action.ofType(REMOVE).mergeMap(({ payload }) =>
		fetch('/api', { method: 'DELETE', body: JSON.stringify(payload) })
			.then(x => x.json())
			.then(items => receive(items))
	)

export const epics = {
	getEpic,
	addEpic,
	removeEpic
}
