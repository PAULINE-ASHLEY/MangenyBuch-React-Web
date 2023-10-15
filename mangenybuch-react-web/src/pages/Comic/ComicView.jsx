import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Comics } from 'components/layout/Comics';

function ComicView() {
  return (
    <PageWrapper>
      <div className="grid grid-cols-6 px-20">
        <Comics />
      </div>
    </PageWrapper>
  );
}

export default ComicView;
