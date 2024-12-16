// Widget.js
import React from 'react';
import Header from './Header'; // Import Header component

function Widget() {
  return (
    <div className="bg-background text-primary-foreground min-h-screen p-8">
      <Header /> {/* Use the Header component here */}
      
      <section className="mb-8">
        <div className="flex flex-wrap space-x-2 mb-4">
          <span className="rounded-full bg-gradient-to-r from-teal-400 to-green-500 text-white p-2 cursor-pointer">
            All
          </span>
          <span className="rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white p-2 cursor-pointer">
            Fiction
          </span>
          <span className="rounded-full bg-gradient-to-r from-yellow-400 to-red-500 text-white p-2 cursor-pointer">
            Non-fiction
          </span>
          <span className="rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-2 cursor-pointer">
            Thriller
          </span>
          <span className="rounded-full bg-gradient-to-r from-red-400 to-orange-500 text-white p-2 cursor-pointer">
            Fantasy
          </span>
          <span className="rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white p-2 cursor-pointer">
            Romance
          </span>
          <span className="rounded-full bg-gradient-to-r from-teal-400 to-green-500 text-white p-2 cursor-pointer">
            Historical
          </span>
          <span className="rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 text-white p-2 cursor-pointer">
            Biography
          </span>
          <span className="rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-2 cursor-pointer">
            Science
          </span>
          <span className="rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white p-2 cursor-pointer">
            Travel
          </span>
        </div>
        <div className="flex items-center bg-zinc-800 rounded p-2 mb-4">
          <img
            src="https://openui.fly.dev/openui/16x16.svg?text=🔍"
            alt="Search Icon"
            className="w-4 h-4 mr-2 text-accent"
          />
          <input
            type="text"
            placeholder="Search books"
            className="w-full rounded border-none focus:outline-none bg-zinc-700 text-white p-2"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200">
            <img
              src="https://openui.fly.dev/openui/300x400.svg?text=Book"
              alt="Book Cover"
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="text-lg font-bold text-white">Book Title</h3>
            <p className="text-sm text-zinc-200">Author Name</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-accent">Book Details</h2>
        <div className="bg-zinc-900 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold text-accent">Book Title</h3>
          <p className="text-sm text-zinc-400">Author Name</p>
          <p className="text-sm text-zinc-400">Genre</p>
          <p className="text-sm text-zinc-400">Pages</p>
          <p className="text-sm text-zinc-400">Published Date</p>
          <div className="mt-4">
            <button className="bg-accent text-accent-foreground p-2 rounded-lg mr-2 hover:bg-accent/80 transition duration-300">
              Edit
            </button>
            <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-400 transition duration-300">
              Delete
            </button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-accent">Book Management</h2>
        <form className="bg-zinc-900 p-4 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Book Title"
            className="w-full p-2 mb-4 rounded border focus:outline-none bg-zinc-800 text-white"
          />
          <input
            type="text"
            placeholder="Author Name"
            className="w-full p-2 mb-4 rounded border focus:outline-none bg-zinc-800 text-white"
          />
          <input
            type="text"
            placeholder="Genre"
            className="w-full p-2 mb-4 rounded border focus:outline-none bg-zinc-800 text-white"
          />
          <input
            type="number"
            placeholder="Pages"
            className="w-full p-2 mb-4 rounded border focus:outline-none bg-zinc-800 text-white"
          />
          <input
            type="date"
            className="w-full p-2 mb-4 rounded border focus:outline-none bg-zinc-800 text-white"
          />
          <button type="submit" className="bg-accent text-accent-foreground p-2 rounded-lg hover:bg-accent/80 transition duration-300">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default Widget;
