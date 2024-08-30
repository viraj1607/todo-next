"use client"
import React, { useState } from 'react';

const page = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddClick = () => {
    console.log('Title:', title);
    console.log('Description:', description);
    setTitle("")
    setDescription("")
    // Add functionality to add the todo item here
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
    </div>
  );
};

export default page;
