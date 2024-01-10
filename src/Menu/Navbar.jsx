import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import clsx from 'clsx';
import Cookies from 'js-cookie';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <nav>
      <div className="flex justify-between px-4 py-8">
        <div className="flex gap-2 items-center order-1 sm:order-2 lg:order-1">
          <img src="image/logo512.png" width={50} alt="" />
          <p>
            <span className="font-bold text-violet-500">InpoLoker</span>
          </p>
        </div>
        <div className="sm:order-1 order-2 lg:hidden">
          <button onClick={() => setShow(!show)}>
            <img src="image/menu1.svg" alt="" />
          </button>
        </div>
        <div className="order-2 hidden lg:block pt-4 ">
          <li className="text-sm font-bold flex gap-16 ">
            <a className="hover:text-violet-500" href="/">
              Home
            </a>
            <a className="hover:text-violet-500" href="/loker">
              Loker
            </a>
            <a className="hover:text-violet-500" href="/data">
              Data
            </a>
          </li>
        </div>
        <div className="order-3 hidden sm:block">
          {!Cookies.get('token') && (
            <Link to={'/login'} className="grow bg-white hover:bg-slate-50 py-4 px-8 rounded-full text-gray-500 text-sm font-bold">
              Login
            </Link>
          )}
          {Cookies.get('token') && (
            <Link onClick={() => Cookies.remove('token')} to={'/login'} href="/login" className="grow  bg-white hover:bg-slate-50 py-4 px-8 rounded-full text-gray-500 text-sm font-bold">
              Logout
            </Link>
          )}
          {!Cookies.get('token') && (
            <Link to={'/signup'} className="grow bg-violet-500 py-4 px-8 rounded-full hover:bg-violet-600 text-white text-sm font-bold">
              Sing Up
            </Link>
          )}
          {Cookies.get('token') && (
            <Link to={'/ubahpass'} className="grow bg-violet-500 py-4 px-8 rounded-full hover:bg-violet-600 text-white text-sm font-bold">
              Ubah Password
            </Link>
          )}
        </div>
      </div>

      {show ? (
        <div className="fixed z-20 bottom-0 left-0 right-0 ">
          <ul>
            <li className="flex justify-between sm:justify-around py-3 px-4 font-semibold border-2 bg-white">
              <a className="flex flex-col items-center" href="/">
                <ion-icon name="home-outline"></ion-icon>
                <span>Home</span>
              </a>
              <a className="flex flex-col items-center" href="/loker">
                <ion-icon name="albums-outline"></ion-icon>
                <span>Loker</span>
              </a>
              <a className="flex flex-col items-center" href="/data">
                <ion-icon name="analytics-outline"></ion-icon>
                <span>Data</span>
              </a>
              <button onClick={() => setShowLogin(!showLogin)} className="flex sm:hidden flex-col items-center" href="/">
                <ion-icon name="menu-outline"></ion-icon>
                <span>More</span>
              </button>
            </li>
          </ul>
          {showLogin ? (
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2  flex gap-4 w-3/4">
              {!Cookies.get('token') && <LinkButton to={'login'}>Login</LinkButton>}
              {Cookies.get('token') && (
                <Link to={'login'} onClick={() => Cookies.remove('token')} href="\login" className="grow flex justify-center bg-white py-4 px-8 rounded-full text-gray-500 text-sm font-bold">
                  Logout
                </Link>
              )}
              {!Cookies.get('token') && (
                <Link to={'signup'} className=" grow flex justify-center bg-purple-400 py-4 px-8 rounded-full text-white text-sm font-bold">
                  Sing Up
                </Link>
              )}
              {Cookies.get('token') && (
                <Link to={'ubahpass'} className=" grow flex justify-center bg-purple-400 py-4 px-8 rounded-full text-white text-sm font-bold">
                  Ubah Password
                </Link>
              )}
            </div>
          ) : null}
        </div>
      ) : null}
    </nav>
  );
};
const LinkButton = (props) => {
  const { className, children, text } = props;
  return (
    <Link {...props} className={clsx(className, 'grow flex justify-center bg-slate-900 py-4 px-8 rounded-full text-gray-500 text-sm font-bold')}>
      {text || children}
    </Link>
  );
};
export default Navbar;
