"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
// import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";


export default function RegisterPage() {

    let router = useRouter();


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (registerData) => {
    let { email, name, password, photoUrl } = registerData;

    const { data, error } = await authClient.signUp.email({
      email, 
      password, 
      name, 
      image: photoUrl,
    },  { onSuccess: (ctx) => {
            router.push('/logIn')
            toast.success( 'You SuccessFully SignUp' );
            
        },
        onError: (ctx) => {
            
            
            toast.error(ctx.error.message)
        }
  })
   
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-[90%] md:w-150 flex-col gap-4 space-y-5 my-10 border p-10 rounded-xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center">Create a new Account</h2>
      {/* name */}
      <TextField isRequired name="name" type="text">
        <Label>Name</Label>
        <Input {...register("name")} placeholder="Enter your name" />
        <FieldError />
      </TextField>
      {/* Image Url */}
      <TextField isRequired name="name" type="url">
        <Label>Photo-Url(link)</Label>
        <Input {...register("photoUrl")} placeholder="Enter your Img Url" />
        <FieldError />
      </TextField>
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
          Register
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
      <div >
           Already have an account? <Link className="text-[blue]" href={'logIn'}>Login</Link>
      </div>
    </Form>
  );
}
