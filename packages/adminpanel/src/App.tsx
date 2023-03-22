import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Text, Header } from 'paaskit';
import Title from './components/titleHeader/titleHeader';
import 'paaskit/style.css';
import style from './app.module.css';
import './variables.css';

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
					<div className={style.title}>
						<Title desc={'Тут находится основная информация о вашем кластере и его ресурсах'}>
							Общая панель управления
						</Title>
					</div>
				</div>
			</div>
		</>
	);
}

export default App
