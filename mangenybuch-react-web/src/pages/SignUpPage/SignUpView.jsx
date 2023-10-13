import React from 'react';
import { SignUpForm } from 'components/layout/Forms';
import { Link } from 'react-router-dom';
import { back, business } from 'assets/images';
function SignUpView() {
  return (
    <div className="flex">
      <div className="w-[50%] bg-black">
        <Link to="/">
          <div className="pt-8 px-6 flex gap-x-4 items-center">
            <img src={back} alt={back} width={40} />
            <p className="text-white text-xl font-semibold text-center">
              Back
            </p>
          </div>
        </Link>
        <div className="flex justify-center items-center mt-20">
          <img src={business} alt={business} width={250} />
        </div>
        <div className="pt-8 px-6 ">
          <p className="text-white text-4xl font-semibold text-center">
            Ashley's Kitchen
          </p>
        </div>
      </div>
      <div className="w-[50%]">
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUpView;
