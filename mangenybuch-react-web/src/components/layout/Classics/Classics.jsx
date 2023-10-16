import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from 'features/cartSlice';
import { cart, heart } from 'assets/images';

const Classics = () => {
  const currentPage = 6;
  const postsPerPage = 12;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = useSelector((state) => state.allCart.items).slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const dispatch = useDispatch();

  return (
    <>
      {currentPosts.map((item, id) => (
        <div key={id} className="pt-8 text-justify">
          <div className="flex justify-center">
            <img src={item.image} alt={item.title} width={140} />
          </div>
          <div className="pt-2">
            <h2 className="font-semibold text-black text-xl text-center">
              {item.title}
            </h2>
            <p className="pt-2 text-xl font-semibold text-center text-gray-500">
              {item.author}
            </p>
            <p className="pt-2 text-xl font-semibold text-center text-[#800080]">
              Kshs. {item.price}
            </p>
            <div className="flex flex-row justify-center gap-x-4">
              <button
                className="px-4 py-2 rounded-xl mt-4 font-semibold border-2 border-solid border-black"
                onClick={() => dispatch(addToCart(item))}
              >
                <img src={heart} alt={heart} />
              </button>
              <button
                className="px-4 py-2 rounded-xl mt-4 font-semibold border-2 border-solid border-black"
                onClick={() => dispatch(addToCart(item))}
              >
                <img src={cart} alt={cart} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Classics;
