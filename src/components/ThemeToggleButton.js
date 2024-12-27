import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggleButton = ({ theme, onToggleTheme }) => {
  return (
    <button
      className={`
        flex items-center justify-center w-12 h-12 rounded-full 
        ${theme === 'dark' 
          ? 'bg-gray-800 text-white hover:bg-gray-700'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }
        focus:outline-none
      `}
      onClick={onToggleTheme}
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6" />
      ) : (
        <Moon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggleButton;