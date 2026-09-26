"use client";

import SavedCard from "@/component/myplan/SavedCard";
import TodaysCard from "@/component/myplan/TodaysCard";
import { WorkOutContext } from "@/context/WorkOutContext";
import { IworkOuts } from "@/type/WorkOutsType";
import Link from "next/link";
import React, { useContext, useState } from "react";

const MyPlanPage = () => {
  const { todaysPlan, savedLater } = useContext(WorkOutContext);

  const totalMinutes = todaysPlan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalSavedMinutes = savedLater.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = todaysPlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const totalSavedCalories = savedLater.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const [activeTab, setActiveTab] = useState("todaysplan");

  const [sortby, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const sortWorkOut = (workout: IworkOuts[]) => {
    const sortedWorkOut = [...workout];

    if (sortby === "duration") {
      sortedWorkOut.sort((a, b) => b.duration - a.duration);
    } else if (sortby === "calories") {
      sortedWorkOut.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortby === "rating") {
      sortedWorkOut.sort((a, b) => b.rating - a.rating);
    }

    return sortedWorkOut;
  };

  const sortedTodaysWorkOut = sortWorkOut(todaysPlan);
  const sortedSavedWorkOut = sortWorkOut(savedLater);

  return (
    <div className="container mx-auto  px-4 sm:px-6 lg:px-8 mb-69">
      <h2 className="mt-5 text-2xl font-bold uppercase">my plan</h2>

      <p className="mt-1 text-sm sm:text-base">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      <div className="my-6 grid grid-cols-1 items-center overflow-hidden rounded-2xl bg-[#323741] sm:my-10 sm:grid-cols-3">
        <div className="border-b border-white/10 p-5 sm:border-r sm:border-b-0">
          <p>Exercises</p>

          <h2 className="text-4xl font-bold text-[#B2DA00]">
            {activeTab === "todaysplan" ? todaysPlan.length : savedLater.length}
          </h2>
        </div>

        <div className="border-b border-white/10 p-5 sm:border-r sm:border-b-0">
          <p>Minutes</p>

          <h2 className="text-4xl font-bold">
            {activeTab === "todaysplan" ? totalMinutes : totalSavedMinutes}
          </h2>
        </div>

        <div className="p-5">
          <p>Calories</p>

          <h2 className="text-4xl font-bold">
            {activeTab === "todaysplan" ? totalCalories : totalSavedCalories}
          </h2>
        </div>
      </div>
      <div className="w-full ">
        <div className="mb-4 flex items-center justify-end gap-3 mb-[-45]">
          <h2 className="text-sm text-white/80 sm:text-base">sort by</h2>

          <select
            value={sortby}
            onChange={(e) =>
              setSortBy(e.target.value as "duration" | "calories" | "rating")
            }
            className="select w-32 border-[#B2DA00]"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <div className="tabs tabs-box w-full ">
          <input
            type="radio"
            name="my_tabs_3"
            className={`tab ${
              activeTab === "todaysplan"
                ? "border border-[#B2DA00] font-bold text-[#B2DA00] mb-10"
                : "font-semibold text-gray-300 mb-10"
            }`}
            aria-label="Today's Plan"
            defaultChecked
            onClick={() => setActiveTab("todaysplan")}
          />

          <div className="tab-content w-full border-base-300 bg-white/10 sm:p-2 ">
            {sortedTodaysWorkOut.length > 0 ? (
              sortedTodaysWorkOut.map((workout: IworkOuts, ind: number) => {
                return (
                  <div key={ind}>
                    <TodaysCard workout={workout} />
                  </div>
                );
              })
            ) : (
              <div className="py-6 text-center">
                <h2 className="text-2xl font-bold uppercase">
                  Nothing here yet
                </h2>

                <p className="py-3">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/"
                  className="btn rounded-2xl bg-[#B2DA00] font-bold text-black"
                >
                  Go to workout
                </Link>
              </div>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className={`tab ${
              activeTab === "saved"
                ? "border border-[#B2DA00] font-bold text-[#B2DA00]"
                : "font-semibold text-gray-300"
            }`}
            aria-label="Saved"
            onClick={() => setActiveTab("saved")}
          />

          <div className="tab-content w-full border-base-300 bg-white/10  sm:p-2">
            {sortedSavedWorkOut.length > 0 ? (
              sortedSavedWorkOut.map((workout: IworkOuts, ind: number) => {
                return (
                  <div key={ind}>
                    <SavedCard workout={workout} />
                  </div>
                );
              })
            ) : (
              <div className="py-6 text-center">
                <h2 className="text-2xl font-bold uppercase">
                  Nothing here yet
                </h2>

                <p className="py-3">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/"
                  className="btn rounded-2xl bg-[#B2DA00] font-bold text-black"
                >
                  Go to workout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
