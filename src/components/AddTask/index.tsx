import { FC } from 'react';
import AddForm from 'components/AddTask/AddForm';
import './style.css';

export const AddTask: FC = () => (
	<div className='toolsbar'>
		<h1>Todo List</h1>
		<div className='toolsbar__taskform'>
			<AddForm />
		</div>
	</div>
);

export default AddTask;
