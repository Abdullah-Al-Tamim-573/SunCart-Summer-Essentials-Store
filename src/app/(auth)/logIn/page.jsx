"use client";

import { useForm } from "react-hook-form";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const LogInPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let onClick = async (logInData) => {
    let { email, password } = logInData;

    const { data, error } = await authClient.signIn.email({
      email,

      password,

      callbackURL: "/",
    });

    if (data) {
      toast.success(data.user.name, "loged in successfully");
    } else if (error) {
      toast.error(error.message);
    }
  };


  let handleSignIn = async() => {
      const data = await authClient.signIn.social({
       provider: "google",
  });

  }

  return (
    <div>
      <Form
        onSubmit={handleSubmit(onClick)}
        className="flex w-[90%] md:w-130 flex-col gap-4 space-y-5 my-10 border p-10 rounded-xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center">Log In Your Account</h2>

        <button
        onClick={handleSignIn}
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Login with Google</p>
        </button>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        {/* email  */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input {...register("email")} placeholder="john@example.com" />
          <FieldError />
        </TextField>
        {/* password */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input {...register("password")} placeholder="Enter your password" />

          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button
            className={
              "w-full btn btn-primary bg-linear-to-r from-[#fc932c] to-[#fd5c1c]"
            }
            type="submit"
          >
            <Check />
            Log In
          </Button>
        </div>
        <div className="relative -top-3">
          Don't have an account?{" "}
          <Link className="text-[blue]" href={"register"}>
            Register
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default LogInPage;
