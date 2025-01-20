import { React, useState } from 'react';
import { ArrowRight, EyeOff, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

export function SignIn() {
    const [showPass, setShowPass] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Dummy submit handler
    const onSubmit = (data) => {
        console.log("Form submitted with data:", data);
        alert("Sign-in successful!");
    };

    return (
        <section>
            <div className="grid grid-cols-1 text-text ">
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">Sign in</h2>
                        <p className="mt-2 text-sm text-gray-100">
                            Don&apos;t have an account?{' '}
                            <Link
                                to={'/signup'}
                                className="font-semibold text-hover transition-all duration-200 hover:underline"
                            >
                                Create a free account
                            </Link>
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                            <div className="space-y-5">
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
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                                            type="email"
                                            placeholder="Email"
                                        />
                                        {errors.Email && (
                                            <span className="text-red-500 text-sm">
                                                {errors.Email.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="text-base font-medium text-text">
                                            Password
                                        </label>
                                        <a
                                            href="#"
                                            className="text-sm font-semibold text-hover hover:underline"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div className="mt-2 relative text-text">
                                        <input
                                            {...register('Password', {
                                                required: "This field is Required *",
                                            })}
                                            className="mt-1  block w-full rounded-md border bg-primary border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                                            type={showPass ? 'text' : 'password'}
                                            placeholder="Password"
                                        />
                                        <div
                                            className="absolute right-3 top-2.5 cursor-pointer"
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
                                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:text-hover"
                                    >
                                        Get started <ArrowRight className="ml-2" size={16} />
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
