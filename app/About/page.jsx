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
            Igniting{" "}
            <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
            <span className="text-accent">Innovation</span>
            <br />
            <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
            Inspiring Ideas
            <br />
            <span className="inline-block animate-[bounce_3s_ease-in-out_infinite] duration-700"></span>{" "}
            Impacting the Future
          </h2>

          <p className="text-sm md:text-base max-w-xl text-secondary mb-12">
            We empower students and startups to transform visionary ideas into impactful solutions through mentorship, resources, and real world opportunities, turning creativity into lasting change.
          </p>

          <button className="flex items-center space-x-2">
            <span>Scroll Down</span>
            <span className="text-lg animate-bounce">↓</span>
          </button>
        </main>
      </div>

      <div className=" max-w-7xl md:mx-auto flex items-center flex-col-reverse md:flex-row justify-center gap-10">
        <main className="flex flex-col md:w-1/2 md:pt-16 px-4 md:px-8 ">
          <h2 className="font-calsans text-left text-4xl md:text-4xl lg:text-5xl leading-loose md:mb-8">
            Who are we?
          </h2>
          <p className="text-sm md:text-base max-w-xl text-left text-secondary mb-6">
            We are the official Entrepreneurship Cell of BIT Sindri, a council dedicated to nurturing innovation, creativity, and entrepreneurial mindset within the student community. Our council works to create an environment where ideas are explored, refined, and developed into meaningful solutions. Through startup-oriented initiatives, idea-development programs, innovation-based learning experiences, and a range of activities such as workshops, seminars, mentorship sessions, idea-pitching events, hackathons, and other experiential opportunities, we help students gain the exposure and practical understanding needed to navigate the startup ecosystem.
          </p>
          <p className="text-sm md:text-base max-w-xl text-left text-secondary mb-6">
            We enable students to build the confidence and skills needed to navigate the startup ecosystem. We strive to inspire the next generation of founders, innovators, and leaders who can drive impactful change in technology, society, and industry. 
          </p>
        </main>
        <div className="md:w-1/2 px-4">
          <Image
            src="/images/incub.png"
            alt="Incubator"
            width={500}
            height={300}
            priority
            className="mx-auto"
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
            Our mission is to cultivate a vibrant entrepreneurial ecosystem that encourages innovation, supports idea development, and empowers students to develop their ideas into real, innovative and impactful solutions. We aim to provide mentorship, resources, and experiential learning opportunities that help young innovators grow into confident and capable startup leaders.
          </p>
        </div>
        <div className="px-4 md:px-16">
          <div className="p-3 rounded-full bg-black w-fit text-white">
            <LuLocateFixed />
          </div>
          <h2 className="text-2xl font-semibold mt-2">Vision</h2>
          <p className="text-secondary mt-2">
            Our vision is to build a dynamic entrepreneurial culture at BIT Sindri that sparks innovative thinking, strengthens entrepreneurial drive, and empowers students to build solutions that make a real difference. We aim to shape future founders and leaders who contribute meaningfully to technological advancement, industry growth, and societal progress. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
