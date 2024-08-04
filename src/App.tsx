import { FC } from 'react';
import { Todo, Trash } from 'components';

import { Tabs, TabsProps } from 'antd';

const items: TabsProps['items'] = [
	{
		key: '1',
		label: 'Todo List',
		children: <Todo />,
	},
	{
		key: '2',
		label: 'Trash',
		children: <Trash />,
	},
];

const App: FC = () => (
	<>
		<div className='wrapper'>
			<div className='wrapper__container'>
				<Tabs defaultActiveKey='1' items={items} />
			</div>
		</div>
	</>
);

export default App;
