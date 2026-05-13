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

const LogInPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let onClick = async (logInData) => {

    let {email, password} =  logInData;

    const { data, error } = await authClient.signIn.email({
      email,

      password,

      callbackURL: "/"
    })

    console.log(data, 'data');
    console.log(error, 'error')
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit(onClick)}
        className="flex w-80 md:w-96 flex-col gap-4 space-y-5 my-10 border p-10 rounded-xl mx-auto"
      >
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
            className={"w-full bg-linear-to-r from-[#fc932c] to-[#fd5c1c]"}
            type="submit"
          >
            <Check />
            Log In
          </Button>
          <Button type="reset" variant="secondary">
            Reset
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
