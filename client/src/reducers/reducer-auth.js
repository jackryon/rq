export const authorized = (state, action) => {
	switch(action.type) {
		case 'AUTHORIZED':
			return action.authorized
		default:
			return state
	}
}
