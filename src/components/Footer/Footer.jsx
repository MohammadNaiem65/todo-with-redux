import { useSelector, useDispatch } from 'react-redux';
import {
	filterWithStatus,
	filterWithPriority,
} from '../../redux/filter/actionCreators';

const todoText = (length) => {
	switch (length) {
		case 0: {
			return 'No tusk';
		}

		case 1: {
			return '1 tusk';
		}

		default: {
			return `${length} tusks`;
		}
	}
};

export default function Footer() {
	const todos = useSelector((state) => state.todos);
	const filter = useSelector((state) => state.filter);
	const dispatch = useDispatch();

	const todosLeft = todos.filter((todo) => !todo.completed).length;

	const handleFilterWithStatus = (status) => {
		dispatch(filterWithStatus(status));
	};

	const handleFilterWithPriority = (color) => {
		if (filter.colors.includes(color)) {
			dispatch(filterWithPriority(color, 'remove'));
		} else {
			dispatch(filterWithPriority(color, 'add'));
		}
	};

	return (
		<div className='mt-4 flex justify-between text-xs text-gray-500'>
			<p>{todoText(todosLeft)} left</p>
			<ul className='flex space-x-1 items-center text-xs'>
				<li
					className={`cursor-pointer ${
						filter.status === 'all' && 'font-bold'
					}`}
					onClick={() => handleFilterWithStatus('all')}>
					All
				</li>
				<li>|</li>
				<li
					className={`cursor-pointer ${
						filter.status === 'incomplete' && 'font-bold'
					}`}
					onClick={() => handleFilterWithStatus('incomplete')}>
					Incomplete
				</li>
				<li>|</li>
				<li
					className={`cursor-pointer ${
						filter.status === 'complete' && 'font-bold'
					}`}
					onClick={() => handleFilterWithStatus('complete')}>
					Complete
				</li>
				<li></li>
				<li></li>
				<li
					className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
						filter.colors.includes('green') && 'bg-green-500'
					}`}
					onClick={() => handleFilterWithPriority('green')}></li>
				<li
					className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
						filter.colors.includes('yellow') && 'bg-yellow-500'
					}`}
					onClick={() => handleFilterWithPriority('yellow')}></li>
				<li
					className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
						filter.colors.includes('red') && 'bg-red-500'
					}`}
					onClick={() => handleFilterWithPriority('red')}></li>
			</ul>
		</div>
	);
}
