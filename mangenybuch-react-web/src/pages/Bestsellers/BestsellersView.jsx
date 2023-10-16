import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Bestseller } from 'components/layout/Bestseller';
import { Link } from 'react-router-dom';

function BestsellersView() {
  return (
    <PageWrapper>
      <div className="px-20 pb-4 pt-10 font-medium flex flex-row gap-x-4 text-lg text-gray-500">
        <h1><Link to='/'>Home</Link></h1>
        <h1>/</h1>
        <h1><Link to='/Bestsellers'>Bestseller Books</Link></h1>
      </div>
      <div className="px-20 font-medium">
        <h1 className="text-3xl">Bestseller Books</h1>
      </div>
      <div className="grid grid-cols-6 px-20">
        <Bestseller />
      </div>
    </PageWrapper>
  );
}

export default BestsellersView;
