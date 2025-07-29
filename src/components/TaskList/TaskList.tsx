import React from 'react';
import type { Task } from '../../types';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggleStatus: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggleStatus }) => {
  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  );
};

export default TaskList;
