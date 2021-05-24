import React from 'react';
import { NavLink } from './NavLink';

export const TagsSection = () => {
  return (
    <>
      <h2 className="mt-8 text-xs font-semibold tracking-wide text-gray-700 uppercase">
        Tags
      </h2>
      <div className="mt-2 -mx-3">
        <NavLink title="Bug" />
        <NavLink title="Feature Request" />
        <NavLink title="Marketing" />
      </div>
    </>
  );
};
