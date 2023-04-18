import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet, Navigate, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { Text, Header, Button } from 'paaskit';
import Table from './components/table/nodes/table';
import 'paaskit/style.css';
import { ToastContainer } from 'react-toastify';
import style from './app.module.css';
import './variables.css';
import IndexPage from './views/index/index';
import ResoursesPage from './views/resourses/resourses';
import Modal from './views/modal/modal';
import ModalState, { State } from './models/modal';
import {observer} from 'mobx-react-lite';
import './network/base';
import './network/ws';
import 'react-toastify/dist/ReactToastify.css';

const App = observer(() => {
	return (
		<>
			<Header>
				<Text type='menu'><NavLink className={style.menu} to={'/nodes'}>Главная</NavLink></Text>
				{/* <Text type='menu'>Кластер</Text>
				<Text type='menu'>Приложения</Text> */}
				<Text type='menu'><NavLink className={style.menu} to={'/resources'}>Ресурсы</NavLink></Text>
				<Text type='menu'><NavLink className={style.menu} to={'/apps'}>Приложения</NavLink></Text>
			</Header>
			<div className={
				((ModalState.state === State.Opening) ? style.modalOpening : '')
				+ ((ModalState.state === State.Closing) ? (' ' + style.modalClosing) : '')
				+ ((ModalState.state === State.Open) ? (' ' + style.modalOpen) : '')
			}>
				<div className={style.root}>
					<div className={style.block}>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
});

const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<App />} >
		<Route path='/' element={ <Navigate to="/nodes" /> }/>
		<Route path='/nodes' element={<IndexPage />} />
		<Route path='/resources' element={<ResoursesPage />} />
		<Route path='/apps' element={<ResoursesPage />} />
	</Route>
));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<Modal />
		<ToastContainer />
	</React.StrictMode>,
);
