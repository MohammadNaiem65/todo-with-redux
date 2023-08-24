import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';

export default function TodoList() {
	const todos = useSelector((state) => state.todos);
	const filter = useSelector((state) => state.filter);

	const filterByStatus = (todo) => {
		switch (filter.status) {
			case 'complete': {
				return todo.completed;
			}

			case 'incomplete': {
				return !todo.completed;
			}

			default: {
				return true;
			}
		}
	};

	const filterByColors = (todo) => {
		if (filter.colors.length > 0) {
			if (filter.colors.includes(todo?.priority)) {
				return true;
			} else {
				return false;
			}
		} else {
			return true;
		}
	};

	return (
		<div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
			{todos
				.filter(filterByStatus)
				.filter(filterByColors)
				.map((todo) => (
					<Todo key={todo.id} todo={todo} />
				))}
		</div>
	);
}
