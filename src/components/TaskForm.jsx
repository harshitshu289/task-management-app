import React, { useState, useEffect } from 'react';
import { notification } from 'antd';

const TaskForm = ({ onSubmit, editingTask }) => {
  const [task, setTask] = useState({
    title: '',
    priority: 'Medium',
    dueDate: '',
    status: 'Not Completed',
  });

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    }
  }, [editingTask]);

  const openNotification = (type, message, description) => {
    notification[type]({
      message: message,
      description: description,
      placement: 'topRight',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);

    if (editingTask) {
      openNotification('success', 'Task Updated', 'The task has been updated successfully!');
    } else {
      openNotification('success', 'Task Added', 'A new task has been added successfully!');
    }

    setTask({ title: '', priority: 'Medium', dueDate: '', status: 'Not Completed' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="gap-y-4 w-[90%] md:w-[40%] lg:w-[20%] mx-auto flex flex-col"
    >
      {/* Task Title */}
      <div className="flex flex-col">
        <label htmlFor="task-title" className="mb-1 text-sm font-medium text-gray-700">
          Task Title
        </label>
        <input
          id="task-title"
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Enter task title"
          className="p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>

      {/* Task Priority */}
      <div className="flex flex-col">
        <label htmlFor="task-priority" className="mb-1 text-sm font-medium text-gray-700">
          Task Priority
        </label>
        <select
          id="task-priority"
          value={task.priority}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
          className="p-2 border border-gray-300 rounded-md w-full"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      {/* Due Date */}
      <div className="flex flex-col">
        <label htmlFor="due-date" className="mb-1 text-sm font-medium text-gray-700">
          Due Date
        </label>
        <input
          id="due-date"
          type="date"
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          className="p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>

      {/* Status */}
      <div className="flex flex-col">
  <label htmlFor="task-status" className="mb-1 text-sm font-medium text-gray-700">
    Task Status
  </label>
  <div
    id="task-status"
    className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
      task.status === 'Completed' ? 'bg-green-400' : 'bg-gray-300'
    }`}
    onClick={() =>
      setTask((prevTask) => ({
        ...prevTask,
        status: prevTask.status === 'Completed' ? 'Not Completed' : 'Completed',
      }))
    }
  >
    <div
      className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
        task.status === 'Completed' ? 'translate-x-8' : 'translate-x-0'
      }`}
    ></div>
  </div>
  <span
    className={`text-sm font-medium mt-1 ${
      task.status === 'Completed' ? 'text-green-600' : 'text-gray-500'
    }`}
  >
    {task.status === 'Completed' ? 'Completed' : 'Not Completed'}
  </span>
</div>

      {/* Submit Button */}
      <button
        type="submit"
        className="p-2 bg-yellow-400 text-black rounded-md w-[50%] mx-auto shadow-md
        hover:shadow-none hover:scale-95 transition-all duration-200 font-bold"
      >
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
