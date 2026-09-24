"use client";
import { WorkOutContext } from "@/context/WorkOutContext";
import Link from "next/link";
import React, { useContext } from "react";

const PlanButton = () => {
  const { todaysPlan } = useContext(WorkOutContext);

  return (
    <div>
      <Link href="/myplan">
        plan{" "}
        <span className="badge badge-primary badge-sm rounded-4xl bg-[#C4F103] text-black font-bold">
          {todaysPlan.length}
        </span>
      </Link>
    </div>
  );
};

export default PlanButton;
