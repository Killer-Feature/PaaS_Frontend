import { useState } from 'react';
import { Text, Header } from 'paaskit';
import MainBanner from './components/mainbanner/mainbanner';
import SSHForm from './components/sshform/sshform';
import OurFtrs from './components/ourftrs/ourftrs';
import Footer from './components/footer/footer';
import './App.css';
import 'paaskit/style.css';
import 'react-notifications-component/dist/theme.css';
import { ReactNotifications } from 'react-notifications-component';

function App() {
	return (
		<>
			<ReactNotifications/>
			<Header>
				<Text type='menu'>О нас</Text>
				<Text type='menu'>Быстрый старт</Text>
				<Text type='menu'>Документация</Text>
				<Text type='menu'>Контакты</Text>
			</Header>
			<MainBanner/>
			<OurFtrs />
			<SSHForm />
			<Footer />
		</>
	)
}

export default App;
