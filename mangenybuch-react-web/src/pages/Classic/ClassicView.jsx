import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Classics } from 'components/layout/Classics';

function ClassicView() {
  return (
    <PageWrapper>
    <div className='grid grid-cols-6 px-20'>
      <Classics />
    </div>
  </PageWrapper>
  );
}

export default ClassicView;
