class EkomTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.state = {
      taskStatus: [],
    };
  }

  handleDeleteTask() {
    this.setState(() => {
      return {
        taskStatus: [],
      };
    });

    //OR

    // this.setState(()=>({taskStatus: []}))
  }

  handleUpload(option) {
    if (!option) {
      return 'Get the task Inputed, You can do it';
    } else if (this.state.taskStatus.indexOf(option) > -1) {
      return 'Task Already exists';
    }
    this.setState(() => {
      return {
        taskStatus: this.state.taskStatus.concat(option),
      };
    });
  }

  render() {
    const title = `Plan Your Day With Ekom's App`;
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
        <TaskList task={this.state.taskStatus} />
        <Activities />
        <FormInput formBtn={formBtn} handleUpload={this.handleUpload} />
      </div>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class SubTitle extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

class TaskStatus extends React.Component {
  render() {
    return (
      <div>
        <p>
          {this.props.task.length === 0
            ? 'No Task Listed Yet'
            : 'Here are your task'}
        </p>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button disabled={this.props.tom}>{this.props.actBtn}</button>
        <button onClick={this.props.clearTask}>{this.props.clearTxt}</button>
      </div>
    );
  }
}

class TaskList extends React.Component {
  render() {
    return (
      <div>
        {this.props.task.map((list, index) => (
          <Activities key={list} text={list} number={index + 1} />
        ))}
      </div>
    );
  }
}

class Activities extends React.Component {
  render() {
    return (
      <div>
        <p>
          {this.props.number} {this.props.text}
        </p>
      </div>
    );
  }
}

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleUploader = this.handleUploader.bind(this);
    this.state = {
      error: false,
    };
  }

  handleUploader(e) {
    e.preventDefault();
    let option = e.target.elements.option.value.trim();

    // option = option[0].toUpperCase() + option.slice(1).toLowerCase();

    e.target.elements.option.value = '';
    const error = this.props.handleUpload(option);

    this.setState(() => {
      return { error };
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleUploader}>
          <input type="text" name="option" />
          <button>{this.props.formBtn}</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<EkomTodo />, document.getElementById('app'));

// You can pass props into the rendered EkomTodo
// can set default props for both class and stateless components

// Header.defaultProps = {
// title: 'Ekom'
// }
