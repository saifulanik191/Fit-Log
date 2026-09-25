import Image from "next/image";
import React from "react";
import bannerimg from "@/assets/banner.png";
import BannerButton from "./BannerButton";
const Banner = () => {
  return (
    <section>
      <div className="container mx-auto my-5 flex min-h-[700px] flex-col items-center justify-around gap-8 rounded-2xl bg-[#323741] px-5 py-10 sm:my-8 sm:px-8 lg:my-10 lg:flex-row lg:px-12">
        <div className="text-center lg:text-left">
          <h2 className="uppercase font-semibold text-[#B2DA00]">
            Workout Library
          </h2>

          <h2 className="my-4 text-4xl font-bold leading-tight sm:text-5xl lg:my-6 lg:text-6xl lg:leading-[3rem]">
            Train with intent. Log <br />
            every set.
          </h2>

          <p>
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            <br /> lock it into today's plan, and watch the week's work add
            <br /> up.
          </p>

          <BannerButton />
        </div>

        <div>
          <Image
            src={bannerimg}
            alt="hero img"
            height={500}
            width={450}
            className="h-auto w-[280px] sm:w-[350px] lg:w-[450px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
