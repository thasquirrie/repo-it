import { Popover } from '@headlessui/react';

import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const navigation = [{ name: 'About', href: '/about' }];

const Header = ({ title }) => {
  return (
    <div>
      <Popover as='header' className='relative'>
        <div className='bg-gray-900 py-6'>
          <nav
            className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
            aria-label='Global'
          >
            <div className='flex items-center flex-1'>
              <div className='flex items-center justify-between w-full md:w-auto'>
                <NavLink to='/'>
                  <span className='sr-only'>Workflow</span>
                  <p className='h-8 w-auto sm:h-10 text-white text-3xl font-serif'>
                    RepoIt
                  </p>
                </NavLink>
              </div>
            </div>
            <div className=' space-x-8 md:flex md:ml-10'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className='text-base font-medium text-white hover:text-gray-300'
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </Popover>
    </div>
  );
};

Header.defaultProps = {
  title: 'Repo Finder',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
