import initialState from './initialState';
import {
	ADDED,
	TOGGLED,
	COLORSELECTED,
	DELETED,
	ALLCOMPLETED,
	CLEARCOMPLETED,
} from './actionIdentifiers';

const newId = (state) =>
	state.reduce((maxId, currTodo) => Math.max(maxId, currTodo.id), 1);

export default function todoReducer(state = initialState, action) {
	switch (action.type) {
		case ADDED: {
			return [
				...state,
				{
					id: newId(state),
					text: action.payload,
					completed: false,
				},
			];
		}

		case TOGGLED: {
			return state.map((todo) => {
				if (todo.id !== action.payload) {
					return todo;
				}
				return {
					...todo,
					completed: !todo.completed,
				};
			});
		}

		case COLORSELECTED: {
			return state.map((todo) => {
				if (todo.id !== action.payload.todoId) {
					return todo;
				}

				return {
					...todo,
					priority: action.payload.color,
				};
			});
		}

		case DELETED: {
			return state.filter((todo) => todo.id !== action.payload);
		}

		case ALLCOMPLETED: {
			return state.map((todo) => (todo.completed = true));
		}

		case CLEARCOMPLETED: {
			return state.filter((todo) => !todo.completed);
		}

		default: {
			return state;
		}
	}
}
