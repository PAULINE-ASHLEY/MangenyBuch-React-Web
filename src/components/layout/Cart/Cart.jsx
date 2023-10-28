import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from 'features/cartSlice';
import { Link } from 'react-router-dom';
import { trash } from 'assets/images';

const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cart]);

  return (
    <>
      <div className="flex mt-10">
        <div className="px-4 w-[70%]">
          <h2 className="text-base bg-[#800080] text-white px-4 py-2">
            {cart.length} Books In The Basket
          </h2>
          {cart?.map((data) => (
            <div className="grid grid-cols-4 items-center py-4 mt-6 px-10">
              <div>
                <img src={data.image} width={80} alt={data.image} />
                <p className="text-base text-black font-semibold pt-4">
                  {data.title}
                </p>
                <p className="text-base text-gray-500 font-semibold pt-4">
                  by {data.author}
                </p>
              </div>

              <div className="flex flex-row gap-x-6 items-center justify-center">
                <button
                  type="button"
                  className="px-4 py-2 text-sm bg-black rounded-xl text-white font-semibold hover:bg-[#800080]"
                  onClick={() => dispatch(decreaseItemQuantity(data.id))}
                >
                  -
                </button>

                <div className="items-center">
                  <p className="text-base font-semibold" onChange={() => null}>
                    {data.quantity}
                  </p>
                </div>

                <button
                  className="px-4 py-2 text-sm bg-black rounded-xl text-white font-semibold hover:bg-[#800080]"
                  onClick={() => dispatch(increaseItemQuantity(data.id))}
                >
                  +
                </button>
              </div>

              <div>
                <p className="text-center text-base font-bold text-[#800080] items-center justify-center">
                  Kshs. {data.price}
                </p>
              </div>

              <div className="items-center justify-center">
                <button
                  type="button"
                  className="px-4 py-2 text-sm bg-black rounded-xl text-white font-semibold hover:bg-[#800080]"
                  onClick={() => dispatch(removeItem(data.id))}
                >
                  <img src={trash} alt={trash} />
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Summary Section */}
        <div className="px-6 w-[30%]">
          <div className="text-base bg-[#800080] text-white px-4 py-2">
            <h2>Summary Of The Books Bought</h2>
          </div>
          <div className="px-6">
            <div>
              <div className="flex flex-row gap-x-6 items-center py-4 mt-6">
                <p className="text-base text-black font-semibold">
                  Total Quantity :{' '}
                </p>
                <p className="text-base text-black font-bold">
                  {totalQuantity} Books
                </p>
              </div>

              <div className="flex flex-row gap-x-6 items-center py-4">
                <p className="text-base text-black font-semibold">
                  Total Amount :{' '}
                </p>
                <p className="text-base text-black font-bold">
                  KSHS. {totalPrice}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="px-4 py-3 text-sm bg-black rounded-xl text-white mt-4 font-semibold hover:bg-[#800080]"
            >
              <Link to="/Checkout">Proceed To Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
