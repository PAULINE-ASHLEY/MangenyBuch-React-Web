import React from 'react';
// import { Link } from 'react-router-dom';
import {
  FacebookButton,
  InstagramButton,
  LinkButton,
  LinkedInButton,
  TwitterButton,
  YoutubeButton,
} from 'components/widgets/Buttons';

function PageFooter() {
  return (
    <>
      <div className="text-black grid grid-cols-4">
        <div>
          <h3 className="text-xl mt-5 mb-2 text-[#800080]">
            Customer Service
          </h3>
          <div className="mt-4 text-white text-lg">
            <div className="flex flex-col">
              <LinkButton to="/">Contact Us</LinkButton>
              <LinkButton to="/">Frequently asked questions</LinkButton>
              <LinkButton to="/">My account</LinkButton>
            </div>
          </div>
          <div>
            <p className="text-white pt-4 text-lg">
              {`© ${new Date().getFullYear()} Pauline Ondiek All rights reserved.`}
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl mt-5 mb-2 text-[#800080]">Shop With Us</h3>
          <div className="mt-4 text-white text-lg">
            <div className="flex flex-col">
              <LinkButton to="/">Shipping and refunds</LinkButton>
              <LinkButton to="/">Privacy policy</LinkButton>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl mt-5 mb-2 text-[#800080]">About Us</h3>
          <div className="mt-4 text-white text-lg">
            <div className="flex flex-col">
              <LinkButton to="/">Our story</LinkButton>
              <LinkButton to="/">Checkout</LinkButton>
              <LinkButton to="/">Cart</LinkButton>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl mt-5 mb-2 text-[#800080]">Talk With Us</h3>
          <h3 className="text-lg mt-5 mb-2 text-white">
            Follow us on Social Media
          </h3>
          <div className="flex gap-x-4 mt-4">
            <InstagramButton />
            <LinkedInButton />
            <FacebookButton />
            <TwitterButton />
            <YoutubeButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default PageFooter;
