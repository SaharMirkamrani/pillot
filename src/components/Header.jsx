import { Disclosure, Menu, Transition } from '@headlessui/react';
import Logo from '../assets/logo.png';
import Login from './Login';
import SignUp from './SignUp';
import Hamburger from './HamburgerIcon';
import { Link } from 'react-router-dom';
import ChooseCity from './ChooseCity';

const navigation = [
  { name: 'آیتم یک', href: '/item1', current: true },
  { name: 'آیتم دو', href: '/item2', current: false },
  { name: 'آیتم سه', href: '/item3', current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow-md sticky top-0 z-50">
      {({ open }) => (
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-18">
          <div className="relative flex items-center justify-between h-20">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 focus:outline-none">
                <Hamburger />
              </Disclosure.Button>
            </div>
            {/* logo */}
            <div className="flex-auto flex items-center justify-end md:justify-start">
              <div className="hidden md:inline">
                <Link to="/">
                  <img className=" h-12 w-auto pr-5 md:h-16" src={Logo} alt="logo" />
                </Link>
              </div>
              <ChooseCity />
            </div>
            {/* menu items */}
            <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
              <div className="hidden lg:block lg:ml-6">
                <div className="flex space-x-4">
                  <div className="inline md:hidden">
                    <Link to="/">
                      <img className=" h-12 w-auto pr-5 md:h-16 text-center mx-auto" src={Logo} alt="logo" />
                    </Link>
                  </div>
                  {navigation.map(item => (
                    <Link
                      to={item.href}
                      key={item.name}
                      className={classNames(
                        item.current ? 'bg-white text-yellow' : 'text-gray-400 hover:text-gray-500',
                        'px-3 py-2 rounded-md text-md font-small'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              {/* Profile dropdown */}
              <Menu as="div" className="ml-0 relative">
                <Login />
              </Menu>
            </div>
          </div>
          {/* mobile menu */}
          <Transition
            show={open}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Disclosure.Panel className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map(item => (
                  <Link
                    to={item.href}
                    key={item.name}
                    className={classNames(
                      item.current ? 'text-yellow' : 'text-gray-400 font-regular bg-opacity-30',
                      'block px-3 py-2 rounded-md text-sm font-medium font-regular hover:text-gray-600 text-center'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};

export default Header;
