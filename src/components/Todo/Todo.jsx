import { useDispatch } from 'react-redux';
import cancelPng from '../../assets/images/cancel.png';
import {
	colorSelected,
	deleted,
	toggled,
} from '../../redux/todos/actionCreators';

export default function Todo({ todo }) {
	const dispatch = useDispatch();

	const { text, completed, priority, id } = todo;

	const handleToggleStatus = (id) => {
		dispatch(toggled(id));
	};

	const handleChangeColor = (id, color) => {
		dispatch(colorSelected(id, color));
	};

	const handleDeleteTodo = (id) => {
		dispatch(deleted(id));
	};

	return (
		<div className='flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0'>
			<div
				className={`rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
					completed
						? 'border-green-500 focus-within:border-green-500'
						: 'border-gray-400'
				}`}>
				<input
					type='checkbox'
					checked={completed}
					className='opacity-0 absolute rounded-full cursor-pointer'
					onChange={() => handleToggleStatus(id)}
				/>
				<svg
					className={`fill-current w-3 h-3 text-green-500 pointer-events-none ${
						completed || 'hidden'
					}`}
					viewBox='0 0 20 20'>
					<path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
				</svg>
			</div>

			<div
				className={`select-none flex-1 ${completed && 'line-through'}`}>
				{text}
			</div>

			<div
				className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
					priority === 'green' && 'bg-green-500'
				}`}
				onClick={() => handleChangeColor(id, 'green')}></div>

			<div
				className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
					priority === 'yellow' && 'bg-yellow-500'
				}`}
				onClick={() => handleChangeColor(id, 'yellow')}></div>

			<div
				className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
					priority === 'red' && 'bg-red-500'
				}`}
				onClick={() => handleChangeColor(id, 'red')}></div>

			<img
				src={cancelPng}
				className='flex-shrink-0 w-4 h-4 ml-2 cursor-pointer'
				alt='Cancel'
				onClick={() => handleDeleteTodo(id)}
			/>
		</div>
	);
}
