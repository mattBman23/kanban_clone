import { createContext, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState('All');

  return (
    <SidebarContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </SidebarContext.Provider>
  );
};
