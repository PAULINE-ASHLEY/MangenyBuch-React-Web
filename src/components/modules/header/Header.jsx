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
      <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center">
        <div className="lg:w-[60%] xl:w-[60%] 2xl:w-[60%]">
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-x-4 justify-center items-center px-4 text-sm font-medium gap-y-4">
            <p>Tel: +254708000000</p>
            <p>Email: mangeny@gmail.com</p>
            <p>Monday-Friday : 9am-5pm</p>
            <p>Saturday-Sunday : 9am-3pm</p>
          </div>
        </div>
        <div className="lg:w-[40%] xl:w-[40%] 2xl:w-[40%]">
          <nav>
            <div className="flex items-center font-medium justify-around py-4">
              <ul className="md:flex hidden items-center gap-2 text-sm">
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
                    <div className="bg-black text-white px-4 rounded-xl font-bold text-sm">
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
