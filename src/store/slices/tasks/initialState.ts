import { TaskModel } from 'types/types';

interface TasksState {
	tasks: TaskModel[];
	removedTasks: TaskModel[];
}

export const initialState: TasksState = {
	tasks: [
		{
			id: '1',
			title: 'Test',
			description: 'Overdue',
			deadline: '03-03-2024',
			status: 'Pending',
		},
		{
			id: '2',
			title: 'Test',
			description: 'test',
			deadline: '12-12-2024',
			status: 'Pending',
		},
	],
	removedTasks: [],
};
