import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const API_URL = 'http://localhost:8080/api/todos';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await axios.get(API_URL);
    setTodos(response.data);
  };

  const addTodo = async (newTodo) => {
    const response = await axios.post(API_URL, newTodo);
    setTodos([...todos, response.data]);
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = async (todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    const response = await axios.put(`${API_URL}/${todo.id}`, updatedTodo);
    setTodos(todos.map((t) => (t.id === response.data.id ? response.data : t)));
  };

  const updateTodo = async (todo) => {
    const response = await axios.put(`${API_URL}/${todo.id}`, todo);
    setTodos(todos.map((t) => (t.id === response.data.id ? response.data : t)));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h1>Simple To-Do List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleComplete}
        onUpdate={updateTodo}
      />
    </div>
  );
}

export default App;
