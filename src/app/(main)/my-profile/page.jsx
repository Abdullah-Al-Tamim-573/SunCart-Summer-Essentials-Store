"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyProfilePage = () => {
  // const { data: session } = authClient.useSession()
  const { data: session } = authClient.useSession();
  console.log(session);

  // let {image, name, email} = session;

  return (
    <>
      {session ? (
        <>
          <div className="flex justify-center items-center my-20">
            <div className="space-y-4">
              <Image
                className="rounded-full"
                alt={"user image"}
                src={session?.user?.image}
                width={300}
                height={300}
              ></Image>
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold">
                  {session?.user?.name}
                </h2>
              </div>
              <div className="text-center">
                <h2 className="text-[19px] md:text-xl font-semibold">
                  {session?.user?.email}
                </h2>
              </div>

              <div className="text-center">
                <Link
                  href={"/upgradeProfile"}
                  className="text-[blue] btn   text-[17px] md:text-[18px]"
                >
                  Upgrade Profile
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center my-10 text-4xl font-bold">User not available</div>
      )}
    </>
  );
};

export default MyProfilePage;
