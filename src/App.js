import React from 'react';
import style from './style.css';
import Button from './components/Button';
import TaskList from './components/TaskList';
import TextBox from './components/TextBox';
import Task from './components/Task';

class App extends React.Component {
	state = { taskArray: [], aux: null };
	addTask = (e) => {
		e.preventDefault();
		if (e.target.elements[0].value) {
			//Adds an entry to the array, takes values from event
			this.state.taskArray.push(e.target.elements[0].value);
			// console.log(this.state.taskArray);
			this.setState({ aux: 1 });
		} else {
			alert('Please write something for monkey to do');
		}
	};

	render() {
		return (
			<div className="appDiv">
				<TextBox tbFunc={this.addTask} />
				<TaskList taskArray={this.state.taskArray} />
			</div>
		);
	}
}

export default App;
