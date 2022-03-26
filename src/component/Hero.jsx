import { ChevronRightIcon } from '@heroicons/react/solid';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export default function Hero() {
  const [text, setText] = useState('');

  const { users, loading, fetchData } = useContext(GithubContext);

  const changeHandler = (e) => setText(e.target.value);
  const submitHandler = (e) => {
    e.preventDefault();

    fetchData(text);
    console.log(text);
  };
  return (
    <div className='relative overflow-hidden'>
      <main>
        <div
          className={classNames(
            users.length === 0 && !loading && 'h-screen',
            `pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden`
          )}
        >
          <div className='mx-auto max-w-7xl lg:px-8'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
              <div className='mx-auto max-w-md px-4 pb-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                <div className='lg:py-24'>
                  <Link
                    to='#'
                    className='inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200'
                  >
                    <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full'>
                      Want to see more?
                    </span>
                    <span className='ml-4 text-sm'>Portfolio site soon.</span>
                    <ChevronRightIcon
                      className='ml-2 w-5 h-5 text-gray-500'
                      aria-hidden='true'
                    />
                  </Link>
                  <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                    <span className='block'>Faster way to search</span>
                    <span className='block text-indigo-400'>
                      for github repos
                    </span>
                  </h1>
                  <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat.
                  </p>
                  <div className='mt-10 sm:mt-12'>
                    <form
                      onSubmit={submitHandler}
                      className='sm:max-w-xl sm:mx-auto lg:mx-0'
                    >
                      <div className='sm:flex'>
                        <div className='min-w-0 flex-1'>
                          <label htmlFor='username' className='sr-only'>
                            Username
                          </label>
                          <input
                            id='username'
                            type='text'
                            value={text}
                            onChange={changeHandler}
                            placeholder='Enter a github username'
                            className='block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900'
                          />
                        </div>
                        <div className='mt-3 sm:mt-0 sm:ml-3'>
                          <button
                            type='submit'
                            className='block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900'
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className='hidden mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:block lg:relative'>
                <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                    src='https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
