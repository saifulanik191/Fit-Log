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
    "rating",
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
    <div className="container mx-auto mb-10">
      <h2 className="text-2xl font-bold uppercase mt-5">my plan</h2>
      <p>Cap of five lifts for today. Finish them, then load more.</p>

      <div className=" grid grid-cols-1 sm:grid-cols-3  items-center rounded-2xl border-white bg-[#323741] my-10 h-30 ">
        <div className=" border-r p-5  border-white/10">
          <p>Exercises</p>
          <h2 className="text-4xl  font-bold text-[#B2DA00]">
            {activeTab === "todaysplan" ? todaysPlan.length : savedLater.length}
          </h2>
        </div>
        <div className=" border-r p-5  border-white/10">
          <p>Minutes</p>
          <h2 className="text-4xl  font-bold">
            {activeTab === "todaysplan" ? totalMinutes : totalSavedMinutes}
          </h2>
        </div>
        <div className="p-5">
          <p>Calories</p>
          <h2 className="text-4xl  font-bold">
            {activeTab === "todaysplan" ? totalCalories : totalSavedCalories}
          </h2>
        </div>
      </div>

      {/*Tab  */}

      <div className="justify-between">
        <div className=" text-end mb-[-45px] ">
          <h2 className="mr-18 mb-2">sort by</h2>
          <select
            value={sortby}
            onChange={(e) =>
              setSortBy(e.target.value as "duration" | "calories" | "rating")
            }
            defaultValue="Pick a Runtime"
            className="select border-[#B2DA00] w-30"
          >
            <option value={"duration"}>Duration</option>
            <option value={"calories"}>Calories</option>
            <option value={"rating"}>Rating</option>
          </select>
        </div>

        <div className="tabs tabs-box w-full gap-y-10">
          <input
            type="radio"
            name="my_tabs_3"
            className={`tab ${activeTab === "todaysplan" ? "text-[#B2DA00] border border-[#B2DA00] font-bold" : "text-gray-300 font-semibold"}`}
            aria-label="Today's Plan"
            defaultChecked
            onClick={() => setActiveTab("todaysplan")}
          />
          <div className="tab-content  border-base-300 p-6 bg-white/10">
            {sortedTodaysWorkOut.length > 0 ? (
              sortedTodaysWorkOut.map((workout: IworkOuts, ind: number) => {
                return (
                  <div key={ind}>
                    <TodaysCard workout={workout} />
                  </div>
                );
              })
            ) : (
              <div className=" text-center">
                <h2 className="text-2xl uppercase font-bold">
                  Nothing here yet
                </h2>
                <p className="py-3">
                  Browse the library and add a lift to get today moving.
                </p>
                <Link
                  href="/"
                  className="btn rounded-2xl bg-[#B2DA00] text-black font-bold"
                >
                  Go to workout
                </Link>
              </div>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className={`tab ${activeTab === "saved" ? "text-[#B2DA00] border border-[#B2DA00]  font-bold" : "text-gray-300 font-semibold"} `}
            aria-label="Saved"
            onClick={() => setActiveTab("saved")}
          />
          <div className="tab-content  bg-white/10 border-base-300 p-6">
            {sortedSavedWorkOut.length > 0 ? (
              sortedSavedWorkOut.map((workout: IworkOuts, ind: number) => {
                return (
                  <div key={ind}>
                    <SavedCard workout={workout} />
                  </div>
                );
              })
            ) : (
              <div className=" text-center">
                <h2 className="text-2xl uppercase font-bold">
                  Nothing here yet
                </h2>
                <p className="py-3">
                  Browse the library and add a lift to get today moving.
                </p>
                <Link
                  href="/"
                  className="btn rounded-2xl bg-[#B2DA00] text-black font-bold"
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
