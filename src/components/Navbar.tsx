import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="https://freudix.tv/wp-content/uploads/2024/11/logofreudix.png.webp" 
                alt="Freudix Logo" 
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;