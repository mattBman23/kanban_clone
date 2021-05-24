import React from 'react';
import { NavLink } from './NavLink';

export const IssuesSection = () => {
  return (
    <>
      <h2 className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
        Issues
      </h2>
      <div className="mt-2 -mx-3">
        <NavLink title="All" amt={36} />
        <NavLink title="Assigned to me" amt={2} />
        <NavLink title="Created by me" amt={1} />
        <NavLink title="Archived" amt={0} />
      </div>
    </>
  );
};
