import React from 'react';

import FormInput from './FormInput';
import Action from './Action';
import TaskList from './TaskList';
import TaskStatus from './TaskStatus';
import SubTitle from './Subtitle';
import Title from './Title';

export default class EkomTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleDeleteSingleTask = this.handleDeleteSingleTask.bind(this);
    this.state = {
      taskStatus: [],
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ taskStatus: options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.taskStatus.length !== this.state.taskStatus.length) {
      const json = JSON.stringify(this.state.taskStatus);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('Mount3');
  }

  handleDeleteTask() {
    this.setState(() => ({ taskStatus: [] }));

    //OR

    // this.setState(() => {
    //   return {
    //     taskStatus: [],
    //   };
    // });
  }

  handleDeleteSingleTask(optionToRemove) {
    this.setState(prevState => ({
      taskStatus: prevState.taskStatus.filter(
        option => optionToRemove !== option
      ),
    }));

    // this.setState(prevState => ({
    //   taskStatus: prevState.taskStatus.filter(option => {
    //     return optionToRemove !== option;
    //   }),
    // }));
  }

  handleUpload(option) {
    if (!option) {
      return 'Get the task Inputed, You can do it';
    } else if (this.state.taskStatus.indexOf(option) > -1) {
      return 'Task Already exists';
    }

    this.setState(prevState => ({
      taskStatus: prevState.taskStatus.concat(option),
    }));
    //OR <=> both will give you same results, irrespective of prevState parameter passed into the
    // this.setState(() => {
    //   return {
    //     taskStatus: this.state.taskStatus.concat(option),
    //   };
    // });
  }

  render() {
    const title = `Plan YouDay With Ekom's App`;
    const subtitle = `Let Ekom's App Support You With Your Daily Plan`;
    const actBtn = 'What Should I do?';
    const clearTxt = 'Clear All Task';
    const formBtn = 'Add Task';

    return (
      <div>
        <Title title={title}></Title>
        <SubTitle subtitle={subtitle}></SubTitle>
        <TaskStatus task={this.state.taskStatus}></TaskStatus>
        <Action
          actBtn={actBtn}
          clearTxt={clearTxt}
          tom={this.state.taskStatus < 1}
          clearTask={this.handleDeleteTask}
        />
        <TaskList
          task={this.state.taskStatus}
          handleDeleteSingleTask={this.handleDeleteSingleTask}
        />
        {/* <Activities />  */}
        <FormInput formBtn={formBtn} handleUpload={this.handleUpload} />
      </div>
    );
  }
}
