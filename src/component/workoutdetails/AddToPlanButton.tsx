"use client";
import { WorkOutContext } from "@/context/WorkOutContext";
import { IworkOuts } from "@/type/WorkOutsType";
import { useContext } from "react";
import { MdAddCard } from "react-icons/md";

const AddToPlanButton = ({ workout }: { workout: IworkOuts }) => {
  const { todaysPlan, setTodaysPlan } = useContext(WorkOutContext);

  const handleAddToday = () => {
    setTodaysPlan([...todaysPlan, workout]);
    alert(`you have add"${workout.name}" for today workout`);
  };

  return (
    <button
      onClick={() => handleAddToday()}
      className="btn rounded-2xl bg-[#B2DA00] text-black"
    >
      <MdAddCard />
      Add to today&apos;s plan
    </button>
  );
};

export default AddToPlanButton;
