import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Biography } from 'components/layout/Biography';
import { Link } from 'react-router-dom';

function BiographyView() {
  return (
    <PageWrapper>
      <div className="px-10 pb-4 pt-10 font-medium flex flex-row gap-x-2 text-base text-gray-500">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>/</h1>
        <h1>
          <Link to="/Biography">Biography Books</Link>
        </h1>
      </div>
      <div className="px-10 font-medium">
        <h1 className="text-xl">Biography Books</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 px-20 md:px-10 lg:px-10 xl:px-10 2xl:px-10">
        <Biography />
      </div>
    </PageWrapper>
  );
}

export default BiographyView;
