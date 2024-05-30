"use client";
import { KeyRound } from "lucide-react";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
// actions
import { login } from "@/actions/Register";
import { toast } from "react-hot-toast";
import SubButton from "@/components/subButton/SubButton";
import { useRouter } from "next/navigation";

export default function Register() {
  const [state, formAction] = useFormState(login, {});
  const router = useRouter();
  useEffect(() => {
    if (state?.error) {
      toast.error(state?.error);
    } else if (state?.success) {
      toast.success(state?.success);
      router.push("/");
    }
  }, [state, router]);

  return (
    <div className="flex items-center justify-center h-screen mx-auto ">
      <form
        action={formAction}
        className="flex flex-col gap-4 p-12 bg-black rounded-2xl "
      >
        <label className="flex items-center gap-2 input input-bordered">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            name="Email"
          />
        </label>

        <label className="flex items-center gap-2 input input-bordered">
          <KeyRound className="size-4" />
          <input
            type="password"
            className="grow"
            placeholder="password"
            name="password"
          />
        </label>

        <SubButton title="login" />
      </form>
    </div>
  );
}
