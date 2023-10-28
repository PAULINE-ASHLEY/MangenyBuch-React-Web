import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Business } from 'components/layout/Business';
import { Link } from 'react-router-dom';

function BusinessView() {
  return (
    <PageWrapper>
      <div className="px-10 pb-4 pt-10 font-medium flex flex-row gap-x-2 text-base text-gray-500">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>/</h1>
        <h1>
          <Link to="/Business">Business Books</Link>
        </h1>
      </div>
      <div className="px-10 font-medium">
        <h1 className="text-xl">Business Books</h1>
      </div>
      <div className="grid grid-cols-5 px-10">
        <Business />
      </div>
    </PageWrapper>
  );
}

export default BusinessView;
