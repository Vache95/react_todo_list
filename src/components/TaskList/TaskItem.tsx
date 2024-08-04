import { FC, useCallback, useState } from 'react';
import EditModal from 'components/EditModal';
import { Button, Chip } from 'components/ui';
import { useAppDispatch } from 'hooks';
import { deleteTask, markTaskComplete } from 'store/slices/tasks/tasksSlice';
import { TaskModel } from 'types/types';

import { Card } from 'antd';

interface TaskItemProps {
	task: TaskModel;
}

const TaskItem: FC<TaskItemProps> = ({ task }) => {
	const dispatch = useAppDispatch();
	const [isEditModalOpen, setEditModalOpen] = useState(false);

	const handleDelete = () => dispatch(deleteTask(task.id));
	const handleComplete = () => dispatch(markTaskComplete(task.id));
	const handleEdit = () => setEditModalOpen(true);
	const closeModal = () => setEditModalOpen(false);

	const renderStatusTag = useCallback(() => {
		return {
			Pending: <Chip text='Pending' color='blue' />,
			Completed: <Chip text='Completed' color='green' />,
			Overdue: <Chip text='Overdue' color='red' />,
			Removed: <Chip text='Removed' color='gray' />,
		}?.[task.status];
	}, [task.status]);

	return (
		<>
			<Card
				className='task-item'
				title={task.title}
				extra={
					<>
						{task.status === 'Pending' && (
							<>
								<Button onClick={handleComplete}>Complete</Button>
								<Button onClick={handleEdit}>Edit</Button>
							</>
						)}
						{'Removed' !== task.status && (
							<Button onClick={handleDelete} danger>
								Delete
							</Button>
						)}
					</>
				}
			>
				<p>{task.description || '---'}</p>
				<p>Deadline: {task.deadline || '---'}</p>
				{renderStatusTag()}
			</Card>
			<EditModal task={task} isModalOpen={isEditModalOpen} onClose={closeModal} />
		</>
	);
};

export default TaskItem;
