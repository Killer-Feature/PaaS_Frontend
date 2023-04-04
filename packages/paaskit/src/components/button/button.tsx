import React from 'react';
import style from './button.module.css';

type Props = {
    children: React.ReactNode,
	callback?: (data: any) => void,
	type?: 'input',
	isSec?: boolean,
};

const MyButton: React.FC<Props> = ({ children, callback, type, isSec = false }) => {
	return (
		<div onClick={callback} className={
			style.block
			+ (type ? (' ' + style[type ?? 'block']) : '')
			+ (isSec ? (' ' + style.sec) : '')
		}>
			{children}
		</div>
	);
};

export default MyButton;
