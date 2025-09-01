import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onToggle, onUpdate }) => {
  const [filter, setFilter] = useState('ALL');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'ALL') return true;
    if (filter === 'COMPLETED') return todo.completed;
    if (filter === 'INCOMPLETE') return !todo.completed;
    return true;
  });

  return (
    <>
      <div style={{ marginBottom: '15px' }}>
        <button onClick={() => setFilter('ALL')}>All</button>
        <button onClick={() => setFilter('COMPLETED')} style={{ marginLeft: '5px' }}>
          Completed
        </button>
        <button onClick={() => setFilter('INCOMPLETE')} style={{ marginLeft: '5px' }}>
          Incomplete
        </button>
      </div>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </>
  );
};

export default TodoList;
