import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Container from './Container';
import { Toaster, toast } from 'react-hot-toast';

const Login = () => {

  const auth = getAuth();

  let [email, setemail] = useState('');
  let [password, setpassword] = useState('');
  let navigate = useNavigate()

  let handlesingin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success('Login successful')
        navigate('/checkout')
      })
      .catch((error) => {
        toast.error(error.message)
      });
  }

  return (
    <section>
      <Toaster position="top-center" />

      
      <div className="bg-[#F6F5FF] py-10">
        <Container>
          <h2 className='text-[24px] md:text-[32px] lg:text-[36px] font-bold text-[#101750]'>
            My Account
          </h2>

          <div className="flex flex-wrap gap-2 mt-2 text-sm md:text-base">
            <Link to="/cart" className='hover:text-[#FB2E86]'>Cart .</Link>
            <span>Pages .</span>
            <span>Login</span>
          </div>
        </Container>
      </div>

     
      <div className="flex justify-center items-center px-4 my-16">
        <div className="w-full max-w-[500px] bg-[#8080800a] p-6 md:p-8 rounded-lg shadow">

          <h2 className='text-[24px] md:text-[28px] font-bold text-center'>
            Login
          </h2>

          <p className='text-sm md:text-base text-[#9096B2] text-center mt-2'>
            Please login using account detail below.
          </p>

          <form onSubmit={handlesingin} className="mt-6 space-y-4">

            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              placeholder='Email Address'
              className='w-full h-[45px] md:h-[52px] border px-3 outline-none rounded'
            />

            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              placeholder='Password'
              className='w-full h-[45px] md:h-[52px] border px-3 outline-none rounded'
            />

          <Link to="/checout">
            <button
              type="submit"
              className='w-full bg-[#FB2E86] text-white py-2 rounded hover:opacity-90 transition'
            >
              Sign In
            </button>
          </Link>

          </form>

          <p className='text-sm text-center text-[#9096B2] mt-4 cursor-pointer hover:underline'>
            Forgot your password?
          </p>

          <Link to="/registration">
            <p className='text-sm text-center text-[#9096B2] mt-2 hover:underline'>
              Don’t have an Account? Create account
            </p>
          </Link>

        </div>
      </div>

    </section>
  )
}

export default Login