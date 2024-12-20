import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Meteors } from "@/components/ui/meteors";

const DetailSection = () => {
  return (
    <div className="bg-white py-4 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-600">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            No structured learning plan? No problem.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We help you generate a structured learning roadmap for any topic you
            want to learn. Just enter the topic and let us handle the rest.
          </p>
        </div>
      </div>
      {/* Lower Section */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {/* Courses Card */}
          <div className="relative pl-9">
            <div className="w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </div>

                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  Generate In-Depth Courses
                </h1>

                <ul className="font-normal text-base text-slate-500 mb-4 relative z-50 list-none p-0">
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-none" />
                    <span className="font-medium">
                      Gain access to in-depth knowledge for specific topics.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-none" />
                    <span className="font-medium">
                      Get curated links from trusted sources and YouTube.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-none" />
                    <span className="font-medium">
                      Learn at your own speed with organized content.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-none" />
                    <span className="font-medium">
                      Bookmark and revisit key points or resources effortlessly.
                    </span>
                  </li>
                </ul>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>
          </div>
          {/* Roadmaps Card */}
          <div className="relative pl-9">
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </div>

                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  Personalized Roadmaps
                </h1>

                <ul className="font-normal text-base text-slate-500 mb-4 relative z-50 list-none p-0">
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-none" />
                    <span className="font-medium">
                      Receive a comprehensive learning strategy for any topic.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-none" />
                    <span className="font-medium">
                      Follow a clear sequence of topics to study.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-none" />
                    <span className="font-medium">
                      Know exactly how to proceed at each stage.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-none" />
                    <span className="font-medium">
                      Revise roadmaps as you grow and your goals evolve.
                    </span>
                  </li>
                </ul>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>
          </div>
          {/* Quizes Card */}
          <div className="relative pl-9">
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </div>

                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  Skill Assessment Quizzes
                </h1>

                <ul className="font-normal text-base text-slate-500 mb-4 relative z-50 list-none p-0">
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-none" />
                    <span className="font-medium">
                      Generate quizzes based on your learning level and topic.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-none" />
                    <span className="font-medium">
                      Understand where you need to improve with detailed
                      feedback.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-none" />
                    <span className="font-medium">
                      Gain valuable insights into your knowledge and growth.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-none" />
                    <span className="font-medium">
                      Unlock achievements and milestones to keep you motivated.
                    </span>
                  </li>
                </ul>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default DetailSection;
