import React from 'react';

export const BotHeader = () => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold leading-tight text-gray-900">
          All Issues
        </h2>
        <div className="flex items-center ml-3">
          {['purple', 'blue', 'green', 'yellow'].map((color, idx) => (
            <span
              className={`border-white rounded-full ${
                idx === 0 ? 'border-2' : 'border-4 -ml-2'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 text-${color}-900`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          ))}
        </div>
      </div>
      <div className="flex">
        <span className="inline-flex p-1 bg-gray-200 border rounded-md">
          <button className="px-2 py-1 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </button>
          <button className="px-2 py-1 bg-white rounded shadow focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
              />
            </svg>
          </button>
        </span>
        <button className="flex items-center px-3 py-2 ml-5 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-700">
          <svg
            className="w-5 h-5 -ml-1"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="ml-1">New Issue</span>
        </button>
      </div>
    </div>
  );
};
