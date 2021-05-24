import React, { useContext } from 'react';
import { SidebarContext } from '../../context/SidebarContext';

export const NavLink = ({ title, amt = '' }) => {
  const { selectedTab, setSelectedTab } = useContext(SidebarContext);

  return (
    <a
      onClick={() => setSelectedTab(title)}
      href="#"
      className={`flex items-center justify-between px-3 py-2 hover:bg-gray-300 rounded-lg ${
        selectedTab === title && 'bg-gray-200 rounded-lg'
      }`}
    >
      <span className="text-sm font-medium text-gray-700">{title}</span>
      <span className="text-xs font-semibold text-gray-700">{amt}</span>
    </a>
  );
};
