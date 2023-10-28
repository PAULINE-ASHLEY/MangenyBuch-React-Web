import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Classics } from 'components/layout/Classics';
import { Link } from 'react-router-dom';

function ClassicView() {
  return (
    <PageWrapper>
      <div className="px-10 pb-4 pt-10 font-medium flex flex-row gap-x-2 text-base text-gray-500">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>/</h1>
        <h1>
          <Link to="/Classic">Classic Books</Link>
        </h1>
      </div>
      <div className="px-10 font-medium">
        <h1 className="text-xl">Classic Books</h1>
      </div>
      <div className="grid grid-cols-5 px-10">
        <Classics />
      </div>
    </PageWrapper>
  );
}

export default ClassicView;
