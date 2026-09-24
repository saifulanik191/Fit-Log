import { IworkOuts } from "@/type/WorkOutsType";
import Image from "next/image";
import Link from "next/link";
import { FaFire, FaRegClock, FaStar } from "react-icons/fa";

interface IworkOutCardProps {
  workout: IworkOuts;
}

const WorkOutCard = ({ workout }: IworkOutCardProps) => {
  return (
    <Link href={`/workout/${workout.id}`}>
      {" "}
      <div className="card w-full  overflow-hidden rounded-2xl border border-base-content/10 bg-[#1b1e24] shadow-md">
        <figure className="h-52 w-full sm:h-56">
          <Image
            src={workout.image}
            alt={workout.name}
            width={500}
            height={400}
            className="h-full w-full object-cover"
          />
        </figure>

        <div className="card-body gap-0 p-5">
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="badge border-0 bg-[#c6ff00] px-4 py-3 text-xs font-semibold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h2 className="mb-3 text-xl font-extrabold uppercase tracking-wide text-white">
            {workout.name}
          </h2>

          <p className="mb-4 text-sm text-gray-400">{workout.equipment}</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <div className="flex items-center gap-1.5 text-white">
              <FaRegClock className="text-[#c6ff00]" />
              <span>{workout.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5 text-white">
              <FaFire className="text-[#c6ff00]" />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5 text-white">
              <FaStar className="text-[#c6ff00]" />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkOutCard;
