import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onToggle, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(todo.task);
  const [editDate, setEditDate] = useState(todo.dueDate || '');
  const [editPriority, setEditPriority] = useState(todo.priority || 'Low');

  const handleUpdate = () => {
    onUpdate({
      ...todo,
      task: editTask,
      dueDate: editDate,
      priority: editPriority,
    });
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo)}
        style={{ marginRight: '10px' }}
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
          />
          <input
            type="date"
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
          <select
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span className={todo.completed ? 'completed' : ''} style={{ flexGrow: 1 }}>
            {todo.task}
            <div style={{ fontSize: '12px', color: '#555' }}>
              Due: {todo.dueDate || 'N/A'} | 
              <span className={`priority ${todo.priority?.toLowerCase()}`}>
                {todo.priority}
              </span>
            </div>
          </span>
          <div className="todo-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
