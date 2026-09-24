"use client";
import SavedCard from "@/component/myplan/SavedCard";
import TodaysCard from "@/component/myplan/TodaysCard";
import { WorkOutContext } from "@/context/WorkOutContext";
import { IworkOuts } from "@/type/WorkOutsType";
import Link from "next/link";
import React, { useContext } from "react";

const MyPlanPage = () => {
  const { todaysPlan, savedLater } = useContext(WorkOutContext);
  const totalMinutes = todaysPlan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = todaysPlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  // const { duration } = todaysPlan;

  console.log(todaysPlan, "todays excirsise plan");

  return (
    <div className="container mx-auto mb-10">
      <h2 className="text-2xl font-bold uppercase mt-5">my plan</h2>
      <p>Cap of five lifts for today. Finish them, then load more.</p>
      <p>todays workout:{todaysPlan.length}</p>
      <p>Workout for later:{savedLater.length}</p>
      <div className=" grid grid-cols-1 sm:grid-cols-3  items-center rounded-2xl border-white bg-[#323741] my-10 h-30 ">
        <div className=" border-r p-5  border-white/10">
          <p>Exercises</p>
          <h2 className="text-4xl  font-bold text-[#B2DA00]">
            {todaysPlan.length}
          </h2>
        </div>
        <div className=" border-r p-5  border-white/10">
          <p>Minutes</p>
          <h2 className="text-4xl  font-bold">{totalMinutes}</h2>
        </div>
        <div className="p-5">
          <p>Calories</p>
          <h2 className="text-4xl  font-bold">{totalCalories}</h2>
        </div>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today's Plan"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {todaysPlan.length > 0 ? (
            todaysPlan.map((workout: IworkOuts, ind: number) => {
              return (
                <div key={ind}>
                  <TodaysCard workout={workout} />
                </div>
              );
            })
          ) : (
            <div>
              <h2>Nothing here yet</h2>
              <p>Browse the library and add a lift to get today moving.</p>
              <Link href="/" className="btn btn-success">
                Go to workout
              </Link>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {savedLater.length > 0 ? (
            savedLater.map((workout: IworkOuts, ind: number) => {
              return (
                <div key={ind}>
                  <SavedCard workout={workout} />
                </div>
              );
            })
          ) : (
            <div>
              <h2>Nothing here yet</h2>
              <p>Browse the library and add a lift to get today moving.</p>
              <Link href="/" className="btn btn-success">
                Go to workout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
