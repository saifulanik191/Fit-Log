"use client";
import { WorkOutContext } from "@/context/WorkOutContext";
import Link from "next/link";
import React, { useContext } from "react";

const SavedButton = () => {
  const { savedLater } = useContext(WorkOutContext);

  return (
    <div>
      <Link href="/myplan">
        Saved{" "}
        <span className="badge badge-primary badge-sm rounded-4xl bg-transparent border-white font-bold">
          {savedLater.length}
        </span>
      </Link>
    </div>
  );
};

export default SavedButton;
