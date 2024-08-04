import { TaskModel } from 'types/types';
import './styles.css';

import TaskItem from './TaskItem';
import { List } from 'antd';

interface TaskListProps {
	tasks: TaskModel[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => (
	<List className='task-list' dataSource={tasks} renderItem={task => <TaskItem key={task.id} task={task} />} />
);

export default TaskList;
