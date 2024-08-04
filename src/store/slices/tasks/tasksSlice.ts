import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { formatDateTo } from 'utils';
import { TaskModel } from 'types/types';

import { initialState } from './initialState';

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	selectors: {
		selectSlice: state => state,
	},
	reducers: {
		addTask: (state, { payload }: PayloadAction<TaskModel>) => {
			state.tasks = [payload, ...state.tasks];
		},

		editTask: (state, { payload }: PayloadAction<TaskModel>) => {
			const index = state.tasks.findIndex(task => task.id === payload.id);
			if (index !== -1) {
				state.tasks[index] = payload;
			}
		},

		deleteTask: (state, { payload }: PayloadAction<string>) => {
			const taskToRemove = state.tasks.find(task => task.id === payload);
			if (taskToRemove) {
				state.tasks = state.tasks.filter(task => task.id !== payload);
				state.removedTasks = [...state.removedTasks, taskToRemove];
			}
		},

		markTaskComplete: (state, { payload }: PayloadAction<string>) => {
			const index = state.tasks.findIndex(task => task.id === payload);
			if (index !== -1) {
				state.tasks[index].status = 'Completed';
			}
		},

		checkOverdueTasks: state => {
			const currentDate = new Date().getTime();
			const now = formatDateTo(new Date().toISOString());

			state.tasks.forEach(task => {
				if (task.deadline) {
					const taskDeadline = new Date(task.deadline).getTime();
					if (taskDeadline < currentDate && task.status !== 'Completed' && task.deadline < now) {
						task.status = 'Overdue';
					}
				}
			});
		},
	},
});

export const { selectSlice } = tasksSlice.selectors;

export const { addTask, editTask, deleteTask, markTaskComplete, checkOverdueTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
