import { useState } from 'react';
import type { Task, TaskFormData, TaskFilterOptions } from '../../types';
import TaskForm from '../TaskForm/TaskForm';
import TaskFilter from '../TaskFilter/TaskFilter';

import { useTheme } from "../../Utils/theming";
import { useSidebar } from '../../Utils/theming';
import { Bars3Icon } from '@heroicons/react/24/solid'

const Dashboard = () => {

    const { theme, toggleTheme } = useTheme();
    useSidebar();

    const [showForm, setShowForm] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<TaskFilterOptions>({});
    const [nextId, setNextId] = useState<number>(1);

    const handleAddTask = (formData: TaskFormData) => {
        const newTask: Task = {
            id: nextId,
            title: formData.title,
            description: formData.description,
            status: 'pending',
            priority: formData.priority,
            createdAt: new Date(),
        };
        setTasks((prev) => [...prev, newTask]);
        setNextId((prev) => prev + 1);
    };

    const handleDeleteTask = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const handleToggleStatus = (id: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' }
                    : task
            )
        );
    };

    const handleFilterChange = (newFilter: TaskFilterOptions) => {
        setFilter(newFilter);
    };

    const filteredTasks = tasks.filter((task) => {
        const matchStatus = filter.status ? task.status === filter.status : true;
        const matchPriority = filter.priority ? task.priority === filter.priority : true;
        const matchSearch = filter.search
            ? task.title.toLowerCase().includes(filter.search.toLowerCase())
            : true;

        return matchStatus && matchPriority && matchSearch;
    });

    return (
        <>
            <main className="w-full xl:w-[calc(100%-240px)] bg-body dark:bg-bodyDark dark:text-white xl:ml-60 main duration-200">
                <div className="py-4 px-6 bg-white flex items-center justify-between sticky top-0 left-0 z-30 border-b-2 border-black/10 dark:bg-bgDark dark:border-white/10 duration-200">
                    <div className="flex items-center gap-4">
                        <button type="button" className="text-lg sidebar-toggle">
                            <Bars3Icon className="w-5 cursor-pointer" />
                        </button>
                        <h1 className="text-xl font-semibold line-clamp-1">List tugas</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={toggleTheme} className="dark-mode-toggle cursor-pointer hidden xl:block focus:outline-none">
                            {theme === 'dark' ? (
                                <img src="/img/white_toggle-flowkas.svg" alt="Dark Mode" className="w-7 lg:w-9 2xl:w-11" />
                            ) : (
                                <img src="/img/dark_toggle-flowkas.svg" alt="Light Mode" className="w-7 lg:w-9 2xl:w-11" />
                            )}
                        </button>
                        <TaskFilter onFilterChange={handleFilterChange} />
                    </div>
                </div>

                <div className="p-4 xl:p-6">
                    <div className="bg-white p-4 xl:px-6 rounded-lg border-2 border-black/10 dark:bg-bgDark dark:border-white/10 duration-200">
                        <div className="flex justify-between mt-4 xl:mt-6 items-center mb-1 xl:mb-2">
                            <h2 className="font-semibold text-base xl:text-lg text-nowrap">Data Tugas</h2>
                            <button
                                onClick={() => setShowForm(true)}
                                className="cursor-pointer font-medium text-xs xl:text-sm tracking-wide block bg-primary rounded-sm text-white px-2 xl:px-4 py-2.5"
                            >
                                Buat Tugas Baru
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="table-auto w-full text-left mt-6">
                                <thead className="border-b-2 border-black/10 dark:border-white/10">
                                    <tr>
                                        <th className="py-3 text-sm font-semibold">No</th>
                                        <th className="py-3 text-sm font-semibold">Judul</th>
                                        <th className="py-3 text-sm font-semibold">Deskripsi</th>
                                        <th className="py-3 text-sm font-semibold">Status</th>
                                        <th className="py-3 text-sm font-semibold">Prioritas</th>
                                        <th className="py-3 text-sm font-semibold">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredTasks.map((task, index) => (
                                        <tr key={task.id} className="border-b border-gray-200 dark:border-white/10">
                                            <td className="py-2">{index + 1}</td>
                                            <td className="py-2">{task.title}</td>
                                            <td className="py-2">{task.description}</td>
                                            <td className="py-2">{task.status}</td>
                                            <td className="py-2">{task.priority}</td>
                                            <td className="py-2 flex gap-2">
                                                <button onClick={() => handleToggleStatus(task.id)} className="text-blue-500">Toggle</button>
                                                <button onClick={() => handleDeleteTask(task.id)} className="text-red-500">Hapus</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
            {showForm && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 ">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative border-2 border-black/10 dark:bg-bgDark dark:border-white/10 duration-200">
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                        >
                            x
                        </button>
                        <h3 className="text-lg font-semibold mb-4">Tambah Tugas</h3>
                        <TaskForm onSubmit={handleAddTask} />
                        {/* <TaskForm
                            onAddTask={(task) => {
                                onAddTask(task);
                                setShowForm(false);
                            }}
                        /> */}
                    </div>
                </div>
            )}
        </>

    );
};

export default Dashboard;
