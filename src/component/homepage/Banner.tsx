import Image from "next/image";
import React from "react";
import bannerimg from "@/assets/banner.png";
const Banner = () => {
  return (
    <section>
      <div className="container mx-auto flex justify-around items-center my-10 bg-[#323741] rounded-2xl h-[554]">
        <div>
          <h2 className="uppercase font-semibold text-[#B2DA00]">
            Workout Library
          </h2>
          <h2 className="font-bold text-5xl/15 mb-5">
            Train with intent. Log <br />
            every set.
          </h2>
          <p>
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            <br /> lock it into today's plan, and watch the week's work add
            <br /> up.
          </p>
          <button className="btn bg-[#B2DA00] text-black rounded-2xl mt-5">
            Browse Workouts
          </button>
        </div>

        <div>
          <Image src={bannerimg} alt="hero img" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
