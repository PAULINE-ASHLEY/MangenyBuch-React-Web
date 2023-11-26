import React from 'react';
import { LinkButton } from 'components/widgets/Buttons';
import { facebook, instagram, linkedin, twitter, youtube } from 'assets/icons';

function PageFooter() {
  return (
    <>
      <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 mx-10 md:mx-20">
        <div>
          <h3 className="text-lg mt-5 mb-2 text-[#800080]">Customer Service</h3>
          <div className="mt-4 text-white text-sm">
            <div className="flex flex-col">
              <LinkButton to="/">Contact Us</LinkButton>
              <LinkButton to="/">Frequently asked questions</LinkButton>
              <LinkButton to="/">My account</LinkButton>
            </div>
          </div>
          <div>
            <p className="text-white pt-4 text-sm">
              {`© ${new Date().getFullYear()} Pauline Ondiek All rights reserved.`}
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg mt-5 mb-2 text-[#800080]">Shop With Us</h3>
          <div className="mt-4 text-white text-sm">
            <div className="flex flex-col">
              <LinkButton to="/">Shipping and refunds</LinkButton>
              <LinkButton to="/">Privacy policy</LinkButton>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg mt-5 mb-2 text-[#800080]">About Us</h3>
          <div className="mt-4 text-white text-sm">
            <div className="flex flex-col">
              <LinkButton to="/">Our story</LinkButton>
              <LinkButton to="/">Checkout</LinkButton>
              <LinkButton to="/">Cart</LinkButton>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg mt-5 mb-2 text-[#800080]">Talk With Us</h3>
          <h3 className="text-base mt-5 mb-2 text-white">
            Follow us on Social Media
          </h3>
          <div className="flex gap-x-4 mt-4">
            <img src={instagram} alt="instagram" width={20} />
            <img src={linkedin} alt="linkedin" width={20} />
            <img src={facebook} alt="facebook" width={20} />
            <img src={twitter} alt="twitter" width={20} />
            <img src={youtube} alt="youtube" width={20} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PageFooter;
