import React from 'react';
import styled from 'styled-components';

const DoChat = (props) => {
	const {
		children,
		_onClick,
	} = props;
	
	return (
		<React.Fragment>
			<ChatButton onClick={_onClick}>{children}</ChatButton>
		</React.Fragment>
	);
};

DoChat.defaultProps = {
	children: null,
	_onClick: () => {},
}

const ChatButton = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50px;
	line-height: 50px;
	font-size: 30px;
	font-weight: bold;
	text-align: center;
	color: white;
	border: none;
	background-color: orange;
	position: fixed;
	bottom: 120px;
	right: 16px;
	cursor: pointer;
	transition: .3s all ease;

	:hover {
	background-color: blue;
	color: aliceblue;
	}
`;

export default DoChat;