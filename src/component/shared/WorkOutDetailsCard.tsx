import { IworkOuts } from "@/type/WorkOutsType";
import Image from "next/image";
import AddToPlanButton from "../workoutdetails/AddToPlanButton";
import SavedLaterButton from "../workoutdetails/SavedLaterButton";

interface IworkOutDetailsCardProps {
  workout: IworkOuts;
}

const WorkOutDetailsCard = ({ workout }: IworkOutDetailsCardProps) => {
  return (
    <div className=" card lg:card-side bg-base-100 shadow-sm gap-6">
      <figure>
        <Image src={workout.image} alt="Album" height={600} width={500} />
      </figure>
      <div className="card-body justify-between">
        <div>
          <h2 className="card-title font-bold text-4xl">{workout.name}</h2>
          <p className="text-[16px] max-w-120">{workout.description}</p>
        </div>

        <div className="  mb-4 flex  gap-2 ">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="badge border-0 bg-[#c6ff00] px-4 py-3 text-xs font-semibold text-black"
            >
              {muscle}
            </span>
          ))}
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1b1e24] max-w-130">
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                <tr className="border-white/10">
                  <td className="font-semibold text-gray-400">Equipment</td>
                  <td className="text-right font-medium text-white">
                    {workout.equipment}
                  </td>
                </tr>

                <tr className="border-white/10">
                  <td className="font-semibold text-gray-400">Difficulty</td>
                  <td className="text-right font-medium text-white">
                    {workout.difficulty}
                  </td>
                </tr>

                <tr className="border-white/10">
                  <td className="font-semibold text-gray-400">Sets</td>
                  <td className="text-right font-medium text-white">
                    {workout.sets}
                  </td>
                </tr>

                <tr className="border-white/10">
                  <td className="font-semibold text-gray-400">Reps</td>
                  <td className="text-right font-medium text-white">
                    {workout.reps}
                  </td>
                </tr>

                <tr className="border-white/10">
                  <td className="font-semibold text-gray-400">Duration</td>
                  <td className="text-right font-medium text-white">
                    {workout.duration} min
                  </td>
                </tr>

                <tr className="border-white/10">
                  <td className="font-semibold text-gray-400">Calories</td>
                  <td className="text-right font-medium text-white">
                    {workout.caloriesBurned} kcal
                  </td>
                </tr>

                <tr>
                  <td className="font-semibold text-gray-400">Rating</td>
                  <td className="text-right font-medium ">{workout.rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className="text-2xl uppercase font-bold py-5">Instructions</h2>

          {workout.instructions.map((inst, ind) => (
            <p className="text-[16px] py-1" key={ind}>
              {ind + 1}. {inst}
            </p>
          ))}
        </div>

        <div className="card-actions ">
          <AddToPlanButton workout={workout} />
          <SavedLaterButton workout={workout} />
        </div>
      </div>
    </div>
  );
};

export default WorkOutDetailsCard;
