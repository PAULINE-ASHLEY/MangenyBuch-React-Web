import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Bestseller } from 'components/layout/Bestseller';
import { TopDeals } from 'components/layout/TopDeals';
import { OnSale } from 'components/layout/OnSale';
import { Comics } from 'components/layout/Comics';
import { book } from 'assets/images';
import { Link } from 'react-router-dom';
function HomeView() {
  return (
    <PageWrapper>
      <div className="px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-10 pt-10">
        <img src={book} alt={book} />
      </div>
      <div className="px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-10 font-medium pt-8 flex flex-row gap-x-2">
        <h1 className="text-lg">Bestseller</h1>
        <h1 className="text-lg">&gt;</h1>
        <h1 className="text-lg text-right text-gray-500">
          <Link to="/Bestsellers">View All</Link>
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-10">
        <Bestseller />
      </div>
      <div className="px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-10 font-medium pt-4 flex flex-row gap-x-2">
        <h1 className="text-lg">Top Deals</h1>
        <h1 className="text-lg">&gt;</h1>
        <h1 className="text-lg text-right text-gray-500">
          <Link to="/TopDeals">View All</Link>
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-10">
        <TopDeals />
      </div>
      <div className="px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-10 font-medium pt-4 flex flex-row gap-x-2">
        <h1 className="text-lg">On Sale</h1>
        <h1 className="text-lg">&gt;</h1>
        <h1 className="text-lg text-right text-gray-500">
          <Link to="/TopDeals">View All</Link>
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-10">
        <OnSale />
      </div>
      <div className="px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-10 font-medium pt-4 flex flex-row gap-x-2">
        <h1 className="text-lg">Comics Now Available</h1>
        <h1 className="text-lg">&gt;</h1>
        <h1 className="text-lg text-right text-gray-500">
          <Link to="/Comic">View All</Link>
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-10">
        <Comics />
      </div>
    </PageWrapper>
  );
}

export default HomeView;
