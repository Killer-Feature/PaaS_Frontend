import { useState } from 'react'
import plus from './assets/plus.svg'
import viteLogo from '/vite.svg'
import { Text, Header, Button } from 'paaskit';
import Title from './components/titleHeader/titleHeader';
import Table from './components/table/table';
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
						<Title desc={'Тут находится список текущих машин вашего кластера'}>
							Состояние кластера
						</Title>
						<Button callback={() => {}}>
							<img src={plus} alt={'plus'} />
							<span>Добавить</span>
						</Button>
					</div>
					<Table />
				</div>
			</div>
		</>
	);
}

export default App