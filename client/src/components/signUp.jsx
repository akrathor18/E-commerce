import { React, useState , } from 'react';

import { ArrowRight, EyeOff, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import API from '../config/axios';
 function SignUp() {
    {document.title="Sign-Up"}
    const [showPass, setShowPass] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Dummy submit handler
    const onSubmit = async(data) => {
        console.log("Form submitted with data:", data);
        
        try {
            const response = await API.post("/users/register", {
                email: data.Email,
                password:data.Password,
                address:data.address,
                name:data.fName ,
                phone:data.number
              });
              console.log(response.data)
              console.log(response.data.token)
              localStorage.setItem("token", response.data.token);
              toast.success("resgister successfully!");
        
          } catch (error) {
        toast.error(error.response?.data);
          }
    };
    return (
        <section>
            <div className="grid grid-cols-1  bg-primary">
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">Sign up</h2>
                        <p className="mt-2 text-base text-text">
                            Already have an account?{' '}
                            <Link
                                to="/signin"
                                className="font-medium text-hover transition-all duration-200 hover:underline"
                            >
                                Sign In
                            </Link>
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="text-base font-medium text-text">
                                        Full Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            {...register('fName', {
                                                required: "This field is Required *",
                                                minLength: { value: 2, message: "Invalid name" },
                                                maxLength: { value: 30, message: "Name must be shorter than 30 characters" },
                                            })}
                                            className={`flex h-10 w-full text-text rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 ${errors.fName ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-gray-400"
                                            }` }
                                            type="text"
                                            placeholder="Full Name"
                                            id="name"
                                        />
                                        {errors.fName && (
                                            <span className="text-red-500 text-sm">
                                                {errors.fName.message}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-base font-medium text-text">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            {...register('Email', {
                                                required: "This field is Required *",
                                                minLength: { value: 8, message: "Invalid Email" },
                                            })}
                                            className={`flex h-10 w-full rounded-md border text-text border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 ${errors.Email ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-gray-400"
                                            }` }
                                            type="email"
                                            placeholder="Email"
                                            id="email"
                                        />
                                        {errors.Email && (
                                            <span className="text-red-500 text-sm">
                                                {errors.Email.message}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="number" className="text-base font-medium text-text">
                                        Phone Numbar
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            {...register("number", {
                                                required: "This field is Required *",
                                                minLength: { value: 10, message: "Phone number must be 10 digits" },
                                                maxLength: { value: 10, message: "Phone number must be 10 digits" },
                                                pattern: {
                                                    value: /^[0-9]{10}$/,
                                                    message: "Phone number must contain only digits",
                                                },
                                            })}
                                            onInput={(e) => {
                                                // Prevent non-digit input
                                                e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                                            }}
                                            className={`flex h-10 w-full rounded-md border text-text border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 ${errors.address ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-gray-400"
                                            } `}
                                            type="tel"
                                            placeholder="Phone Number"
                                            id="number"
                                            maxLength={10}
                                        />
                                        {errors.number && (
                                            <span className="text-red-500 text-sm">
                                                {errors.number.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="address" className="text-base font-medium text-text">
                                        Address
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            {...register("address", {
                                                required: "This field is Required *",
                                                minLength: {
                                                    value: 10,
                                                    message: "Address must be at least 10 characters long",
                                                },
                                                maxLength: {
                                                    value: 200,
                                                    message: "Address cannot exceed 200 characters",
                                                },
                                            })}
                                            className={`flex w-full rounded-md border text-text px-3 py-2 text-sm bg-secondary placeholder:text-gray-400 focus:outline-none focus:ring-1 ${errors.address ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-gray-400"
                                                }`}
                                            placeholder="Enter your address"
                                            id="address"
                                            rows={4} // Multiline input for address
                                            maxLength={200} // Restrict the maximum number of characters
                                            aria-invalid={!!errors.address}
                                        ></textarea>
                                        {errors.address && (
                                            <span className="text-red-500 text-sm">{errors.address.message}</span>
                                        )}
                                    </div>
                                </div>


                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="text-base font-medium text-text">
                                            Password
                                        </label>
                                    </div>
                                    <div className="mt-2 relative">
                                        <input
                                            {...register('Password', {
                                                required: "This field is Required *",
                                                minLength: { value: 8, message: "Password must be 8 characters long" },
                                            })}
                                            className="flex  h-10 w-full text-text rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                                            type={showPass ? 'text' : 'password'}
                                            placeholder="Password"
                                            id="password"
                                        />
                                        <div
                                            className="absolute right-3 top-2.5 cursor-pointer text-text"
                                            onClick={() => setShowPass(!showPass)}
                                        >
                                            {showPass ? <EyeOff /> : <Eye />}
                                        </div>
                                        {errors.Password && (
                                            <span className="text-red-500 text-sm">
                                                {errors.Password.message}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-primary px-3.5 py-2.5 font-semibold leading-7 text-text hover:text-hover hover:bg-secondary hover:border-accent border-2"
                                    >
                                        Create Account <ArrowRight className="ml-2" size={16} />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}


export default SignUp;