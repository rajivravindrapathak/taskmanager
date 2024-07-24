import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskColumn from './TaskColumn';
import { DragDropContext } from 'react-beautiful-dnd';

const TaskBoard = () => {
    const [columns, setColumns] = useState([]);

    const fetchTasks = async () => {
        const response = await axios.get('/api/tasks');
        setColumns(response.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;
        // Handle drag and drop logic
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="task-board">
                {columns.map((column) => (
                    <TaskColumn key={column.id} column={column} />
                ))}
            </div>
        </DragDropContext>
    );
};

export default TaskBoard;
