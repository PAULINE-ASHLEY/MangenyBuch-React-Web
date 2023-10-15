import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Novels } from 'components/layout/Novels';

function NovelsView() {
  return (
    <PageWrapper>
      <div className="grid grid-cols-6 px-20">
        <Novels />
      </div>
    </PageWrapper>
  );
}

export default NovelsView;
