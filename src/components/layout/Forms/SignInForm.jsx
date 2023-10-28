import { React } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { linkedin, facebook } from 'assets/icons';
import { Link } from 'react-router-dom';

function SignInForm() {
  const strongPasswordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8)
        .required('Required')
        .matches(strongPasswordRegex),
    }),
    onSubmit: () => {
      console.log(formik.value);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="sm:py-20 md:py-20 lg:px-20 lg:py-20 xl:px-20 xl:py-20 2xl:px-20 2xl:py-20"
    >
      <h1 className="text-3xl text-center font-400 text-black pb-10">
        Log In to your Account
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 px-10">
        <div className="border-black border-solid border-2 rounded-xl mb-4 bg-black hover:bg-[#800080]">
          <a
            href="www.facebook.com"
            rel="noreferrer"
            target="_blank"
            className="text-white flex justify-center items-center gap-x-2 p-2 text-sm"
          >
            <img src={facebook} width={20} alt="Facebook Icon" /> Continue with
            Facebook
          </a>
        </div>

        <div className="border-black border-solid border-2 rounded-xl mb-4 p-2 bg-black hover:bg-[#800080]">
          <a
            href="www.linkedin.com"
            rel="noreferrer"
            target="_blank"
            className="text-white flex justify-center items-center gap-x-2 text-sm"
          >
            <img src={linkedin} width={20} alt="LinkedIn Icon" /> Continue with
            LinkedIn
          </a>
        </div>

        <div className="text-center flex justify-between items-center py-4">
          <div className="border-b border-black w-[30%] text-black"></div>{' '}
          <Link
            to="#"
            className="px-2 text-center text-black w-[40%] text-base"
          >
            Or continue with
          </Link>
          <div className="border-b border-black w-[30%] text-black"></div>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
        <div className="px-10 mb-4">
          <label htmlFor="email" className="text-black text-base flex">
            Email Address <b className="text-red-600 text-base">*</b>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600 text-base ml-2">
                {formik.errors.email}
              </div>
            ) : null}
          </label>
          <input
            name="email"
            type="email"
            className="p-1 rounded-xl border-black border-solid border-2 w-full text-sm"
            placeholder="Enter your Email Address"
            onChange={formik.handleChange}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
        <div className="px-10 mb-4">
          <label htmlFor="password" className="text-black text-base flex">
            Password <b className="text-red-600 text-base">*</b>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-600 text-base ml-2">
                {formik.errors.password}
              </div>
            ) : null}
          </label>
          <input
            name="password"
            type="text"
            className="p-1 rounded-xl border-black border-solid border-2 w-full text-sm"
            placeholder="Enter your Password"
            onChange={formik.handleChange}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 pb-4">
        <div></div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-4 text-sm bg-black text-white rounded-xl hover:bg-[#800080]"
          >
            Send
          </button>
        </div>
        <div></div>
      </div>
      <p className="text-center text-base pt-4 font-400">
        Don&apos;t have an Account ?{' '}
        <Link to="/SignUp" className="text-black font-bold">
          Sign Up
        </Link>
      </p>
    </form>
  );
}

export default SignInForm;
