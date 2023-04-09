import React from 'react';
import style from './button.module.css';

type Props = {
    children: React.ReactNode,
	callback?: (data: any) => void,
	type?: 'input',
	isSec?: boolean,
	isDanger?: boolean,
};

const MyButton: React.FC<Props> = ({ children, callback, type, isSec = false, isDanger = false }) => {
	return (
		<div onClick={callback} className={
			style.block
			+ (type ? (' ' + style[type ?? 'block']) : '')
			+ (isSec ? (' ' + style.sec) : '')
			+ (isDanger ? (' ' + style.danger) : '')
		}>
			{children}
		</div>
	);
};

export default MyButton;
