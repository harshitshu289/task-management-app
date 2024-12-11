import React, { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from './api/taskApi';
import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks();
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleAddOrUpdateTask = async (task) => {
    if (editingTask) {
      try {
        const response = await updateTask(editingTask.id, task);
        setTasks((prevTasks) =>
          prevTasks.map((t) => (t.id === editingTask.id ? response.data : t))
        );
        setEditingTask(null);
      } catch (error) {
        console.error('Error updating task:', error);
      }
    } else {
      try {
        const response = await createTask(task);
        setTasks([...tasks, response.data]);
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Task Management App</h1>

      <TaskForm onSubmit={handleAddOrUpdateTask} editingTask={editingTask} />

      <div className="mt-6">
        <TaskTable tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
      </div>
    </div>
  );
};

export default App;
