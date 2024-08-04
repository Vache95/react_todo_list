import { configureStore } from '@reduxjs/toolkit';

import tasks from './slices/tasks/tasksSlice';

export const store = configureStore({
	reducer: { tasks },
});

export type RootState = ReturnType<typeof store.getState>;
