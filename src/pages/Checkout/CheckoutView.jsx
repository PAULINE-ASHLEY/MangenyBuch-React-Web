import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Checkout } from 'components/layout/Checkout';
function CheckoutView() {
  return (
    <PageWrapper>
      <div className='px-10'>
        <Checkout />
      </div>
    </PageWrapper>
  );
}

export default CheckoutView;
