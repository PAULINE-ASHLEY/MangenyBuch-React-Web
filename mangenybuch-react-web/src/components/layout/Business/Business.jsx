import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from 'features/cartSlice';

const Business = () => {
  const currentPage = 1;
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
            <h2 className="font-semibold text-black text-xl text-center">{item.title}</h2>
            <p className="pt-2 text-xl font-400 text-center">{item.author}</p>
            <p className="pt-2 text-xl font-400 text-center">Kshs. {item.price}</p>
            <div className="flex justify-center">
              <div>
                <button
                  className="px-4 py-2 text-lg bg-black rounded-xl text-white mt-4 font-semibold"
                  onClick={() => dispatch(addToCart(item))}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Business;
