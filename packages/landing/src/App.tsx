import { useState } from 'react';
import { Text } from 'paaskit';
import Header from './components/header/header';
import MainBanner from './components/mainbanner/mainbanner';
import SSHForm from './components/sshform/sshform';
import './App.css';
import 'paaskit/style.css';
import 'react-notifications-component/dist/theme.css';
import { ReactNotifications } from 'react-notifications-component';

function App() {
	return (
		<>
			<ReactNotifications/>
			<Header/>
			<MainBanner/>
			<SSHForm />
		</>
	)
}

export default App;
