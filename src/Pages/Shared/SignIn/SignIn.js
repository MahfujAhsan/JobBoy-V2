import React, { useContext, useState } from 'react';
import FacebookLogo from "../../../assets/Logos/facebook.svg";
import GoogleLogo from "../../../assets/Logos/google.svg";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginImage from "../../../assets/BannerImages/LoginRightImage.png";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';

const SignIn = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signIn } = useContext(AuthContext);

    const [loginError, SetLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data)
        signIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message)
                SetLoginError(error.message)

            })
    }

    return (
        <section className='common__flex flex-col-reverse md:flex-row px-[20px] md:px-0 gap-[75px]'>
            <div className='flex-1'>
                <h3 className='text-[36px] text-[#444445] mb-[1rem] font-semibold'>Sign In</h3>
                <p className='text-[18px] font-semibold mb-[1rem]'>
                    Don’t you have an account on Jobboy? <Link className='text-[#f2413a]' to="/sign-up">Register</Link>
                </p>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form__input form-control w-full">
                        <label className="label">
                            <span className="label-text">E-Mail Address</span>
                        </label>
                        <input {...register("email", { required: "Email is Required*" })} type="email" />
                        {errors.email && <p className="text-[14px] mt-[15px] font-bold text-error">{errors.email.message}</p>}
                    </div>
                    <div className="form__input form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", { required: "Password is Required*", minLength: { value: 6, message: "6 char required" }, pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" } })} type="password" className='form__input' />
                        {errors.password && <p className="text-[14px] mt-[15px] font-bold text-error">{errors.password.message}</p>}
                    </div>
                    <div className='flex justify-between items-center mt-[1rem]'>
                        <div className='flex items-center gap-x-2'>
                            <input type="checkbox" className="checkbox" />
                            <span className='text-[14px] font-semibold text-[#9a9a9a]'>Remember Me</span>
                        </div>
                        <div className='text-[14px] text-[#3490dc]'>
                            <p>Forgot Your Password?</p>
                        </div>
                    </div>

                    <div>
                        {
                            loginError && <p className="text-center mt-[15px] text-error">{loginError}</p>
                        }
                    </div>

                    <input className='input input-bordered w-full cursor-pointer hover:bg-[#f2413a] hover:text-[#fff] font-semibold mt-[1rem]' type="submit" value="Login" />
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
                <img src={LoginImage} alt="LoginImage" />
            </div>
        </section>
    );
};

export default SignIn;