let count = false;

const toggle = () => {
  count = !count;
  renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility toogle</h1>
      <button onClick={toggle}>
        {count === false ? 'Show Items' : 'Hide Items'}
      </button>
      {count && <p>This are your listed items.</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
