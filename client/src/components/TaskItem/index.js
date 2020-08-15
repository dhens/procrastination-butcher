import React from 'react';
import './index.css';

function TaskItem(props) {
    return (
        <li>
            <h1 className="taskItemTitle">{props.title}</h1>
            <ul>
               {props.taskProgress}
            </ul>
        </li>
    )
}

export default TaskItem;