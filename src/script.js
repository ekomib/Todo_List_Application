import React from 'react';
import ReactDOM from 'react-dom';

import EkomTodo from './components/EkomTodo';

ReactDOM.render(<EkomTodo />, document.getElementById('app'));

class OldSyntax {
  constructor() {
    this.name = 'Mike';
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

class NewSyntax {
  name = 'Jen';
}

const newSyntax = new NewSyntax();
console.log(newSyntax);

/*
const Ekom = () => {
  return (
    <div>
      <p>Ekom</p>
    </div>
  );
}; */

/*
const renderApp = () => {
  const template = (
    <div>
      <p>TOmatoe</p>
    </div>
  );
  ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
*/
