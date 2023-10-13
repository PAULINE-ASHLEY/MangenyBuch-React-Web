import { React } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { linkedin, facebook } from 'assets/icons';
import { Link } from 'react-router-dom';

function SignUpForm() {
	const strongPasswordRegex =
		/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
	const formik = useFormik({
		initialValues: {
			fullName: '',
			email: '',
			confirmEmail: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: Yup.object({
			fullName: Yup.string()
				.min(3, 'Must be 3 characters or less')
				.required('Required'),
			confirmEmail: Yup.string()
				.email('Invalid email address')
				.required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
			password: Yup.string()
				.min(8)
				.required('Required')
				.matches(strongPasswordRegex),
			confirmPassword: Yup.string()
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
			className='sm:py-20 md:py-20 lg:px-20 lg:py-20 xl:px-20 xl:py-20 2xl:px-20 2xl:py-20'
		>
			<h1 className='text-4xl text-center font-400 text-black pb-10'>
				Create Your New Account
			</h1>

			<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 px-10'>
	
				<div className='border-black border-solid border-2 rounded-xl mb-4 bg-black'>
					<a
						href='www.facebook.com'
						rel='noreferrer'
						target='_blank'
						className='text-white flex justify-center items-center gap-x-2 p-2'
					>
						<img src={facebook} alt='LinkedIn Icon' /> Continue with Facebook
					</a>
				</div>

				<div className='border-black border-solid border-2 rounded-xl mb-4 p-2 bg-black'>
					<a
						href='www.linkedin.com'
						rel='noreferrer'
						target='_blank'
						className='text-white flex justify-center items-center gap-x-2'
					>
						<img src={linkedin} alt='LinkedIn Icon' /> Continue with LinkedIn
					</a>
				</div>

				<div className='text-center flex justify-between items-center py-8'>
					<div className='border-b border-black w-[80%] text-black'></div>{' '}
					<Link to='#' className='px-2 text-center text-black w-[20%] text-xl'>
						Or continue with
					</Link>
					<div className='border-b border-black w-[80%] text-black'></div>
				</div>
			</div>

			<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
				<div className='px-10 mb-4'>
					<label htmlFor='fullName' className='text-black text-xl flex'>
						Full Name <b className='text-red text-xl'>*</b>
						{formik.touched.fullName && formik.errors.fullName ? (
							<div className='text-red text-xl ml-2'>
								{formik.errors.fullName}
							</div>
						) : null}
					</label>
					<input
						name='fullName'
						type='text'
						className='p-1.5 rounded-xl border-black border-solid border-2 w-full'
						placeholder='Enter your Full Name'
						onChange={formik.handleChange}
					/>
				</div>
			</div>

			<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
				<div className='px-10 mb-4'>
					<label htmlFor='email' className='text-black text-xl flex'>
						Email Address <b className='text-red text-xl'>*</b>
						{formik.touched.email && formik.errors.email ? (
							<div className='text-red text-xl ml-2'>{formik.errors.email}</div>
						) : null}
					</label>
					<input
						name='email'
						type='email'
						className='p-1.5 rounded-xl border-black border-solid border-2 w-full'
						placeholder='Enter your Email Address'
						onChange={formik.handleChange}
					/>
				</div>
			</div>

			<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
				<div className='px-10 mb-4'>
					<label htmlFor='confirmEmail' className='text-black text-xl flex'>
						Confirm Email Address <b className='text-red text-xl'>*</b>
						{formik.touched.confirmEmail && formik.errors.confirmEmail ? (
							<div className='text-red text-xl ml-2'>
								{formik.errors.confirmEmail}
							</div>
						) : null}
					</label>
					<input
						name='confirmEmail'
						type='email'
						className='p-1.5 rounded-xl border-black border-solid border-2 w-full'
						placeholder='Enter your Email Address'
						onChange={formik.handleChange}
					/>
				</div>
			</div>

			<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
				<div className='px-10 mb-4'>
					<label htmlFor='phoneNumber' className='text-black text-xl'>
						Phone Number
					</label>
					<input
						name='phoneNumber'
						type='tel'
						className='p-1.5 rounded-xl border-black border-solid border-2 w-full'
						placeholder='Enter your Phone Number'
						onChange={formik.handleChange}
					/>
					{formik.touched.phoneNumber && formik.errors.phoneNumber ? (
						<div className='text-red text-xl'>{formik.errors.phoneNumber}</div>
					) : null}
				</div>
			</div>

			<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
				<div className='px-10 mb-4'>
					<label htmlFor='password' className='text-black text-xl flex'>
						Password <b className='text-red text-xl'>*</b>
						{formik.touched.password && formik.errors.password ? (
							<div className='text-red text-xl ml-2'>
								{formik.errors.password}
							</div>
						) : null}
					</label>
					<input
						name='password'
						type='text'
						className='p-1.5 rounded-xl border-black border-solid border-2 w-full'
						placeholder='Enter your Password'
						onChange={formik.handleChange}
					/>
				</div>
			</div>

			<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
				<div className='px-10 mb-4'>
					<label htmlFor='confirmPassword' className='text-black text-xl flex'>
						Confirm Password <b className='text-red text-xl'>*</b>
						{formik.touched.confirmPassword && formik.errors.confirmPassword ? (
							<div className='text-red text-xl ml-2'>
								{formik.errors.confirmPassword}
							</div>
						) : null}
					</label>
					<input
						name='confirmPassword'
						type='text'
						className='p-1.5 rounded-xl border-black border-solid border-2 w-full'
						placeholder='Enter your Password'
						onChange={formik.handleChange}
					/>
				</div>
			</div>

			<div className='grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 pb-4'>
				<div></div>
				<div className='flex justify-center'>
					<button
						type='submit'
						className='px-10 py-4 text-xl bg-black text-white rounded-xl'
					>
						Send
					</button>
				</div>
				<div></div>
			</div>
			<p className='text-center text-xl pt-4 font-400'>
				Already have an Account ?{' '}
				<Link to='/SignIn' className='text-black font-bold'>
					Sign In
				</Link>
			</p>
		</form>
	);
}

export default SignUpForm;
