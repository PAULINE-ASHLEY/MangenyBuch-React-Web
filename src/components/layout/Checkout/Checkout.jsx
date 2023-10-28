import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCartTotal } from 'features/cartSlice';
import { CheckoutForm } from '../Forms';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, totalPrice } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cart]);

  return (
    <>
      <div className="grid grid-cols-2 mt-2 px-4">
        <div>
          <h1 className="text-xl font-semibold text-black py-8">
            Billing Details
          </h1>
          <CheckoutForm />
        </div>
        <div></div>
      </div>
      <div className="mt-10">
        <div className="px-4">
          <h2 className="text-base bg-[#800080] text-white px-4 py-2">
            Your Order
          </h2>
          <div className="grid grid-cols-3 px-10 font-semibold">
            <div>
              <h2 className="text-base py-4 text-black">Product</h2>
            </div>
            <div>
              <h2 className="text-base py-4 text-black">Item Quantity</h2>
            </div>
            <div>
              <h2 className="text-base py-4 text-black">Item Total</h2>
            </div>
          </div>
          {cart?.map((data) => (
            <>
              <div className="grid grid-cols-3 items-center mt-2 px-10 mb-10">
                <div className="flex flex-row items-center gap-x-6">
                  <img src={data.image} width={60} alt={data.image} />
                  <div>
                  <p className="text-base font-semibold">{data.title}</p>
                  <p className="text-base font-semibold text-gray-500">by {data.author}</p>
                  </div>
                </div>
                <div className='px-10'>
                  {' '}
                  <p className="text-base font-semibold text-gray-500" onChange={() => null}>
                    {data.quantity} Item
                  </p>
                </div>
                <div className="flex flex-row items-center gap-x-6 text-[#800080]">
                  <p className="text-base font-semibold">Kshs. {data.price}</p>
                  <p className="text-base font-semibold">
                    x
                  </p>
                  <p className="text-base font-semibold" onChange={() => null}>
                    {data.quantity}
                  </p>
                </div>
              </div>
            </>
          ))}
          <div className="grid grid-cols-3 items-center mt-2 px-10 pb-4">
            <div></div>
            <div></div>
            <div className="flex flex-row gap-x-10 items-center py-4">
              <p className="text-base text-black">Total Amount : </p>
              <p className="text-base text-black font-semibold">
                KSHS. {totalPrice}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3  items-center mt-2 px-10 pb-20">
            <div></div>
            <div></div>
            <div className="flex flex-row gap-x-10 items-right py-4">
              <div>
                <button
                  type="button"
                  className="px-4 py-3 text-sm bg-black rounded-xl text-white mt-4 font-semibold hover:bg-[#800080]"
                >
                  <Link to="/">Place Order</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
