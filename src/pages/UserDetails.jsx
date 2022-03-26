import { useContext, useEffect } from 'react';
import GithubContext from '../context/github/GithubContext';

import { UserIcon } from '@heroicons/react/solid';
import { useParams } from 'react-router';

const tabs = [{ name: 'Profile', href: '#', current: true }];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const coverImageUrl =
  'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';

export default function UserDetails() {
  const { user, repos, orgs, fetchUser, fetchRepos, fetchOrgs } =
    useContext(GithubContext);

  console.log({ user });

  const { login } = useParams();
  console.log({ login });
  console.log({ repos });

  useEffect(() => {
    fetchUser(login);
    fetchRepos(login);
    fetchOrgs(login);
  }, [login]);

  let fields = {
    Username: user.login,
    Email: !user.email ? '-' : user.email,
    Followers: user.followers,
    Following: user.following,
    Location: !user.location ? '-' : user.location,
    Hireable: !user.hireable ? '-' : user.hireable,
    Twitter: !user.twitter_username ? '-' : user.twitter_username,
    Repositories: user.public_repos,
    'Opened Account': user.created_at,
  };

  // console.log(user.created_at.toLocaleDateString());

  return (
    <>
      <div className='max-w-7xl mx-auto h-full flex'>
        <div className='flex flex-col min-w-0 flex-1 overflow-hidden'>
          <div className='flex-1 relative z-0 flex overflow-hidden'>
            <main className='flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last'>
              {/* Breadcrumb */}

              <article>
                {/* Profile header */}
                <div>
                  <div>
                    <img
                      className='h-32 w-full object-cover lg:h-48'
                      src={coverImageUrl}
                      alt=''
                    />
                  </div>
                  <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
                      <div className='flex'>
                        <img
                          className='h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32'
                          src={user.avatar_url}
                          alt=''
                        />
                      </div>
                      <div className='mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
                        <div className='sm:hidden 2xl:block mt-6 min-w-0 flex-1'>
                          <h1 className='text-2xl font-bold text-gray-900 truncate'>
                            {user.name}
                          </h1>
                        </div>
                        <div className='mt-6'>
                          <a
                            href='https://github.com/thasquirrie'
                            target={`_blank`}
                            rel='noreferrer'
                            className='inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          >
                            <UserIcon
                              className='-ml-1 mr-2 h-5 w-5 text-gray-400'
                              aria-hidden='true'
                            />
                            <span>Github Profile Link</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1'>
                      <h1 className='text-2xl font-bold text-gray-900 truncate'>
                        {user.name}
                      </h1>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className='mt-6 sm:mt-2 2xl:mt-5'>
                  <div className='border-b border-gray-200'>
                    <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                      <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
                        {tabs.map((tab) => (
                          <a
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                              tab.current
                                ? 'border-indigo-500 text-gray-900'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                              'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                          >
                            {tab.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>

                {/* Description list */}
                <div className='mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                  <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                    {Object.keys(fields).map((field) => (
                      <div key={field} className='sm:col-span-1'>
                        <dt className='text-sm font-medium text-gray-500'>
                          {field}
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900'>
                          {fields[field]}
                        </dd>
                      </div>
                    ))}
                    <div className='sm:col-span-2'>
                      <dt className='text-sm font-medium text-gray-500'>
                        About
                      </dt>
                      {user.bio ? (
                        <dd
                          className='mt-1 max-w-prose text-sm text-gray-900 space-y-5'
                          dangerouslySetInnerHTML={{ __html: user.bio }}
                        />
                      ) : (
                        '-'
                      )}
                    </div>
                  </dl>
                </div>

                <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                  {repos.length !== 0 && user.public_repos > 30 ? (
                    <h2 className='mt-6 text-gray-500 text-base font-medium uppercase tracking-wide my-4'>
                      Repositories{' '}
                      <span className='text-sm'>
                        (First 30 in alphabetical order)
                      </span>
                    </h2>
                  ) : (
                    <h2 className='mt-6 text-gray-500 text-base font-medium uppercase tracking-wide my-4'>
                      Repositories{' '}
                    </h2>
                  )}
                  {repos.length !== 0 ? (
                    <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-4 '>
                      {repos.map((org, index) => (
                        <li
                          key={org.name}
                          className='col-span-1 flex shadow-sm rounded-md'
                        >
                          <div
                            className={classNames(
                              'bg-indigo-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md '
                            )}
                          >
                            {index + 1}
                          </div>
                          <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
                            <div className='flex-1 px-4 py-2 text-sm truncate'>
                              <a
                                href={org.html_url}
                                target={'_blank'}
                                rel='noreferrer'
                                className='text-gray-900 font-medium hover:text-gray-600 capitalize'
                              >
                                {org.name}
                              </a>
                              <p className='text-gray-500'>
                                {org.forks_count} Forks
                              </p>
                              {org.homepage && (
                                <a
                                  href={org.homepage}
                                  target={'_blank'}
                                  rel='noreferrer'
                                  className='text-indigo-500 truncate'
                                >
                                  Homepage
                                </a>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className='text-base font-medium'>No repository found</p>
                  )}
                </div>
                <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                  <h2 className='mt-6 text-gray-500 text-base font-medium uppercase tracking-wide my-4'>
                    Organizations
                  </h2>
                  {orgs.length !== 0 ? (
                    <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-4 '>
                      {orgs.map((org, index) => (
                        <li
                          key={org.name}
                          className='col-span-1 flex shadow-sm rounded-md'
                        >
                          <div
                            className={classNames(
                              'bg-indigo-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md '
                            )}
                          >
                            {index + 1}
                          </div>
                          <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
                            <div className='flex-1 px-4 py-2 text-sm truncate'>
                              <a
                                href={org.html_url}
                                className='text-gray-900 font-medium hover:text-gray-600 capitalize'
                              >
                                {org.name}
                              </a>
                              <p className='text-gray-500'>
                                {org.forks_count} Forks
                              </p>
                              {org.homepage && (
                                <a
                                  href={org.homepage}
                                  target={'_blank'}
                                  rel='noreferrer'
                                  className='text-indigo-500 truncate'
                                >
                                  Homepage
                                </a>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className='mb-4 text-base font-medium'>
                      No public organizations found 😭😭😭
                    </p>
                  )}
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
