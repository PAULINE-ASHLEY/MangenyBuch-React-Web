import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { account, logo, shopping } from 'assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from 'features/cartSlice';

const NavBar = () => {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cart]);

  return (
    <>
      <div className="grid grid-cols-3">
        <div className="flex flex-row gap-x-4 items-center px-6 text-lg font-medium">
          <p>Tel: +254708000000</p>
          <p>Email: mangeny@gmail.com</p>
        </div>
        <div className="flex flex-row gap-x-4 items-center px-6 text-lg font-medium">
          <p>Monday-Friday : 9am-5pm</p>
          <p>Saturday-Sunday : 9am-3pm</p>
        </div>
        <div>
          <nav>
            <div className="flex items-center font-medium justify-around py-4">
              <ul className="md:flex hidden items-center gap-4 text-lg">
                <li>
                  <Link to="/Account" className="px-3 inline-block">
                    Account
                  </Link>
                </li>
                <li>
                  <Link to="/SignIn" className="px-3 inline-block">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/SignUp" className="px-3 inline-block">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/Cart" className="px-3 flex flex-row gap-x-2">
                    Cart{' '}
                    <div className="bg-black text-white px-4 rounded-xl font-bold text-lg">
                      {totalQuantity}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/Checkout" className="px-3 inline-block">
                    Checkout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;