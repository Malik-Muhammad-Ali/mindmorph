import Image from "next/image";
import Link from "next/link";
import IconCloudComponent from "../iconCloudComponent/IconCloudComponent";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Tooltip from "@/components/tooltip/Tooltip";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#FCF8F1] bg-opacity-30 py-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                <GradualSpacing text="A platform for learners" />
              </div>
              <h1 className="mt-4 text-4xl font-bold text-black sm:text-6xl xl:text-7xl">
                <GradualSpacing text="Connect & Learn" />
                <GradualSpacing text="from the AI" />
              </h1>
              <div className="mt-4 text-base text-black sm:text-xl">
                <GradualSpacing text="Grow your career fast with the right mentor." />
              </div>

              <div className="flex flex-row gap-x-2 mt-6">
                <a href="/roadmap">
                  <button className="group/button rounded-lg bg-[#222222] text-black">
                    <span className="block -translate-x-1 -translate-y-1 rounded-lg border-2 border-[#222222] bg-white px-4 py-1 text-sm font-medium tracking-tight transition-all group-hover/button:-translate-y-2 group-active/button:translate-x-0 group-active/button:translate-y-0">
                      <span className="flex items-center gap-x-2 text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-wand "
                        >
                          <path d="M15 4V2"></path>
                          <path d="M15 16v-2"></path>
                          <path d="M8 9h2"></path>
                          <path d="M20 9h2"></path>
                          <path d="M17.8 11.8 19 13"></path>
                          <path d="M15 9h0"></path>
                          <path d="M17.8 6.2 19 5"></path>
                          <path d="m3 21 9-9"></path>
                          <path d="M12.2 6.2 11 5"></path>
                        </svg>
                        Generate
                      </span>
                    </span>
                  </button>
                </a>
                <a href="/explore">
                  <button className="group/button rounded-lg bg-[#222222] text-black">
                    <span className="block -translate-x-1 -translate-y-1 rounded-lg border-2 border-[#222222] bg-white px-4 py-1 text-sm font-medium tracking-tight transition-all group-hover/button:-translate-y-2 group-active/button:translate-x-0 group-active/button:translate-y-0">
                      <span className="flex items-center gap-x-2 text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-telescope "
                        >
                          <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"></path>
                          <path d="m13.56 11.747 4.332-.924"></path>
                          <path d="m16 21-3.105-6.21"></path>
                          <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"></path>
                          <path d="m6.158 8.633 1.114 4.456"></path>
                          <path d="m8 21 3.105-6.21"></path>
                          <circle cx="12" cy="13" r="2"></circle>
                        </svg>
                        Explore
                      </span>
                    </span>
                  </button>
                </a>
              </div>

              <div className="mt-5 text-gray-600">
                <Tooltip />
              </div>
            </div>

            <div>
              <IconCloudComponent />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
