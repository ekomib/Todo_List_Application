import React from 'react';
const TaskStatus = props => {
  return (
    <div>
      <p>
        {props.task.length === 0 ? 'No Task Listed Yet' : 'Here are your task'}
      </p>
    </div>
  );
};

export default TaskStatus;
