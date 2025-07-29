import React from 'react';
import type { Task } from '../../types';

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onToggleStatus: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggleStatus }) => {
  return (
    <div
      style={{
        padding: '1rem',
        marginBottom: '0.5rem',
        border: '1px solid #ccc',
        backgroundColor: task.status === 'completed' ? '#d4edda' : '#fff',
      }}
    >
      <h3 style={{ textDecoration: task.status === 'completed' ? 'line-through' : 'none' }}>
        {task.title}
      </h3>
      <p>{task.description}</p>
      <p>Priority: <strong>{task.priority}</strong></p>
      <p>Status: {task.status}</p>
      <button onClick={() => onToggleStatus(task.id)}>
        Mark as {task.status === 'pending' ? 'Completed' : 'Pending'}
      </button>
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
