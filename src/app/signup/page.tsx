"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import "./signup.css";

const Signup = () => {
  const router = useRouter();
  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[110vh]">
      <div className="cl-rootBox cl-signIn-root 🔒️ cl-internal-phfxlr">
        <div className="cl-card cl-signIn-start cl-internal-1a2d2gv">
          <div className="cl-logoBox cl-internal-vqjo9j">
            <a href="/" aria-label="Mind Morph">
              <svg
                width="50"
                height="50"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_555_93)">
                  <rect x="2" y="2" width="26" height="26" fill="black" />
                </g>
                <rect
                  x="0.5"
                  y="0.5"
                  width="25"
                  height="25"
                  fill="white"
                  stroke="black"
                />
                <path
                  d="M5.89 6.806C5.89 6.14 6.412 5.6 7.078 5.6C7.564 5.6 7.96 5.888 8.158 6.284L13.108 16.13L18.04 6.266C18.148 6.068 18.31 5.888 18.49 5.78C18.67 5.672 18.886 5.6 19.12 5.6C19.21 5.6 19.3 5.618 19.39 5.636C19.48 5.654 19.57 5.69 19.642 5.744C19.84 5.834 20.002 5.996 20.128 6.158C20.236 6.356 20.308 6.572 20.308 6.806V18.812C20.308 19.46 19.768 20 19.12 20C18.454 20 17.914 19.46 17.914 18.812V11.9L14.188 19.352C14.134 19.46 14.062 19.568 13.972 19.64C13.882 19.748 13.774 19.82 13.648 19.874C13.486 19.964 13.288 20 13.108 20C12.928 20 12.748 19.964 12.568 19.874C12.46 19.82 12.352 19.748 12.262 19.64C12.172 19.568 12.1 19.46 12.046 19.352L8.284 11.864V18.812C8.284 19.46 7.744 20 7.078 20C6.43 20 5.89 19.46 5.89 18.812V6.806Z"
                  fill="black"
                />
                <defs>
                  <filter
                    id="filter0_i_555_93"
                    x="2"
                    y="2"
                    width="26"
                    height="30"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_555_93"
                    />
                  </filter>
                </defs>
              </svg>
            </a>
          </div>
          <div className="cl-header cl-internal-dtblrc">
            <h1
              className="cl-headerTitle cl-internal-13pijlz"
              data-localization-key="signIn.start.title"
            >
              Create your account
            </h1>
            <p
              className="cl-headerSubtitle cl-internal-1ow1n0l"
              data-localization-key="signIn.start.subtitle"
            >
              to continue to Mind Morph
            </p>
          </div>
          <div className="cl-main cl-internal-xk295g">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="example@gmail.com" type="email" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="" type="password" />
            </LabelInputContainer>
            <button className="cl-socialButtonsBlockButton cl-socialButtonsBlockButton__github 🔒️ cl-internal-1ih93q2 bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
              <div className="">
                <span
                  className="cl-socialButtonsBlockButtonText cl-socialButtonsBlockButtonText__github 🔒️ cl-internal-1jg44cw"
                  data-localization-key="socialButtonsBlockButton"
                >
                  Sign up
                </span>
              </div>
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-4 h-[1px] w-full" />
          </div>
          <div className="cl-footer cl-internal-18aek0g">
            <div className="cl-footerAction cl-footerAction__signIn cl-internal-n0ak4e">
              <span
                className="cl-footerActionText cl-internal-5o2jen"
                data-localization-key="signIn.start.actionText"
              >
                Already Have an Account?
              </span>
              <button
                className="cl-footerActionLink cl-internal-v22442"
                onClick={() => router.replace("/signin")}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
