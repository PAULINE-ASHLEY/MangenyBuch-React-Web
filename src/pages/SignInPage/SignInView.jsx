import React from 'react';
import { SignInForm } from 'components/layout/Forms';
import { back, business } from 'assets/images';
import { Link } from 'react-router-dom';
function SignInView() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row h-full">
      <div className="md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] bg-[#800080] py-10 lg:py-0 xl:py-0 2xl:py-0">
        <Link to="/">
          <div className="pt-8 px-6 flex gap-x-4 items-center">
            <img src={back} alt="Real Estate Logo" width={20} />
            <p className="text-white text-base font-semibold text-center">
              Back
            </p>
          </div>
        </Link>
        <div className="flex justify-center items-center mt-20">
          <img src={business} alt={business} width={200} />
        </div>
        <div className="pt-8 px-6 ">
          <p className="text-white text-2xl font-semibold text-center">
            MangenyBuch
          </p>
        </div>
      </div>
      <div className="md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-10 lg:p-0 xl:p-0 2xl:p-0">
        <SignInForm />
      </div>
    </div>
  );
}

export default SignInView;
