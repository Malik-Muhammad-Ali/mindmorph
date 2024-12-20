"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "https://avatars.githubusercontent.com/u/16860528",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "https://avatars.githubusercontent.com/u/20110627",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "https://avatars.githubusercontent.com/u/106103625",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "https://avatars.githubusercontent.com/u/59228569",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "https://avatars.githubusercontent.com/u/59442788",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "https://avatars.githubusercontent.com/u/89768406",
  },
];

const Tooltip = () => {
  return (
    <div className="flex flex-row mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
};

export default Tooltip;
