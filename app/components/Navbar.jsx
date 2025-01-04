import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 h-24">
      <div className="h-24 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <a href="/">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              Harry Potter Quiz
            </h2>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;