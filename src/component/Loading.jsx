import React from 'react';

const Loading = () => {
  return (
    <>
      <div className='animate-pulse space-y-4 border border-gray-500 px-4 py-3 rounded-lg bg-white'>
        <div className='rounded-full bg-slate-700 h-20 w-20 mx-auto lg:w-24 lg:h-24'></div>
        <div className='flex-1 space-y-6 py-1'>
          <div className='h-2 bg-slate-700 rounded'></div>
          <div className='space-y-3'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='h-2 bg-slate-700 rounded col-span-2'></div>
              <div className='h-2 bg-slate-700 rounded col-span-1'></div>
            </div>
            <div className='h-2 bg-slate-700 rounded'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
