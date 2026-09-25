import Link from "next/link";
import React from "react";

const BannerButton = () => {
  return (
    <div>
      <Link
        href="#library"
        className="btn mt-5 rounded-2xl bg-[#B2DA00] text-black"
      >
        Browse Workouts
      </Link>
      <button></button>
    </div>
  );
};

export default BannerButton;
