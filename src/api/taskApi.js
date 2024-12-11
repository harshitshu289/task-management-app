import axiosInstance from './axios'; // Assuming axios instance is created correctly

// Fetch all tasks
export const getTasks = () => {
  return axiosInstance.get('/tasks'); // Fetch all tasks from the /tasks endpoint
};

// Add a new task
export const createTask = (task) => {
  return axiosInstance.post('/tasks', task); // Send POST request to /tasks to add a new task
};

// Update a task
export const updateTask = (id, task) => {
  return axiosInstance.put(`/tasks/${id}`, task); // Send PUT request to /tasks/:id to update the task
};

// Delete a task
export const deleteTask = (id) => {
  return axiosInstance.delete(`/tasks/${id}`); // Send DELETE request to /tasks/:id to delete the task
};
