import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Biography } from 'components/layout/Biography';

function BiographyView() {
  return (
    <PageWrapper>
      <div className='grid grid-cols-6 px-20'>
        <Biography />
      </div>
    </PageWrapper>
  );
}

export default BiographyView;
