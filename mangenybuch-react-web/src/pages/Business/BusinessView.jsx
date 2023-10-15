import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Business } from 'components/layout/Business';

function BusinessView() {
  return (
    <PageWrapper>
      <div className="grid grid-cols-6 px-20">
        <Business />
      </div>
    </PageWrapper>
  );
}

export default BusinessView;
