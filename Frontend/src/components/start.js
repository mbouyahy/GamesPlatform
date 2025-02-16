import React, { useState } from 'react';
import { Search }  from './search.js';

import Create from './create.js';

export const Start = () => {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
        {isEditing ? (
          <Create />
        ) : (
          <Search />
        )}
      </div>
    </div>
  );
};