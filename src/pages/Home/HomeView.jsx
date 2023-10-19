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
      <div className="px-20 pt-10">
        <img src={book} alt={book} />
      </div>
      <div className="px-20 font-medium pt-8 flex flex-row gap-x-6">
        <h1 className="text-2xl">Bestseller</h1>
        <h1 className="text-2xl">&gt;</h1>
        <h1 className="text-2xl text-right text-gray-500">
          <Link to="/Bestsellers">View All</Link>
        </h1>
      </div>
      <div className="grid grid-cols-6 px-20">
        <Bestseller />
      </div>
      <div className="px-20 font-medium pt-4 flex flex-row gap-x-6">
        <h1 className="text-2xl">Top Deals</h1>
        <h1 className="text-2xl">&gt;</h1>
        <h1 className="text-2xl text-right text-gray-500">
          <Link to="/TopDeals">View All</Link>
        </h1>
      </div>
      <div className="grid grid-cols-6 px-20">
        <TopDeals />
      </div>
      <div className="px-20 font-medium pt-4 flex flex-row gap-x-6">
        <h1 className="text-2xl">On Sale</h1>
        <h1 className="text-2xl">&gt;</h1>
        <h1 className="text-2xl text-right text-gray-500">
          <Link to="/TopDeals">View All</Link>
        </h1>
      </div>
      <div className="grid grid-cols-6 px-20">
        <OnSale />
      </div>
      <div className="px-20 font-medium pt-4 flex flex-row gap-x-6">
        <h1 className="text-2xl">Comics Now Available</h1>
        <h1 className="text-2xl">&gt;</h1>
        <h1 className="text-2xl text-right text-gray-500">
          <Link to="/Comic">View All</Link>
        </h1>
      </div>
      <div className="grid grid-cols-6 px-20">
        <Comics />
      </div>
    </PageWrapper>
  );
}

export default HomeView;
