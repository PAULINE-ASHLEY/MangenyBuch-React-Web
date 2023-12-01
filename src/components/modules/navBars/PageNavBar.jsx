import { menu } from 'assets/images';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from 'features/cartSlice';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cart]);

  return (
    <nav>
      <div className="flex items-center font-semibold justify-around mx-4 md:mx-10 lg:mx-0 xl:mx-0 2xl:mx-0 my-4">
        <div className="lg:w-auto w-full flex justify-between gap-2">
          <p className="text-2xl">
            <b>Mangeny</b>
            <b className="text-[#800080]">Buch</b>
          </p>
          <div className="text-3xl lg:hidden" onClick={() => setOpen(!open)}>
            <img src={menu} alt="logo" name={`${open ? 'close' : 'menu'}`} />
          </div>
        </div>
        <ul className="lg:flex hidden items-center gap-4 text-sm">
          <li>
            <Link to="/" className="px-3 inline-block">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/Bestsellers" className="px-3 inline-block">
              BESTSELLER
            </Link>
          </li>
          <li>
            <Link to="/TopDeals" className="px-3 inline-block">
              TOP DEALS
            </Link>
          </li>
          <li>
            <Link to="/Business" className="px-3 inline-block">
              BUSINESS
            </Link>
          </li>
          <li>
            <Link to="/Novels" className="px-3 inline-block">
              NOVELS
            </Link>
          </li>
          <li>
            <Link to="/Kids" className="px-3 inline-block">
              CHILDREN
            </Link>
          </li>
          <li>
            <Link to="/Biography" className="px-3 inline-block">
              BIOGRAPHY
            </Link>
          </li>
          <li>
            <Link to="/SelfHelp" className="px-3 inline-block">
              SELF HELP
            </Link>
          </li>
          <li>
            <Link to="/Classic" className="px-3 inline-block">
              CLASSICS
            </Link>
          </li>
          <li>
            <Link to="/Comic" className="px-3 inline-block">
              COMICS
            </Link>
          </li>
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        lg:hidden bg-black text-white fixed w-full top-0 overflow-y-auto bottom-0 pb-24 pt-6 pl-4
        duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
        >
          <div className="lg:w-auto w-full flex justify-between gap-2 px-2">
            <p className="text-2xl">
              <b>Mangeny</b>
              <b className="text-[#800080]">Buch</b>
            </p>
            <div className="text-3xl lg:hidden" onClick={() => setOpen(!open)}>
              <img src={menu} alt="logo" name={`${open ? 'close' : 'menu'}`} />
            </div>
          </div>
          <li>
            <Link to="/" className="pt-6 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Bestsellers" className="py-2 px-3 inline-block">
              Bestseller
            </Link>
          </li>
          <li>
            <Link to="/TopDeals" className="py-2 px-3 inline-block">
              Top Deals
            </Link>
          </li>
          <li>
            <Link to="/Business" className="py-2 px-3 inline-block">
              Business
            </Link>
          </li>
          <li>
            <Link to="/Novels" className="py-2 px-3 inline-block">
              Novels
            </Link>
          </li>
          <li>
            <Link to="/Kids" className="py-2 px-3 inline-block">
              Children
            </Link>
          </li>
          <li>
            <Link to="/Biography" className="py-2 px-3 inline-block">
              Biography
            </Link>
          </li>
          <li>
            <Link to="/SelfHelp" className="py-2 px-3 inline-block">
              Self Help
            </Link>
          </li>
          <li>
            <Link to="/Classic" className="py-2 px-3 inline-block">
              Classics
            </Link>
          </li>
          <li>
            <Link to="/Comic" className="py-2 px-3 inline-block">
              Comics
            </Link>
          </li>
          <li>
            <Link to="/Account" className="py-2 px-3 inline-block">
              Account
            </Link>
          </li>
          <li>
            <Link to="/Cart" className="py-2 px-3 flex flex-row gap-x-2">
              Cart{' '}
              <div className="bg-[#800080] text-white px-4 rounded-xl font-bold text-sm">
                {totalQuantity}
              </div>
            </Link>
          </li>
          <li>
            <Link to="/Checkout" className="py-2 px-3 inline-block">
              Checkout
            </Link>
          </li>
          <li>
            <Link to="/SignIn" className="py-2 px-3 inline-block">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/SignUp" className="py-2 px-3 inline-block">
              Sign Up
            </Link>
          </li>
          <div className="py-5">{/* <Button /> */} </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
