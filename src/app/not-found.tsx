import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#111318] px-5">
      <div className="text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B2DA00]">
          Page Not Found
        </p>

        <h1 className="text-8xl font-black text-white sm:text-9xl">404</h1>

        <p className="mx-auto mt-3 max-w-md text-gray-400">
          The page you are looking for doesn&apos;t exist or may have been
          moved.
        </p>

        <Link
          href="/"
          className="btn mt-7 rounded-xl border-0 bg-[#B2DA00] px-6 text-black hover:bg-[#c8ef19]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default notFound;
