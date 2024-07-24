import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const TaskColumn = ({ column }) => (
    <div className="task-column">
        <h2>{column.title}</h2>
        <Droppable droppableId={column.id}>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                    {column.tasks.map((task, index) => (
                        <TaskCard key={task.id} task={task} index={index} />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </div>
);

export default TaskColumn;
