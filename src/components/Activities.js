import React from 'react';
const Activities = props => {
  return (
    <div>
      <p>
        ({props.number}.) {props.text}
        <button
          onClick={e => {
            props.handleDeleteSingleTask(props.text);
          }}
        >
          Remove
        </button>
      </p>
    </div>
  );
};

export default Activities;
