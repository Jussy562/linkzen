import {useState }from 'react';
import * as yup from 'yup';

import hero1 from '/assets/hero1.svg';
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';


function Login() {
  const [page, setPage] = useState(true);
  const toggleForm = () => setPage(!page);
  type FormValues = {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    confirmPassword?: string;
  }
  const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), ''], 'Passwords must match')
      .required('Confirm password is required'),
  });

  

    
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
      resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<FormValues> = (data, e) => {
      console.log(data);
     
      alert("your account has been created successfully!")
      e?.target.reset();
      setPage(!page)
      
    };

    const handleLogin: SubmitHandler<FormValues> = (data, e) => {
      // code to handle login (e.g. make an API call)
      console.log(data); // log form data to console
      e?.target.reset();
    }
  

    
  
    
  return (
    <div className='flex flex-col-reverse md:flex-row md:justify-center items-center login py-0 md:py-0 h-full'>
        
      <div className='w-full md:w-1/2 flex justify-center items-center bg-gray-100 h-full px-2 md:px-4 py-8 md:py-24'>
        {
          page ? 
          <form method='post' className='w-full md:w-2/3 h-full shadow-xl rounded-xl p-4  md:p-6' onSubmit={handleSubmit(onSubmit )}>
            <div className='mb-6 md:mb-10 flex flex-col justify-center items-center'>
              <h2 className='text-black dark:text-white text-xl md:text-2xl font-bold'>Welcome to link<span className="text-[#ffa741]">Zen </span>!</h2>
              <p className='text-black text-lg'>Enter your details to create a new account</p>
            </div>
            <div className='flex flex-row justify-between items-center gap-4'>
              <div className="mb-6">
                <label htmlFor="first_name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">First Name</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register('firstName')}  placeholder="First Name"   />
                { errors.firstName && <p className='text-red-400 text-xs'>{errors.firstName.message}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="last_name" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Last Name</label>
                <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" {...register('lastName')}   />
                { errors.lastName && <p  className='text-red-400 text-xs'>{errors.lastName.message}</p>}
              </div>
            </div>

            <div className='flex flex-row justify-between items-center gap-4'>
              <div className="mb-6 w-full">
                <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" {...register('email')}  />
                { errors.email && <p className='text-red-400 text-xs'>{errors.email.message}</p>}
              </div>
            </div>
          
            <div className='flex flex-row justify-between items-center gap-4'>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Create password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder='*******' {...register('password')} />
                {errors.password && <p  className='text-red-400 text-xs'>{errors.password.message}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Confirm password</label>
                <input type="password" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder='*******' {...register('confirmPassword')}  />
                { errors.confirmPassword && <p  className='text-red-400 text-xs'>{errors.confirmPassword.message}</p>}
              </div>
            </div>
          
          {/*  */}
          <div className='mb-5'>
            <p className='text-sm'>Already have an account? <span className='text-red-500 cursor-pointer text-xs' onClick={toggleForm}>Login</span></p>
          </div>
          <div >
              <button type="submit" className="text-white bg-[#ffa741] hover:bg-[#ffa741]  focus:outline-none font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Create account</button>
            </div>
        </form>
            : 

            <form className='w-full md:w-2/3 h-full shadow-xl rounded-xl p-4  md:p-6' onSubmit={handleSubmit(handleLogin)}>
             <div className='mb-6 md:mb-10 flex flex-col justify-center items-center'>
              <h2 className='text-black dark:text-white text-xl md:text-2xl font-bold'>Welcome to link<span className="text-[#ffa741]">Zen </span>!</h2>
              <p className='text-black text-lg'>Enter your details to login</p>
            </div>
             <div className='flex flex-row justify-between items-center gap-4'>
              <div className="mb-6 w-full">
                <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="loginemail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" {...register('email')}  />
                { errors.email && <p className='text-red-400 text-xs'>{errors.email.message}</p>}
              </div>
            </div>
            <div className='flex flex-row justify-between items-cente'>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Enter password</label>
                <input type="password" id="loginPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder='*******' {...register('password')} />
                {errors.password && <p  className='text-red-400 text-xs'>{errors.password.message}</p>}
              </div>
             
            </div>
              
              <div className='mb-5'>
                <p className='text-sm'>Don't have an account? <span className='text-red-500 cursor-pointer text-xs' onClick={toggleForm}>Create account</span></p>
              </div>
              <div>
                <button type="submit" className="text-white bg-[#e0b0ff] hover:bg-[#d08ffb]  focus:outline-none font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
              </div>
            </form>
        }
      </div>
     <div className='w-full md:w-1/2 flex flex-col justify-center items-center py-12 md:py-24 mb-8 md:mb-0 bg-none h-full md:h-full'>
        
        <div className='w-2/3 flex justify-center items-center h-full'>
            <img src={hero1} alt="Connect" className='h-64 lg:h-96 ' />
          {/* <h3 className='text-black text-2xl md:text-4xl font-extrabold'><span className='text-[#e0b0ff]'>eve</span>WORKSHOP</h3> */}
        </div>
      </div> 

    </div>
  )
}

export default Login