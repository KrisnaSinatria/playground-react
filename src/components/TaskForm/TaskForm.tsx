import React, { useState } from 'react';
import type { TaskFormData } from '../../types';

interface TaskFormProps {
  onSubmit: (formData: TaskFormData) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
    priority: 'low',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData({ title: '', description: '', priority: 'medium' }); // reset
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 dark:bg-bgDark'>
      <div>
        <label className='font-semibold text-base mb-2 block'>Title:</label>
        <input className='text-sm p-3 rounded-md w-full border-[1.5px] font-medium border-black/10 dark:border-white/10' placeholder="Masukkan Judul"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
      </div>

      <div>
        <label className='font-semibold text-base mb-2 block'>Description:</label>
        <textarea className='text-sm p-3 rounded-md w-full border-[1.5px] font-medium border-black/10 dark:border-white/10' placeholder="Masukkan Deskripsi"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
      </div>

      <div>
        <label className='font-semibold text-base mb-2 block'>Priority:</label>
        <select name="priority" className='shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 dark:bg-bodyDark duration-200' value={formData.priority} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <button type="submit"
        className="mt-10 text-white bg-primary hover:bg-primary  focus:outline-none focus:ring-fourth font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-fourth">Tambah
      </button>
    </form>
  );
};

export default TaskForm;
