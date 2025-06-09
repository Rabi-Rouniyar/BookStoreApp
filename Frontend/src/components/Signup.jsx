import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <>
      <div className='flex h-screen items-center justify-center modal modal-open'>
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

              <h3 className="font-bold text-lg">Signup</h3>

              {/* Name */}
              <div>
                <span>Name</span><br />
                <input
                  type="text"
                  placeholder="enter your full name"
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("name", { required: true })}
                /><br />
                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              {/* Email */}
              <div>
                <span>Email</span><br />
                <input
                  type="email"
                  placeholder="enter your email"
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("email", { required: true })}
                /><br />
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              {/* Password */}
              <div className='mt-2'>
                <span>Password</span><br />
                <input
                  type="text"
                  placeholder="enter your password"
                  className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("password", { required: true })}
                /><br />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              {/* Buttons */}
              <div className='flex justify-around mt-4 items-center'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                  Signup
                </button>
                <div className='text-xl'>
                  Have account?{" "}
                  <button
                    type="button"
                    className='underline text-blue-500 cursor-pointer'
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ✅ Move Login component OUTSIDE the form & <p> */}
      <Login />
    </>
  );
}

export default Signup;
