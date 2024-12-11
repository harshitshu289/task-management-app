import React from 'react';
import { Table, Button } from 'antd';

const TaskTable = ({ tasks, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <div className="space-y-2 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row">
          <Button
            type="primary"
            className="w-full sm:w-auto"
            onClick={() => onEdit(record)}
          >
            Edit
          </Button>
          <Button
            type="danger"
            className="w-full sm:w-auto"
            onClick={() => onDelete(record.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="overflow-x-auto">
      <Table
        columns={columns}
        dataSource={tasks}
        rowKey="id"
        className="min-w-[600px]"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default TaskTable;
