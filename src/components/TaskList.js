import React from 'react';
import Activities from './Activities.js';

const TaskList = props => {
  return (
    <div>
      {props.task.map((list, index) => (
        <Activities
          key={list}
          text={list}
          number={index + 1}
          handleDeleteSingleTask={props.handleDeleteSingleTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
