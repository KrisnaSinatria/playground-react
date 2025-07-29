import React, { useState } from 'react';
import type { TaskFilterOptions } from '../../types';

interface TaskFilterProps {
    onFilterChange: (filter: TaskFilterOptions) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
    const [filters, setFilters] = useState<TaskFilterOptions>({
        status: '',
        priority: '',
        search: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        const updatedFilters = {
            ...filters,
            [name]: value || undefined, // kosongkan jika string kosong
        };
        setFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    return (
        <div className=' flex flex-wrap gap-4'>
            <select name="status" className='shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block p-3 dark:bg-bodyDark duration-200' value={filters.status} onChange={handleChange}>
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>

            <select name="priority" className='shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block p-3 dark:bg-bodyDark duration-200' value={filters.priority} onChange={handleChange}>
                <option value=" ">All Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <input className='w-1/3 xl:w-1/2 pr-4 pl-12 py-2.5 bg-body placeholder:text-sm rounded-md shadow-sm border-2 border-black/10 dark:bg-bgDark dark:border-white/10 duration-200 outline-none'
                type="text"
                name="search"
                placeholder="Search by title..."
                value={filters.search || ''}
                onChange={handleChange}
            />
        </div>
    );
};

export default TaskFilter;
