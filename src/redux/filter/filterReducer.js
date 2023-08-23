import { FILTERWITHPRIORITY, FILTERWITHSTATUS } from './actionIdentifiers';
import initialState from './initialState';

export default function filterReducer(state = initialState, action) {
	switch (action.type) {
		case FILTERWITHSTATUS: {
			return {
				...state,
				status: action.payload,
			};
		}

		case FILTERWITHPRIORITY: {
			const { color, actionType } = action.payload;

			if (actionType === 'add') {
				return {
					...state,
					colors: [...state.colors, color],
				};
			} else {
				return {
					...state,
					colors: state.colors.filter((clr) => clr !== color),
				};
			}
		}

		default:
			return state;
	}
}
