import React from 'react';

function Loading ({title = "Search Books"})  {
  return (
    <div className='w-full'>
        <h1 className='text-7xl font-semibold text-center p-20'>{title}</h1>
    </div>
  );
};

export default Loading;
