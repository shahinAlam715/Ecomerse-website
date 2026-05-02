import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import Container from './Container';
import { Toaster, toast } from 'react-hot-toast';

const Registration = () => {

  let navigate = useNavigate()
  const auth = getAuth();

  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser).then(() => {
          setemail("");
          setpassword("");
          toast.success("Account Created! Check your email");
          navigate('/login')
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section>
      <Toaster position="top-center" />

     
      <div className="bg-[#F6F5FF] py-10">
        <Container>
          <h2 className="text-[24px] md:text-[32px] lg:text-[36px] font-bold text-[#101750]">
            Registration
          </h2>

          <div className="flex flex-wrap gap-2 mt-2 text-sm md:text-base">
            <Link to="/" className="hover:text-[#FB2E86]">Home .</Link>
            <span>Pages .</span>
            <span>Registration</span>
          </div>
        </Container>
      </div>

      
      <div className="flex justify-center items-center px-4 my-16">
        <div className="w-full max-w-[500px] bg-[#8080800a] p-6 md:p-8 rounded-lg shadow">

          <h2 className="text-[24px] md:text-[28px] font-bold text-center">
            Create Account
          </h2>

          <p className="text-sm md:text-base text-[#9096B2] text-center mt-2">
            Please fill all information below
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">

           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name"
                className="w-full h-[45px] md:h-[52px] border px-3 rounded outline-none" />

              <input type="text" placeholder="Last Name"
                className="w-full h-[45px] md:h-[52px] border px-3 rounded outline-none" />
            </div>

           
            <input type="number" placeholder="Phone Number"
              className="w-full h-[45px] md:h-[52px] border px-3 rounded outline-none" />

           
            <input type="text" placeholder="Address"
              className="w-full h-[45px] md:h-[52px] border px-3 rounded outline-none" />

           
            <input
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              placeholder="Email Address"
              className="w-full h-[45px] md:h-[52px] border px-3 rounded outline-none"
            />

            
            <input
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full h-[45px] md:h-[52px] border px-3 rounded outline-none"
            />

            
            <button
              type="submit"
              className="w-full bg-[#FB2E86] text-white py-2 rounded hover:opacity-90 transition"
            >
              Register
            </button>

          </form>

         
          <Link to="/login">
            <p className="text-sm text-center text-[#9096B2] mt-4 hover:underline">
              Already have an account? Login
            </p>
          </Link>

        </div>
      </div>

    </section>
  )
}

export default Registration