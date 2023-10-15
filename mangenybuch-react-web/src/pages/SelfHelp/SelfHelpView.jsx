import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { SelfHelp } from 'components/layout/SelfHelp';

function SelfHelpView() {
  return (
    <PageWrapper>
      <div className="grid grid-cols-6 px-20">
        <SelfHelp />
      </div>
    </PageWrapper>
  );
}

export default SelfHelpView;
