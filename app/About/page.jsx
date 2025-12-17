"use client";

import { LuLocateFixed } from "react-icons/lu";
import { FaMapPin } from "react-icons/fa";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="">
      <div className="min-h-[60vh] bg-foreground">
        <main className="flex flex-col items-center justify-center text-center py-20 px-4 md:px-8 lg:px-16">
          <h2 className="font-calsans text-5xl md:text-5xl lg:text-7xl md:leading-loose mb-8">
            Empowering{" "}
            <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
            <span className="text-accent">Design</span>
            <br />
            <span className="text-secondary">for</span>{" "}
            <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
            Design Startups
          </h2>

          <p className="text-sm md:text-base max-w-xl text-secondary mb-12">
            We make it easy for startups to launch, grow, and scale with clean,
            conversion focused designs—no delays, no drama.
          </p>

          <button className="flex items-center space-x-2">
            <span>Scroll Down</span>
            <span className="text-lg animate-bounce">↓</span>
          </button>
        </main>
      </div>

      <div className=" max-w-7xl md:mx-auto flex items-center flex-col-reverse md:flex-row justify-center gap-10">
        <main className="flex flex-col md:w-1/2 md:pt-16 px-4 md:px-8 ">
          <h2 className="font-calsans text-left text-4xl md:text-4xl lg:text-6xl font-bold leading-loose md:mb-8">
            Who are we?
          </h2>
          <p className="text-sm md:text-base max-w-xl text-left text-secondary mb-6">
            We are the official Entrepreneurial Cell of BIT Sindri. Our mission
            is to empower design startups with exceptional, conversion-focused
            web solutions that drive growth and success. We are the official
            Entrepreneurial Cell of BIT Sindri. Our mission is to empower design
            startups with exceptional, conversion-focused web solutions that
            drive growth and success.
          </p>
          <p className="text-sm md:text-base max-w-xl text-left text-secondary mb-6">
            We are the official Entrepreneurial Cell of BIT Sindri. Our mission
            is to empower design startups with exceptional, conversion-focused
            web solutions that drive growth and success. We are the official
            Entrepreneurial Cell of BIT Sindri. Our mission is to empower design
            startups with exceptional, conversion-focused web solutions that
            drive growth and success.
          </p>
        </main>
        <div className="md:w-1/2 px-4">
          <Image
            src="/images/aboutus.png"
            alt="Incubator"
            width={500}
            height={300}
            priority
            className="mx-auto max-h-[60vh] object-contain"
          />
        </div>
      </div>

      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 mx-auto gap-8 md:gap-20 mt-8 mb-16">
        <div className="px-4 md:px-16">
          <div className="p-3 rounded-full bg-black w-fit text-white">
            <FaMapPin />
          </div>
          <h2 className="text-2xl font-semibold mt-2">Mission</h2>
          <p className="text-secondary mt-2">
            Our mission is to empower design startups with exceptional,
            conversion-focused web solutions that drive growth and success.
          </p>
        </div>
        <div className="px-4 md:px-16">
          <div className="p-3 rounded-full bg-black w-fit text-white">
            <LuLocateFixed />
          </div>
          <h2 className="text-2xl font-semibold mt-2">Vision</h2>
          <p className="text-secondary mt-2">
            To be the leading catalyst for design innovation, transforming
            startups into industry leaders through strategic web development and
            unparalleled digital experiences.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl md:mx-auto ">
          <h1 className="font-calsans text-left text-4xl md:text-4xl lg:text-4xl leading-loose md:mb-8">
            Celebrating Success
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {spotlightItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Subtitle overlay (if exists) */}
                  {item.subtitle && (
                    <div className="absolute top-4 right-4 left-4 text-white text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.subtitle}
                    </div>
                  )}
                </div>

                {/* Title Section */}
                <div className="absolute bottom-0 left-0 right-0 bg-black p-4 transform translate-y-0 transition-all duration-300">
                  <h3 className="text-white text-sm md:text-base font-semibold leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

const spotlightItems = [
  {
    id: 1,
    image: "/images/incub.png",
    title: "IIC BIT Sindri achieved 4 star rating in 2022-23",
    subtitle:
      "Awarded by Ministry of Education's Innovation Cell (MIC) for outstanding performance in fostering innovation and entrepreneurship.",
  },
  {
    id: 2,
    image: "/images/incub.png",
    title: "IIC BIT Sindri achieved 4 star rating in 2022-23",
    subtitle:
      "Awarded by Ministry of Education's Innovation Cell (MIC) for outstanding performance in fostering innovation and entrepreneurship.",
  },
  {
    id: 3,
    image: "/images/incub.png",
    title: "IIC BIT Sindri achieved 4 star rating in 2022-23",
    subtitle: "",
  },
  {
    id: 4,
    image: "/images/incub.png",
    title: "IIC BIT Sindri achieved 4 star rating in 2022-23",
    subtitle: "",
  },
];
