import React from 'react';
import style from './button.module.css';

type Props = {
    children: React.ReactNode,
	callback?: (data: any) => void,
};

const MyButton: React.FC<Props> = ({ children, callback }) => {
	return (
		<div onClick={callback} className={style.block}>
			{children}
		</div>
	);
};

export default MyButton;
