"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Input from "./Input";

type AuthMode = "login" | "register" | "forgetPassword";

interface AuthFormProps {
  mode: AuthMode;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const isRegister = mode === "register";
  const isForgetPassword = mode === "forgetPassword";

  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        <Image
          src="/FINEbank.IO.png"
          alt="Finebank Logo"
          width={300}
          height={25}
          className="mb-6 "
          priority
        />
        {isRegister && (
          <h4 className="font-bold text-2xl">Create an account</h4>
        )}
        {isForgetPassword && (
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-2xl">Forgot Password?</h4>
            <p className="text-lg text-gray-7 flex text-center mt-4">
              Enter your email addrese to get the
              <br />
              password reset link.
            </p>
          </div>
        )}

        <form className="w-full">
          {isRegister && (
            <div className="mb-4">
              <Input type="text" name="name" placeholder="John Doe" />
            </div>
          )}
          <div className="mb-4">
            <Input type="email" name="email" placeholder="johndoe@email.com" />
          </div>

          {!isForgetPassword && (
            <div className="mb-4">
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="text-base sm:text-lg block"
                >
                  Password
                </label>
                {!isRegister && (
                  <Link
                    href="/auth/forget-password"
                    className="text-primary cursor-pointer"
                  >
                    Forget Password?
                  </Link>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  className="border border-gray-2 rounded-md px-3 py-2.5 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-5 hover:text-gray-7"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          )}

          {!isForgetPassword ? (
            isRegister ? (
              <div className="flex items-center gap-2 mt-2">
                <p className="text-gray-5">By continuing, you agree to our</p>
                <p className="text-primary">terms of service. </p>
              </div>
            ) : (
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-5 h-5 accent-primary cursor-pointer "
                />
                <label
                  htmlFor="remember"
                  className="text-sm sm:text-base cursor-pointer"
                >
                  Keep me signed in
                </label>
              </div>
            )
          ) : (
            ""
          )}

          <Link
            href="/dashboard/overview"
            type="submit"
            className="bg-primary cursor-pointer text-text-light rounded-md px-4 py-2.5 mt-4 w-full hover:bg-primary-hover transition flex justify-center items-center font-medium text-base sm:text-lg"
          >
            {isRegister
              ? "Sign Up"
              : isForgetPassword
              ? " Password Reset"
              : "Login"}
          </Link>
        </form>

        {!isForgetPassword && (
          <>
            <div className="flex items-center w-full my-6">
              <div className="flex-1 h-px bg-gray-3" />
              <span className="px-4 text-sm text-gray-5 whitespace-nowrap">
                or sign in with
              </span>
              <div className="flex-1 h-px bg-gray-3" />
            </div>

            <button className="flex justify-center cursor-pointer bg-gray-3 text-gray-7 rounded-md px-4 py-2.5 mb-4 w-full transition">
              <Image
                src="/google-icon.png"
                alt="Google Icon"
                width={25}
                height={20}
                className="inline-block mr-2 align-middle"
              />
              <p>Continue with Google</p>
            </button>
          </>
        )}
        {isRegister ? (
          <Link
            href="/auth/login"
            className="text-sm sm:text-base text-primary font-semibold flex"
          >
            <p className="text-gray-5">Already have an account? &nbsp;</p>
            <p className="text-primary"> Sign in here</p>
          </Link>
        ) : isForgetPassword ? (
          <Link
            href="/auth/login"
            className="text-sm text-gray-5 sm:text-base font-semibold"
          >
            Back to login
          </Link>
        ) : (
          <Link
            href="/auth/register"
            className="text-sm sm:text-base text-primary font-semibold"
          >
            Create an account
          </Link>
        )}
      </div>
    </section>
  );
};
export default AuthForm;
