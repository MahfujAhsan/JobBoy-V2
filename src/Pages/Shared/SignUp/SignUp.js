import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FacebookLogo from "../../../assets/Logos/facebook.svg";
import GoogleLogo from "../../../assets/Logos/google.svg";
import LoginImage from "../../../assets/BannerImages/RegistrationRightImage.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);

  const [signUpError, setSignUpError] = useState('');

  const navigate = useNavigate();

  const handleSignUp = (data) => {
    setSignUpError('')
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        toast(`${user?.email} Created Successfully`)
        const userInfo = {
          displayName: data.name,
        }
        updateUser(userInfo)
        .then(() => { })
        .catch((error) => {
          console.log(error)
        })
      })
      .catch((error) => {
        setSignUpError(error.message);
      })
    navigate("/sign-in")
  };

  return (
    <section className='common__flex flex-col-reverse md:flex-row px-[20px] md:px-0 gap-[75px]'>
      <div className='flex-1'>
        <h3 className='text-[36px] text-[#444445] mb-[1rem] font-semibold'>Register</h3>
        <p className='text-[18px] font-semibold mb-[1rem]'>
          You already have an account on Jobboy? <Link className='text-[#f2413a]' to="/sign-in">Log In</Link>
        </p>
        <form onSubmit={handleSubmit(handleSignUp)}>

          <div className="form__input form-control w-full">
            <label className="label">
              <span className="label-text">Your full name</span>
            </label>
            <input {...register("name", { required: "Name is Required*" })} type="text" />
            {errors.name && <p className="text-[14px] mt-[15px] font-bold text-error">{errors.name.message}</p>}
          </div>

          <div className="form__input form-control w-full">
            <label className="label">
              <span className="label-text">Date of Birth</span>
            </label>
            <input {...register("dateOfBirth", { required: "Date of Birth is Required*" })} type="date" className='form__input' />
            {errors.dateOfBirth && <p className="text-[14px] mt-[15px] font-bold text-error">{errors.dateOfBirth.message}</p>}
          </div>

          <div className="form__input form-control w-full">
            <label className="label">
              <span className="label-text">E-mail</span>
            </label>
            <input {...register("email", { required: "Email is Required*" })} type="email" className='form__input' />
            {errors.email && <p className="text-[14px] mt-[15px] font-bold text-error">{errors.email.message}</p>}
          </div>

          <div className="form__input form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input {...register("password", { required: "Password is Required*", minLength: { value: 6, message: "6 char required" }, pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" } })} type="password" className='form__input' />
            {errors.password && <p className="text-[14px] mt-[15px] font-bold text-error">{errors.password.message}</p>}
          </div>

          <div className="form__input form-control w-full">
            <label className="label">
              <span className="label-text">Password again</span>
            </label>
            <input {...register("confirmPassword", { required: "Password is Required*", minLength: { value: 6, message: "6 char required" }, pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" } })} type="password" className='form__input' />
            {errors.confirmPassword && <p className="text-[14px] mt-[15px] font-bold text-error">{errors.confirmPassword.message}</p>}
          </div>

          {
            signUpError && <p className="text-error text-center mt-[5px]">{signUpError}</p>
          }

          <input className='input input-bordered w-full cursor-pointer hover:bg-[#f2413a] hover:text-[#fff] font-semibold mt-[1rem]' type="submit" value="Register" />
        </form>


        <div className="divider">or</div>

        <button className='common__flex gap-x-[15px] w-full hover:bg-[#212529] border-2 py-[12px] rounded-[8px] hover:text-white font-semibold'>
          <img src={FacebookLogo} width={25} alt="FacebookLogo" />
          Login with Facebook
        </button>

        <button className='common__flex gap-x-[15px] w-full hover:bg-[#212529] border-2 py-[12px] rounded-[8px] hover:text-white font-semibold mt-[1rem]'>
          <img src={GoogleLogo} width={25} alt="FacebookLogo" />
          Login with Facebook
        </button>

      </div>
      <div className='flex-1'>
        <img src={LoginImage} alt="" />
      </div>
    </section>
  );
};

export default SignUp;
