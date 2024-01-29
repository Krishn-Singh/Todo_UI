import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_ROUTES } from '../Constant';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');

  useEffect(() => {
    // Fetch todos from the server
    axios.get(`${API_ROUTES}/api/v1/getTodo`)
      .then(response => 
        setTodos(response.data.data)
        )
      .catch(error => console.error(error));
  }, []);

  const addTodo = () => {
    console.log('Adding Todo:', newTodoTitle, newTodoDescription);
    // Add a new todo
    axios.post(`${API_ROUTES}/api/v1/createTodo`, { title: newTodoTitle, description: newTodoDescription })
      .then(response => {
        setTodos([...todos, response.data]);
        setNewTodoTitle('');
        setNewTodoDescription('');
      })
      .catch(error => console.error(error));
  };

    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="grid grid-cols-2 gap-8 bg-white shadow-md p-6 rounded-lg w-full max-w-3xl">
      <div>
        <h1 className="text-4xl font-bold mb-6 text-center">What's your plan for today</h1>
        <div className="mb-4">
          <label className="block text-gray-800 mb-2">Title</label>
          <input
            type="text"
            className="w-full border p-3 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter the title..."
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 mb-2">Description</label>
          <textarea
            className="w-full border p-3 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter the description..."
            value={newTodoDescription}
            onChange={(e) => setNewTodoDescription(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>

      {/* Right side - Display Todos */}
      <div>
        <ul className="list-disc space-y-2">
          {todos.map(todo => (
            <li
              key={todo._id}
              className="flex flex-col bg-gray-200 p-3 rounded-md"
            >
              <span className="text-gray-800 mb-2">{todo.title}</span>
              <p className="text-gray-600 mb-4">{todo.description}</p>
              <div className="flex items-center justify-between">
                <button
                  className="text-red-500 hover:text-red-700 focus:outline-none focus:ring focus:border-red-300"
                  // Add functionality to delete todos if needed
                >
                  &#10006;
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Todos