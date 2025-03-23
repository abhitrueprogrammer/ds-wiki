import SignIn from "@/components/signin";


import React from "react";

export default function Login() {


  return (
    <div className="flex min-h-dvh  justify-center p-4 sm:p-6">
      <div className="flex w-full flex-col items-center  sm:max-w-sm">
        <div className="relative flex items-center justify-center rounded-lg font-extrabold text-4xl p-3 shadow-lg ring-1 ring-black/5">
          Darksouls Admin Login
        </div>

        <div className="mt-10 w-full">
          <div className="gap-2 ">
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}
