**Task Management App**

A simple task management application built with Vite, React.js, Tailwind CSS, Ant Design, and a JSON server. This app allows users to create, edit, delete, and manage tasks with a focus on responsiveness and user feedback.

Features
*Add, Edit, Delete Tasks: Fully functional CRUD operations.
*Responsive Design: Optimized for mobile and desktop using Tailwind CSS.
*Real-Time Notifications: Ant Design's notification system provides instant feedback.
*Task Prioritization: Manage tasks with priorities (Low, Medium, High).
*Status Toggle: Switch task status between "Completed" and "Not Completed".
*Integration with JSON Server: A mock backend for seamless API operations.


Steps to set up and run the app locally
1. Clone the Repository
   $ git clone <repository-url>
   $ cd task-management-app
2. Install Dependencies using npm install
3.  Set Up JSON Server
Make sure the db.json file exists in the root directory and contains the initial task data. Start the JSON server on port 3001
$ npx json-server --watch db.json --port 3001
4. Configure API URL
In the src/api/axios.js file, ensure the base URL is set to your JSON server:
5. Start the Frontend
Run the Vite development server: $ npm run dev


Design Choices
Frontend Framework:

1. Vite was chosen for its fast build times and optimized development experience.
React.js provides component-based architecture and state management.
Styling:

2. Tailwind CSS ensures responsive design with minimal effort.
Ant Design components enhance UI consistency and user experience.
Backend:

3. JSON Server is a lightweight mock server for quick API prototyping.
Task Status Toggle:

4. A toggle switch improves user interaction and accessibility.


Assumptions
*Tasks are associated with a mock user (userId: 1).
*Initial task data is loaded from the db.json file.
*API operations assume a consistent schema for tasks (e.g., title, priority, dueDate, status).

Future Enhancements
*Authentication and user management.
*Advanced filtering and sorting options for tasks.
*Persistent state using a database like MongoDB or PostgreSQL.
*Testing and CI/CD integration.

