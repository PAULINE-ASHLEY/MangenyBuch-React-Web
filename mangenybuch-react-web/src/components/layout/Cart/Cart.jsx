import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from 'features/cartSlice';
import { Link } from 'react-router-dom';

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
      <div className="grid grid-cols-2 mt-10">
        <div className="px-4">
          <h2 className="text-2xl bg-black text-white px-4 py-2 rounded-xl">
            {cart.length} Items in Cart
          </h2>
          {cart?.map((data) => (
            <div className="flex flex-row gap-x-6 items-center py-4 mt-6">
              <div>
                <img src={data.image} width={120} alt={data.image} />
                <p className="text-2xl text-center">{data.title}</p>
              </div>

              <div className="flex flex-row gap-x-6 items-center">
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

              <p className="text-center text-2xl font-bold">
                Kshs. {data.price}
              </p>

              <div className="items-center">
                <button
                  type="button"
                  className="px-4 py-2 text-xl bg-black rounded-xl text-white font-semibold"
                  onClick={() => dispatch(removeItem(data.id))}
                >
                  REMOVE ITEM
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Summary Section */}
        <div className="px-6">
          <div className="text-2xl bg-black text-white px-4 py-2 rounded-xl">
            <h2>Summary Of The Items</h2>
          </div>
          <div className='px-6'>
            <div>
              <div className="flex flex-row gap-x-6 items-center py-4 mt-6">
                <p  className="text-2xl text-black font-semibold">TOTAL QUANTITY : </p>
                <p className="text-2xl text-black font-bold">{totalQuantity} ITEMS</p>
              </div>

              <div className="flex flex-row gap-x-6 items-center py-4">
                <p className="text-2xl text-black font-semibold">TOTAL AMOUNT : </p>
                <p className="text-2xl text-black font-bold">KSHS. {totalPrice}</p>
              </div>
            </div>

            <button
              type="button"
              className="px-4 py-3 text-xl bg-black rounded-xl text-white mt-4 font-semibold"
            >
              <Link to='/Checkout'>PROCEED TO CHECKOUT</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
