import { FC } from 'react';
import TaskItem from 'components/TaskList/TaskItem';
import { useAppSelector } from 'hooks';
import { selectSlice } from 'store/slices/tasks/tasksSlice';
import './styles.css';

const Trash: FC = () => {
	const { removedTasks } = useAppSelector(selectSlice);

	return (
		<div className='trash'>
			<h1>Trash</h1>
			<div className='trash-list'>
				{removedTasks.map(task => (
					<TaskItem key={task.id} task={{ ...task, status: 'Removed' }} />
				))}
			</div>
		</div>
	);
};

export default Trash;
