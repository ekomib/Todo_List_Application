import React from 'react';

const Action = props => {
  return (
    <div>
      <button disabled={props.tom}>{props.actBtn}</button>
      <button onClick={props.clearTask}>{props.clearTxt}</button>
    </div>
  );
};

export default Action;
