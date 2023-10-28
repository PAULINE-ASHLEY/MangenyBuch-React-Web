import { React } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { cash, mpesa, paypal } from 'assets/images';

function CheckoutForm() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, 'Must be 3 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: () => {
      console.log(formik.value);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
        <div className="mb-4">
          <label htmlFor="fullName" className="text-black text-base flex">
            Full Name <b className="text-red-600 text-base">*</b>
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-red-600 text-base ml-2">
                {formik.errors.fullName}
              </div>
            ) : null}
          </label>
          <input
            name="fullName"
            type="text"
            className="p-1 rounded-lg border-black border-solid border-2 w-full text-sm"
            placeholder="Enter your Full Name"
            onChange={formik.handleChange}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
        <div className="mb-4">
          <label htmlFor="email" className="text-black text-base flex">
            Email Address <b className="text-red-600 text-base">*</b>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600 text-base ml-2">{formik.errors.email}</div>
            ) : null}
          </label>
          <input
            name="email"
            type="email"
            className="p-1 rounded-lg border-black border-solid border-2 w-full text-sm"
            placeholder="Enter your Email Address"
            onChange={formik.handleChange}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="text-black text-base flex">
            Phone Number <b className="text-red-600 text-base">*</b>
            {formik.touched.phoneNumbe && formik.errors.phoneNumbe ? (
              <div className="text-red-600 text-base ml-2">
                {formik.errors.phoneNumbe}
              </div>
            ) : null}
          </label>
          <input
            name="phoneNumber"
            type="tel"
            className="p-1 rounded-lg border-black border-solid border-2 w-full text-sm"
            placeholder="Enter your Phone Number"
            onChange={formik.handleChange}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="text-red text-xl">{formik.errors.phoneNumber}</div>
          ) : null}
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
        <div className="mb-4">
          <label htmlFor="located" className="text-black text-base flex">
            Where are you located? <b className="text-red-600 text-base">*</b>
            {formik.touched.located && formik.errors.located ? (
              <div className="text-red-600 text-base ml-2">
                {formik.errors.located}
              </div>
            ) : null}
          </label>
          <input
            name="fullName"
            type="text"
            className="p-1 rounded-lg border-black border-solid border-2 w-full text-sm"
            placeholder="Enter your Full Name"
            onChange={formik.handleChange}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
        <div className="mb-4">
          <label htmlFor="located" className="text-black text-base flex">
            Additional Information
            {formik.touched.located && formik.errors.located ? (
              <div className="text-red-600 text-base ml-2">
                {formik.errors.located}
              </div>
            ) : null}
          </label>
          <textarea
            name="located"
            className="p-1 rounded-lg border-black border-solid border-2 w-full text-sm"
            cols="10"
            rows="4"
            onChange={formik.handleChange}
          ></textarea>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
        <div className="mb-4">
          <label htmlFor="located" className="text-black text-base flex">
            Select a payment method <b className="text-red-600 text-base">*</b>
            {formik.touched.located && formik.errors.located ? (
              <div className="text-red-600 text-base ml-2">
                {formik.errors.located}
              </div>
            ) : null}
          </label>{' '}
          <br />
          <div className="flex flex-row gap-x-4 items-center">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <img src={mpesa} alt={mpesa} width={40} />
            <label
              for="html"
              className="text-black text-base items-center font-semibold"
            >
              {' '}
              M-Pesa
            </label>
          </div>
          <br />
          <div className="flex flex-row gap-x-4 items-center">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <img src={paypal} alt={paypal} width={40} />
            <label
              for="html"
              className="text-black text-base items-center font-semibold"
            >
              Paypal
            </label>
          </div>
          <br />
          <div className="flex flex-row gap-x-4 items-center">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <img src={cash} alt={cash} width={40} />
            <label
              for="html"
              className="text-black text-base items-center font-semibold"
            >
              {' '}
              Cash On Delivery
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CheckoutForm;
