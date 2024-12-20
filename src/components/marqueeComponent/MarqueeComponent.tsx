import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const Courses = [
  {
    name: "Backend",
    views: 1500,
    time: 25,
  },
  {
    name: "Frontend",
    views: 1800,
    time: 20,
  },
  {
    name: "DevOps",
    views: 1100,
    time: 30,
  },
  {
    name: "Machine Learning",
    views: 2000,
    time: 35,
  },
  {
    name: "Web Development",
    views: 1700,
    time: 28,
  },
  {
    name: "UI/UX Design",
    views: 1600,
    time: 22,
  },
  {
    name: "Data Science",
    views: 1900,
    time: 40,
  },
  {
    name: "Mobile Development",
    views: 1400,
    time: 27,
  },
  {
    name: "BlockChain Development",
    views: 1300,
    time: 33,
  },
  {
    name: "Artificial Intelligence",
    views: 2100,
    time: 45,
  },
];

const firstRow = Courses.slice(0, Courses.length / 2);
const secondRow = Courses.slice(Courses.length / 2);

const MarqueeCard = ({
  name,
  views,
  time,
}: {
  name: string;
  views: number;
  time: number;
}) => {
  return (
    <figure className="relative w-48 sm:w-64 cursor-pointer overflow-hidden rounded border-2 border-[#000000a6] p-2 shadow-[6px_6px_0px_1px_#000000a6] flex flex-col justify-between h-20">
      <p className="font-semibold">{name}</p>
      <div className="flex justify-between text-xs text-slate-500">
        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-eye "
          >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          {views}
        </div>
        <span>{time}m ago</span>
      </div>
    </figure>
  );
};

const MarqueeComponent = () => {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden bg-background">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((course) => (
          <MarqueeCard key={course.name} {...course} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((course) => (
          <MarqueeCard key={course.name} {...course} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default MarqueeComponent;
