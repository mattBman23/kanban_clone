import React from 'react';
import { BotHeader } from './BotHeader';
import { TopHeader } from './TopHeader';

export const HeaderComp = () => {
  return (
    <header className="px-6">
      <TopHeader />
      <BotHeader />
    </header>
  );
};
