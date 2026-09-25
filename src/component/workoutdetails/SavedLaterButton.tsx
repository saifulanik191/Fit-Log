"use client";
import { WorkOutContext } from "@/context/WorkOutContext";
import { IworkOuts } from "@/type/WorkOutsType";
import { useContext } from "react";
import { MdBookmarkAdded } from "react-icons/md";
import { toast } from "react-toastify";

const SavedLaterButton = ({ workout }: { workout: IworkOuts }) => {
  const { savedLater, setSavedLater } = useContext(WorkOutContext);
  const handleAddLater = () => {
    if (
      savedLater.find(
        (currrentSavedWorkout) => currrentSavedWorkout.id === workout.id,
      )
    ) {
      toast.error(`"${workout.name}" is already saved`);

      return;
    }
    setSavedLater([...savedLater, workout]);
    toast.success(`you have saved "${workout.name}" for later`);
  };

  return (
    <button
      onClick={() => handleAddLater()}
      className="btn rounded-2xl border-amber-50"
    >
      <MdBookmarkAdded />
      Save For Later
    </button>
  );
};

export default SavedLaterButton;
