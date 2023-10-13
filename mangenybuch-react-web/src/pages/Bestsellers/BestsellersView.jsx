import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Bestseller } from 'components/layout/Bestseller';

function BestsellersView() {
  return (
    <PageWrapper>
      <div className='grid grid-cols-6 px-20'>
        <Bestseller />
      </div>
    </PageWrapper>
  );
}

export default BestsellersView;
