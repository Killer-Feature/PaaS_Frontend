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
import AppsPage from './views/apps/apps';
import Modal from './views/modal/modal';
import ModalState, { State } from './models/modal';
import {observer} from 'mobx-react-lite';
import './network/base';
import './network/ws';
import 'react-toastify/dist/ReactToastify.css';
import Login from './views/login/login';
import LoginNet from './network/user';
import { useNavigate } from 'react-router-dom';
import Logout from './assets/logout.svg';

const App = observer(() => {
    const navigate = useNavigate();

	return (
		<>
			<Header>
				<Text type='menu'><NavLink className={style.menu} to={'/nodes'}>Главная</NavLink></Text>
				<Text type='menu'><NavLink className={style.menu} to={'/resources'}>Ресурсы</NavLink></Text>
				<Text type='menu'><NavLink className={style.menu} to={'/apps'}>Приложения</NavLink></Text>
				<Button isSec callback={() => {
					LoginNet.logout();
					navigate('/login');
				}}><img src={Logout} /></Button>
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
	<Route path='/'>
		<Route path='/login' element={<Login />} />
		<Route path='/' element={<App />} >
			<Route path='/' element={ <Navigate to="/nodes" /> }/>
			<Route path='/nodes' element={<IndexPage />} />
			<Route path='/resources' element={<ResoursesPage />} />
			<Route path='/apps' element={<AppsPage />} />
		</Route>
	</Route>
));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<Modal />
		<ToastContainer />
	</React.StrictMode>,
);
