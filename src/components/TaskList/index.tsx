import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { checkOverdueTasks, selectSlice } from 'store/slices/tasks/tasksSlice';
import { ONE_MINUTE } from 'constants/index';

import AddTask from '../AddTask';
import TaskList from './TaskList';

const Todo: FC = () => {
	const dispatch = useAppDispatch();
	const { tasks } = useAppSelector(selectSlice);

	useEffect(() => {
		dispatch(checkOverdueTasks());

		const interval = setInterval(() => {
			dispatch(checkOverdueTasks());
		}, ONE_MINUTE);

		return () => clearInterval(interval);
	}, [dispatch]);

	return (
		<>
			<AddTask />
			<TaskList tasks={tasks} />
		</>
	);
};

export default Todo;
