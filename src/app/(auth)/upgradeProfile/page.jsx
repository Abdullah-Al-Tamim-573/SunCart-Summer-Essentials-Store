"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpgradeProfilePage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let handleUpgradeProfile = async (upgradeProfileData) => {
    let { name, photoUrl } = upgradeProfileData;

    await authClient.updateUser({
      image: photoUrl,
      name
    });
    toast.success('Success fully upgrade your profile')
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit(handleUpgradeProfile)}
        className="flex w-[90%] md:w-150 flex-col gap-4 space-y-5 my-10 border p-10 rounded-xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center">Upgrade Your Profile</h2>

        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>

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

        <div className="flex gap-2">
          <Button
            className={"w-full bg-linear-to-r from-[#fc932c] to-[#fd5c1c]"}
            type="submit"
          >
            <Check />
            Upgrade Profile
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpgradeProfilePage;
