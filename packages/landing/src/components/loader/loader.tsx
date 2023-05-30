import React from 'react';
import style from './loader.module.css';

const App = ({ip} : {ip: string}) => {
	const [count, updateCount] = React.useState(0);
	const link = 'http://' + ip + '/login';

	if (count < 100) {
		setTimeout(() => {
			updateCount(count + Math.ceil(Math.random() * 5));
		}, 250);
	}

	return (
		(count < 100 ?
			<div className={style.bigBlock}>
				<div className={style.h1}>{count}<div className={style.span}>%</div></div>
				<div className={style.p}>в стадии деплоя</div>
				<div className={style.block}>
					<div className={style.lizard} style={{width: count + '%'}}></div>
				</div>
			</div>
			:
			<div className={style.bigBlock}>
				<div className={style.h1}>{100}<div className={style.span}>%</div></div>
				<div className={style.p}>успешно завершено</div>
				<div className={style.deployed}>
					Система успешно развернута. Перейдите по ссылке <a href={link}>{link}</a> и авторизируйтесь используя логин и пароль от SSH.
				</div>
			</div>
		)
	);
};

export default App;
