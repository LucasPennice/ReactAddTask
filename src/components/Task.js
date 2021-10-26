import React from 'react';

class Task extends React.Component {
	render() {
		// console.log(this.props);
		return (
			<li className="task">
				<p className="taskText">{this.props.taskText}</p>
				<p
					className="xIcon"
					onClick={() => this.props.deleteTask(this.props.id)}
				>
					X
				</p>
			</li>
		);
	}
}

export default Task;
