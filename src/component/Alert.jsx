/* This example requires Tailwind CSS v2.0+ */
import { ExclamationIcon } from '@heroicons/react/solid';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
export default function Alert({ msg, type }) {
  return (
    <div
      className={classNames(
        type === 'error' && 'bg-red-400',
        ' border-l-4 border-red-900 px-4 py-3 mb-2 rounded-lg'
      )}
    >
      <div className='flex'>
        <div className='flex-shrink-0'>
          {type === 'error' && (
            <ExclamationIcon
              className='pt-1 h-6 w-6 text-white'
              aria-hidden='true'
            />
          )}
        </div>
        <div className='ml-3'>
          <p className='text-base text-white font-bold '>{msg}</p>
        </div>
      </div>
    </div>
  );
}
