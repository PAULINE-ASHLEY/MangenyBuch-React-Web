import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Children } from 'components/layout/Children';

function KidsView() {
  return (
    <PageWrapper>
      <div className="grid grid-cols-6 px-20">
        <Children />
      </div>
    </PageWrapper>
  );
}

export default KidsView;
