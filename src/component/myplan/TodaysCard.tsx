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
    <div className="mb-4 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#1b1e24] p-4 lg:flex-row lg:items-center">
      <div className="w-full shrink-0 lg:w-[145px]">
        <Image
          src={workout.image}
          alt={workout.name}
          width={145}
          height={96}
          className="h-24 w-full rounded-xl object-cover lg:w-[145px]"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h2 className="truncate text-lg font-bold uppercase text-white">
          {workout.name}
        </h2>

        <p className="truncate text-sm text-gray-400">{workout.equipment}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
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
      <div className="flex w-full shrink-0 flex-wrap items-center gap-2 lg:w-auto lg:flex-nowrap">
        <Link
          href={`/workout/${workout.id}`}
          className="btn btn-sm flex-1 rounded-full border border-white/40 bg-transparent px-4 text-white hover:border-white hover:bg-white/10 sm:flex-none"
        >
          View Details
        </Link>

        <button
          onClick={() => handleMarkAsDoneWorkout()}
          className="btn btn-sm flex-1 rounded-full border-0 bg-[#B2DA00] px-4 text-black hover:bg-[#c8ef19] sm:flex-none"
        >
          ✓ &nbsp; Mark as Done
        </button>

        <button
          onClick={() => handleTodaysRemoveWorkout()}
          className="btn btn-circle btn-sm shrink-0 border-0 bg-transparent text-xl text-gray-400 hover:bg-white/10 hover:text-white"
          aria-label="Remove workout"
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default TodaysCard;
