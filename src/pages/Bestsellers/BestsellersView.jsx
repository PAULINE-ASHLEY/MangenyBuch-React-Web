import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Bestseller } from 'components/layout/Bestseller';
import { Link } from 'react-router-dom';

function BestsellersView() {
  return (
    <PageWrapper>
      <div className="px-10 pb-4 pt-10 font-medium flex flex-row gap-x-2 text-base text-gray-500">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>/</h1>
        <h1>
          <Link to="/Bestsellers">Bestseller Books</Link>
        </h1>
      </div>
      <div className="px-10 font-medium">
        <h1 className="text-xl">Bestseller Books</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-10">
        <Bestseller />
      </div>
    </PageWrapper>
  );
}

export default BestsellersView;
