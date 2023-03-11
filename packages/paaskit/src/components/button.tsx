import React from 'react';

const MyButton: React.FunctionComponent<{msg: string}> = ({ msg }) => {
	return (
		<p>
			<b>{msg}</b> - привет!1!1
		</p>
	);
};

export default MyButton;
