import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "firebase",
  "nginx",
  "vercel",
  "jest",
  "cypress",
  "docker",
  "git",
  "github",
  "gitlab",
  "androidstudio",
  "sonarqube",
  "figma",
  "blender",
  "unity",
  "unrealengine",
  "kubernetes",
  "azure",
  "redux",
  "mobx",
  "graphql",
  "apollo",
  "webpack",
  "babel",
  "eslint",
  "prettier",
  "tailwindcss",
  "bootstrap",
  "materialui",
  "antdesign",
  "chakraui",
  "storybook",
  "jest",
  "enzyme",
  "playwright",
  "kalilinux",
  "angular",
  'svelte',
];

const IconCloudComponent = () => {
  return (
    <div className="relative">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudComponent;