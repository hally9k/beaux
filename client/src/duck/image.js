import { List } from 'immutable'

const REQUEST = 'REQUEST'
const RECEIVE = 'RECEIVE'

export const request = payload => ({ type: REQUEST, payload })
const receive = payload => ({ type: RECEIVE, payload })

const INITIAL_STATE = null

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action

	switch (type) {
		case RECEIVE:
			return payload

		default:
			return state
	}
}

let count = 0
const img = new Image()

const requestEpic = $action =>
	$action.ofType(REQUEST).mergeMap(({ payload }) => {
		const url = [
			'https://images.unsplash.com/photo-1490806230066-f7e6f7bf5052?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ca889535ea01f912f94ac4ddf0034e0&auto=format&fit=crop&w=2233&q=80',
			'https://images.unsplash.com/photo-1510016785329-91a548661797?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83087784e83098da941676741fa78c23&auto=format&fit=crop&w=1320&q=80'
		][count++ % 2]

		img.src = url

		const mockResult = {
			results: [
				{
					user: {
						name: 'Hal Smith',
						links: {
							self: 'http://me/me.com'
						}
					},
					urls: {
						regular: url
					}
				}
			]
		}

		const {
			user: {
				name: photographerName,
				links: { self: photographerProfile }
			},
			urls: { regular: imageUrl }
		} = mockResult.results[0]

		return [
			receive({
				imageUrl,
				photographerName,
				photographerProfile
			})
		]
	})
// fetch(
// 	`https://api.unsplash.com/search/photos/?page=1&query=${payload}&client_id=73c33f84498fa526d6cfa571253007d571012760a3b48cb5ebfdcd518083c45b`
// )
// 	.then(x => x.json())
// 	.then(items => receive(items))
// )

export const epics = {
	requestEpic
}
