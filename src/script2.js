const holder = {
  name: 'Ekom',
  taskList: [],
};

const clearTask = () => {
  holder.taskList = [];
  renderApp();
  //   console.log('Task cleared');
};

const submitFunction = e => {
  e.preventDefault();

  let option = e.target.elements.option.value;
  if (option) {
    holder.taskList.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const supportChoice = () => {
  const random = Math.floor(Math.random() * holder.taskList.length);
  alert(holder.taskList[random]);
};

const renderApp = () => {
  const todoApp = (
    <div>
      <h1>Plan Your Day</h1>
      <p>Let Ekom's App support you with your daily plans</p>
      <p>
        {holder.taskList.length === 0
          ? 'No task listed yet'
          : 'These are your tasks:'}
      </p>
      <button onClick={supportChoice} disabled={holder.taskList.length === 0}>
        What should I do
      </button>
      <button onClick={clearTask}>Clear all task</button>
      <ol>
        {holder.taskList.map((task, index) => {
          return <li key={index + 1}>{task}</li>;
        })}
      </ol>
      <form onSubmit={submitFunction}>
        <input type="text" name="option" />
        <button>Add task</button>
      </form>
    </div>
  );

  ReactDOM.render(todoApp, applicationRoot);
};

const applicationRoot = document.getElementById('app');

renderApp();
po;
