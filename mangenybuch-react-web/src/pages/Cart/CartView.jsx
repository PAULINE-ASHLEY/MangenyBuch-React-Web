import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Cart } from 'components/layout/Cart';
function CartView() {
  return (
    <PageWrapper>
      <div className='px-10'>
        <Cart />
      </div>
    </PageWrapper>
  );
}

export default CartView;
