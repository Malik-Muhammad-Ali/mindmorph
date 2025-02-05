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
  // "cypress",
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
  // "mobx",
  "graphql",
  "apollo",
  // "webpack",
  "babel",
  "eslint",
  // "prettier",
  "tailwindcss",
  // "bootstrap",
  "materialui",
  // "antdesign",
  // "chakraui",
  // "storybook",
  "jest",
  "enzyme",
  // "playwright",
  "kalilinux",
  "angular",
  "svelte",
];

export default function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex items-center justify-center">
      <IconCloud images={images} />
    </div>
  );
}
