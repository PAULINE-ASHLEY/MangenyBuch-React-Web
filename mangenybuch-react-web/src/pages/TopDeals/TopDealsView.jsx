import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { TopDeals } from 'components/layout/TopDeals';

function TopDealsView() {
  return (
    <PageWrapper>
      <div className="grid grid-cols-6 px-20">
        <TopDeals />
      </div>
    </PageWrapper>
  );
}

export default TopDealsView;
