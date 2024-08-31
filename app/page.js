"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]); // State to store tasks

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddClick = () => {
    if (title.trim() && description.trim()) {
      setTasks([...tasks, { title, description }]);
      setTitle("");
      setDescription("");
    } else {
      alert("Please fill in both fields.");
    }
  };

  const handleDeleteClick = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="p-4">
      <nav className="bg-blue-500 text-white p-4 shadow-md rounded">
        <h1 className="text-2xl font-bold text-center">To-Do List</h1>
      </nav>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          className="p-2 w-full sm:w-1/3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-600"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
          className="p-2 w-full sm:w-1/3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-600"
        />
        <button
          onClick={handleAddClick}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
        >
          Add
        </button>
      </div>

      <div className="mt-6">
        {tasks.length > 0 ? (
          <ul className="space-y-4">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-4 bg-gray-100 rounded shadow"
              >
                <div>
                  <h3 className="font-bold">{task.title}</h3>
                  <p className="text-gray-600">{task.description}</p>
                </div>
                <button
                  onClick={() => handleDeleteClick(index)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No tasks added yet.</p>
        )}
      </div>
    </div>
  );
};

export default page;
