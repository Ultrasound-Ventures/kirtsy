// src/components/Navbar.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-[#0F172A] text-white fixed top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex-1">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Kirsty" className="h-8 w-auto" />
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/workouts" className="text-gray-300 hover:text-white transition-colors">
            Workouts
          </Link>
          <Link to="/exercises" className="text-gray-300 hover:text-white transition-colors">
            Exercises
          </Link>
          <Link to="/progress" className="text-gray-300 hover:text-white transition-colors">
            Progress
          </Link>
          <button className="bg-[#F87171] hover:bg-[#EF4444] text-white px-6 py-2 rounded-md transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-gray-300 hover:text-white"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0F172A] border-t border-gray-800 md:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              <Link 
                to="/workouts" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Workouts
              </Link>
              <Link 
                to="/exercises" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Exercises
              </Link>
              <Link 
                to="/progress" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Progress
              </Link>
              <button className="bg-[#F87171] hover:bg-[#EF4444] text-white px-6 py-2 rounded-md w-full transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;