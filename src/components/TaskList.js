import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
	state = { taskList: this.props.taskArray, updater: 1 };

	deleteTask = (idValue) => {
		// console.log(idValue);
		this.state.taskList.splice(idValue, 1);
		// console.log(this.state.taskList);
		this.setState({ updater: 1 });
	};

	render() {
		return (
			<ul className="taskList">
				{this.state.taskList.map((task) => {
					return (
						<Task
							deleteTask={this.deleteTask}
							taskText={task}
							key={this.state.taskList.indexOf(task)}
							id={this.state.taskList.indexOf(task)}
						/>
					);
				})}
			</ul>
		);
	}
}

export default TaskList;
