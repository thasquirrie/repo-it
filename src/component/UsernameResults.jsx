import { useContext } from 'react';
import Loading from './Loading';
// import UserItem from './UserItem';
import GithubContext from '../context/github/GithubContext';
// import { Link } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/solid';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export default function UsernameResults() {
  const { users, loading, clearData } = useContext(GithubContext);

  const newArray = new Array(6).fill(0);

  // const clearHandler = () => {};

  return (
    <div
      className={classNames(
        users.length === 0 && !loading ? 'hidden' : 'block',
        `bg-white`
      )}
    >
      <div className='max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-8 sm:space-y-12'>
          <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              Github users
            </h2>
          </div>
          {loading ? (
            <div className='mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:gridcols4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6'>
              {newArray.map((arr, index) => (
                <Loading key={index} />
              ))}
            </div>
          ) : (
            <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '>
              {users.map((user) => (
                <li
                  key={user.login}
                  className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow hover:shadow-xl divide-y divide-gray-200 '
                >
                  <div className='flex-1 flex flex-col p-8'>
                    <img
                      className='w-32 h-32 flex-shrink-0 mx-auto rounded-full'
                      src={user.avatar_url}
                      alt=''
                    />
                    <h3 className='mt-6 text-gray-900 text-sm font-medium capitalize'>
                      {user.login}
                    </h3>
                    <dl className='mt-1 flex-grow flex flex-col justify-between'>
                      <dt className='sr-only'>Role</dt>
                      <dd className='mt-3'>
                        <span className='px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                          {user.type}
                        </span>
                      </dd>
                    </dl>
                  </div>
                  <div>
                    <div className='-mt-px flex'>
                      <div className='-ml-px w-0 flex-1 flex'>
                        <a
                          href={`/user/${user.login}`}
                          className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
                        >
                          <UserIcon
                            className='w-5 h-5 text-gray-400'
                            aria-hidden='true'
                          />
                          <span className='ml-3'>Details</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div>
            <button
              className='bg-indigo-500 text-white px-3 py-2 rounded-lg w-1/4 shadow-xl shadow-indigo-500/70 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-lg active:shadow-indigo-500/60'
              onClick={clearData}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
