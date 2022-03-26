import { useContext } from 'react';
import Loading from './Loading';
import UserItem from './UserItem';
import GithubContext from '../context/github/GithubContext';
import { Link } from 'react-router-dom';

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
            <ul className='mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6'>
              {users.map((user) => (
                <li key={user.login}>
                  <Link to={`/user/${user.login}`}>
                    <UserItem user={user} />
                  </Link>
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
