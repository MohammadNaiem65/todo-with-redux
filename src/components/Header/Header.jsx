import { useDispatch } from 'react-redux';
import notesImg from '../../assets/images/notes.png';
import doubleTickImg from '../../assets/images/double-tick.png';
import plusImg from '../../assets/images/plus.png';
import {
	added,
	allCompleted,
	clearCompleted,
} from '../../redux/todos/actionCreators';

export default function Header() {
	const dispatch = useDispatch();

	const handleAddTodo = (e) => {
		e.preventDefault();
		dispatch(added(e.target.todoText.value));
	};

	const makeAllTodoCompleted = () => {
		dispatch(allCompleted());
	};

	const removeCompletedTodos = () => {
		dispatch(clearCompleted());
	};

	return (
		<div>
			<form
				className='flex items-center bg-gray-100 px-4 py-4 rounded-md'
				onSubmit={handleAddTodo}>
				<img src={notesImg} className='w-6 h-6' alt='Add todo' />
				<input
					type='text'
					name='todoText'
					placeholder='Type your todo'
					className='w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500'
					required
				/>
				<button type='submit' className='appearance-none w-8 h-8'>
					<img src={plusImg} alt='' />
				</button>
			</form>

			<ul className='flex justify-between my-4 text-xs text-gray-500'>
				<li
					className='flex space-x-1 cursor-pointer'
					onClick={makeAllTodoCompleted}>
					<img
						className='w-4 h-4'
						src={doubleTickImg}
						alt='Complete'
					/>
					<span>Complete All Tasks</span>
				</li>
				<li className='cursor-pointer' onClick={removeCompletedTodos}>
					Clear completed
				</li>
			</ul>
		</div>
	);
}
