import React from 'react';

const UserItem = ({ user }) => {
  return (
    <div className='space-y-4 border border-white px-4 py-3 rounded-lg bg-white  shadow-black/50 hover:shadow-lg hover:shadow-black/50 shadow-inner hover:transition hover:duration-700 hover:ease-in-out'>
      <img
        className='mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24'
        src={user.avatar_url}
        alt=''
      />
      <div className='space-y-2'>
        <div className='text-xs font-medium lg:text-sm'>
          <h3 className='capitalize'>{user.login}</h3>
          <p className='text-indigo-600 truncate'>
            {user.url.replace('api', 'www')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
