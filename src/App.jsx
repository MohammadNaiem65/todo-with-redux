import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList/TodoList';

function App() {
	return (
		<div className='w-full grid place-items-center bg-blue-100 h-screen font-sans'>
			<Navbar />
			<div className='w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white'>
				<Header />
				<hr className='mt-4' />

				<TodoList />
				<hr className='mt-4' />

				<Footer />
			</div>
		</div>
	);
}

export default App;
