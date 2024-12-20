"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import "./signin.css";

const Signin = () => {
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
              <img
                crossOrigin="anonymous"
                srcSet="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJlSnZ2MHhKc0hnU1ZtMjdpYlZOVUhrUE41WiJ9?width=200 1x,https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJlSnZ2MHhKc0hnU1ZtMjdpYlZOVUhrUE41WiJ9?width=400 2x"
                src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJlSnZ2MHhKc0hnU1ZtMjdpYlZOVUhrUE41WiJ9?width=400"
                className="cl-logoImage 🔒️ cl-internal-1yihf81"
                alt="AI Roadmap Generator"
              />
            </a>
          </div>
          <div className="cl-header cl-internal-dtblrc">
            <h1
              className="cl-headerTitle cl-internal-13pijlz"
              data-localization-key="signIn.start.title"
            >
              Sign in
            </h1>
            <p
              className="cl-headerSubtitle cl-internal-1ow1n0l"
              data-localization-key="signIn.start.subtitle"
            >
              to continue to Mind Morph
            </p>
          </div>
          <div className="cl-main cl-internal-xk295g">
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
                    Sign in
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
                Don't Have an Account?
              </span>
              <button
                className="cl-footerActionLink cl-internal-v22442"
                onClick={() => router.replace("/signup")}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

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
