import React from 'react';
import PropTypes from 'prop-types';
import { PageNavBar } from 'components/modules/navBars';
import { PageFooter } from 'components/modules/footer';
import { Header } from '../header';

function PageWrapper({ children }) {
  return (
    <div className="relative">
        <nav className="py-2 text-white bg-[#800080]">
        <div>
          <Header />
        </div>
      </nav>
      <nav className="py-2 text-white bg-black">
        <div>
          <PageNavBar />
        </div>
      </nav>

      <main>
        <div className="min-h-[75vh] box-border w-full">{children}</div>
      </main>

      <footer className="flex justify-center items-center mt-4 bg-black">
        <div className="md:container py-8 px-4 lg:px-16 ">
          <PageFooter />
        </div>
      </footer>
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.any,
};

export default PageWrapper;
