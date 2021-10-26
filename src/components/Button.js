import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<button className="btnAddTask" onClick={this.props.btnFnc}>
				{this.props.btnText}
			</button>
		);
	}
}

export default Button;
