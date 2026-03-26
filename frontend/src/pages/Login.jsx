import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-2'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {currentState !== 'Login' && (
        <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' id="name"/> )}
        <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' id="email"/>
        <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' id="password"/>
      {currentState !== 'Login' && (
        <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Confirm Password' id="re-password"/> )}
      
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot password?</p>
        {
          currentState === 'Login'
          ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>

      <button
        onClick={()=>{
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;
        
          if(currentState === 'Login'){
           email && password
            ? toast.success("Login successfully! ✅")
            : toast.error("Please enter email and password!");
          } else {
            const name = document.getElementById("name").value;
            const repassword = document.getElementById("re-password").value;

            if(!name || !email || !password || !repassword){
              toast.error("Please fill all fiels!");
          } else if(password !== repassword){
            toast.error('Passwords do not match ❌')
          } else{
            toast.success("Sign up successfully ✅")
          }
        }
        }}
        className='cursor-pointer bg-black text-white font-light px-8 py-2 mt-4'
        >
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>

    </form>
  )
}

export default Login
