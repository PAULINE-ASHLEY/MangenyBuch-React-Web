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
          <h2 className="text-2xl bg-[#800080] text-white px-4 py-2">
            {cart.length} Books In Cart
          </h2>
          {cart?.map((data) => (
            <div className="grid grid-cols-4 items-center py-4 mt-6 px-10">
              <div>
                <img src={data.image} width={120} alt={data.image} />
                <p className="text-xl text-black font-semibold pt-4">
                  {data.title}
                </p>
                <p className="text-xl text-gray-500 font-semibold pt-4">
                  by {data.author}
                </p>
              </div>

              <div className="flex flex-row gap-x-6 items-center justify-center">
                <button
                  type="button"
                  className="px-4 py-2 text-xl bg-black rounded-xl text-white font-semibold"
                  onClick={() => dispatch(decreaseItemQuantity(data.id))}
                >
                  -
                </button>

                <div className="items-center">
                  <p className="text-2xl font-semibold" onChange={() => null}>
                    {data.quantity}
                  </p>
                </div>

                <button
                  className="px-4 py-2 text-xl bg-black rounded-xl text-white font-semibold"
                  onClick={() => dispatch(increaseItemQuantity(data.id))}
                >
                  +
                </button>
              </div>

              <div>
                <p className="text-center text-2xl font-bold text-[#800080] items-center justify-center">
                  Kshs. {data.price}
                </p>
              </div>

              <div className="items-center justify-center">
                <button
                  type="button"
                  className="px-4 py-2 text-xl bg-black rounded-xl text-white font-semibold"
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
          <div className="text-2xl bg-[#800080] text-white px-4 py-2">
            <h2>Summary Of The Books Bought</h2>
          </div>
          <div className="px-6">
            <div>
              <div className="flex flex-row gap-x-6 items-center py-4 mt-6">
                <p className="text-2xl text-black font-semibold">
                  TOTAL QUANTITY :{' '}
                </p>
                <p className="text-2xl text-black font-bold">
                  {totalQuantity} BOOKS
                </p>
              </div>

              <div className="flex flex-row gap-x-6 items-center py-4">
                <p className="text-2xl text-black font-semibold">
                  TOTAL AMOUNT :{' '}
                </p>
                <p className="text-2xl text-black font-bold">
                  KSHS. {totalPrice}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="px-4 py-3 text-xl bg-black rounded-xl text-white mt-4 font-semibold"
            >
              <Link to="/Checkout">PROCEED TO CHECKOUT</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
