import Image from "next/image";
import React, { useContext } from "react";
import { FaClock, FaFire, FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IworkOuts } from "@/type/WorkOutsType";
import Link from "next/link";
import { WorkOutContext } from "@/context/WorkOutContext";
import { toast } from "react-toastify";

interface ItodaysCardProps {
  workout: IworkOuts;
}

const TodaysCard = ({ workout }: ItodaysCardProps) => {
  const { todaysPlan, setTodaysPlan } = useContext(WorkOutContext);

  const handleMarkAsDoneWorkout = () => {
    const remainingWorkouts = todaysPlan.filter(
      (currentWorkout) => currentWorkout.id !== workout.id,
    );

    setTodaysPlan(remainingWorkouts);
    toast.success(`you completed ${workout.name}  `);
  };
  const handleTodaysRemoveWorkout = () => {
    const remainingWorkouts = todaysPlan.filter(
      (currentWorkout) => currentWorkout.id !== workout.id,
    );

    setTodaysPlan(remainingWorkouts);
    toast.error(`${workout.name} removed from today's plan`);
  };

  return (
    <div className="mb-4 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#1b1e24] p-4 sm:flex-row sm:items-center">
      {/* Workout Image */}
      <div className="shrink-0">
        <Image
          src={workout.image}
          alt={workout.name}
          width={145}
          height={96}
          className="h-24 w-full rounded-xl object-cover sm:w-[145px]"
        />
      </div>

      {/* Workout Info */}
      <div className="min-w-0 flex-1">
        <h2 className="text-lg font-bold uppercase text-white">
          {workout.name}
        </h2>

        <p className="text-sm text-gray-400">{workout.equipment}</p>

        {/* Stats */}
        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
          <span className="flex items-center gap-1 text-white">
            <FaClock className="text-[#B2DA00]" />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1 text-white">
            <FaFire className="text-[#B2DA00]" />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1 text-white">
            <FaStar className="text-[#B2DA00]" />
            {workout.rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="btn btn-sm rounded-full border border-white/40 bg-transparent px-4 text-white hover:border-white hover:bg-white/10"
        >
          View Details
        </Link>

        <button
          onClick={() => handleMarkAsDoneWorkout()}
          className="btn btn-sm rounded-full border-0 bg-[#B2DA00] px-4 text-black hover:bg-[#c8ef19]"
        >
          ✓ &nbsp; Mark as Done
        </button>

        <button
          onClick={() => handleTodaysRemoveWorkout()}
          className="btn btn-circle btn-sm border-0 bg-transparent text-xl text-gray-400 hover:bg-white/10 hover:text-white"
          aria-label="Remove workout"
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default TodaysCard;
