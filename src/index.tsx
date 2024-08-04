import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './styles/global.css';

import { store } from '../src/store/store';
import App from './App';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ConfigProvider theme={{}}>
				<App />
			</ConfigProvider>
		</Provider>
	</React.StrictMode>,
);
