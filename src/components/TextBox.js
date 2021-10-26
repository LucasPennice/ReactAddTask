import React from 'react';
import Button from './Button';

class TextBox extends React.Component {
	state = { tBox: '' };
	render() {
		return (
			<form
				className="form"
				onSubmit={(e) => {
					this.props.tbFunc(e);
					this.setState({ tBox: '' });
				}}
			>
				<input
					className="textInput"
					placeholder="What monkey do?"
					type="text"
					value={this.state.tBox}
					onChange={(e) => {
						this.setState({ tBox: e.target.value });
					}}
				/>
				<Button btnText="Add Task" />
			</form>
		);
	}
}

export default TextBox;
