"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Image
            alt="Mind Morph"
            src="/assets/logo.png"
            width={100}
            height={100}
            className="h-8 w-auto"
          />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#courses" className="text-sm font-semibold text-gray-900">
            Courses
          </a>
          <a href="#roadmaps" className="text-sm font-semibold text-gray-900">
            Roadmaps
          </a>
          <a href="#quizzes" className="text-sm font-semibold text-gray-900">
            Quizzes
          </a>
          <a href="#chats" className="text-sm font-semibold text-gray-900">
            Chats
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={() => router.push("/signin")}
            className="group/button rounded-lg bg-[#222222] text-black"
          >
            <span className="block -translate-x-1 -translate-y-1 rounded-lg border-2 border-[#222222] bg-white px-4 py-1 text-sm font-medium tracking-tight transition-all group-hover/button:-translate-y-2 group-active/button:translate-x-0 group-active/button:translate-y-0">
              Sign in
            </span>
          </button>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Image
              alt="Mind Morph"
              src="/assets/logo.png"
              width={100}
              height={100}
              className="h-8 w-auto"
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#courses"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Courses
                </a>
                <a
                  href="#roadmaps"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Roadmaps
                </a>
                <a
                  href="#quizzes"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Quizzes
                </a>
                <a
                  href="#chats"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Chats
                </a>
              </div>
              <div className="py-6">
                <button
                  onClick={() => router.push("/signin")}
                  className="group/button rounded-lg bg-[#222222] text-black"
                >
                  <span className="block -translate-x-1 -translate-y-1 rounded-lg border-2 border-[#222222] bg-white px-4 py-1 text-sm font-medium tracking-tight transition-all group-hover/button:-translate-y-2 group-active/button:translate-x-0 group-active/button:translate-y-0">
                    Sign in
                  </span>
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
