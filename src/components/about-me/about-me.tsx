"use client";
import ModelViewer from "@/components/about-me/model-viewer";
import { Button } from "@/components/ui/button";
import data from "@/data/data.json";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { about_me } = data;
  const networks = [
    {
      name: "Github",
      icon: IconBrandGithub,
      href: "https://github.com/zvici",
    },
    {
      name: "Email",
      icon: IconMail,
      href: "mailto:nhatranthanh113@gmail.com",
    },
    {
      name: "Facebook",
      icon: IconBrandFacebook,
      href: "https://www.facebook.com/zvici",
    },
  ];

  const expertise = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Typescript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "NestJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Aws",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Jenkins",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const animateX = containerRef.current.querySelectorAll(".animate-x");
    const tl = gsap.timeline();
    tl.fromTo(
      animateX,
      { opacity: 0, x: -500, scale: 1 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        stagger: 0.2,
        ease: "power2.out",
        duration: 0.5,
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="border-b border-gray-700">
      <div className="mx-auto grid max-w-8xl grid-cols-12 px-2 xs:px-6 sm:px-10 xl:px-40">
        <div className="col-span-4 border-x border-gray-700 p-10">
          <p className="text-5xl font-bold animate-x">About me</p>
          <p className="mt-4 text-lg text-gray-400 animate-x">{about_me[0]}</p>
          <p className="mt-4 text-lg text-gray-400 animate-x">{about_me[1]}</p>
          <div className="h-44 flex justify-end items-end animate-x">
            <div className="flex flex-col items-end">
              <p className="text-sm font-bold text-gray-200">FIND AT ME</p>
              <div className="mb-4 font-medium text-gray-50">
                <a
                  className="text-gray-1000 underline decoration-green-400 dark:text-white"
                  href={data.email}
                >
                  {data.email}
                </a>
              </div>
              <div className="flex gap-2">
                {networks.map((network) => (
                  <Button
                    key={network.name}
                    className="p-0 cursor-pointer"
                    size="lg"
                    onClick={() => window.open(network.href)}
                  >
                    <network.icon className="p-0" size={64} />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 border-x border-gray-700">
          <ModelViewer />
        </div>
        <div className="col-span-4 border-r border-gray-700 p-10">
          <p className="text-5xl font-bold animate-x">Expertise</p>
          <div className="flex flex-wrap gap-4 mt-8">
            {expertise.map((item) => (
              <div
                key={item.name}
                className="flex px-3 py-1.5 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200 cursor-pointer animate-x"
              >
                <Image
                  width={24}
                  height={24}
                  src={item.icon}
                  alt={item.name}
                  className="mr-2"
                />
                <p className="text-sm font-medium text-gray-30">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
