import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="flex items-center font-medium justify-around py-4">
        <div>
          <p className="text-2xl">
            <b>Mangeny</b>
            <b className="text-[#800080]">Buch</b>
          </p>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-4 text-sm">
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
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="py-7 px-3 inline-block">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Food" className="py-7 px-3 inline-block">
              Food
            </Link>
          </li>
          <li>
            <Link to="/Drink" className="py-7 px-3 inline-block">
              Drink
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
          <div className="py-5">{/* <Button /> */} </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
