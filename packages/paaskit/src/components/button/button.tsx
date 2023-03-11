import React from 'react';
import style from './button.module.css';

const MyButton: React.FunctionComponent<{msg: string}> = ({ msg }) => {
	return (
		<p className={style.test}>
			<b>{msg}</b> - привет!1!1
		</p>
	);
};

export default MyButton;
