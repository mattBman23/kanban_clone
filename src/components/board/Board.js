import React from 'react';

export const Board = () => {
  return (
    <div>
      <main className="flex p-3">
        {['purple', 'green', 'red', 'blue'].map((color, idx) => (
          <div
            className={`flex-shrink-0 p-3 bg-gray-100 rounded-md w-80 ${
              idx !== 0 && 'ml-3'
            }`}
          >
            <h3 className="text-sm font-medium text-gray-900">Backlog</h3>
            <ul className="mt-2">
              {['21', '23', '25', '27'].map((num) => (
                <li className="mt-3">
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium leading-snug text-gray-900">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-5 h-5 text-${color}-900`}
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
                    </div>
                    <div className="flex items-baseline justify-between">
                      <div className="text-sm font-semibold text-gray-600">
                        <time dateTime={`2020-07-${num}`}>Jul {num}</time>
                      </div>
                      <div className="mt-2">
                        <span className="inline-flex items-center px-1 py-1 leading-tight bg-green-100 rounded">
                          <svg
                            className="w-2 h-2 text-green-500"
                            viewBox="0 0 8 8"
                            fill="currentColor"
                          >
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-green-500">
                            Feature Request
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
};
