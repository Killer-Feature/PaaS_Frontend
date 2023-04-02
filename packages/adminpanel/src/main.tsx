import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Text, Header, Button } from 'paaskit';
import Table from './components/table/table';
import 'paaskit/style.css';
import style from './app.module.css';
import './variables.css';
import IndexPage from './views/index/index';
import Modal from './views/modal/modal';

function App() {
	return (
		<>
			<Header>
				<Text type='menu'>Главная</Text>
				<Text type='menu'>Кластер</Text>
				<Text type='menu'>Приложения</Text>
				<Text type='menu'>Ресурсы</Text>
				<Text type='menu'>Service mesh</Text>
			</Header>
			<div className={style.root}>
				<div className={style.block}>
					<Outlet />
				</div>
			</div>
			<Modal />
		</>
	);
}

const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<App />} >
		<Route path='/' element={ <Navigate to="/nodes" /> }/>
		<Route path='/nodes' element={<IndexPage />} />
	</Route>
));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
