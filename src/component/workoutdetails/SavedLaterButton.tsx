"use client";
import { WorkOutContext } from "@/context/WorkOutContext";
import { IworkOuts } from "@/type/WorkOutsType";
import { useContext } from "react";
import { MdBookmarkAdded } from "react-icons/md";

const SavedLaterButton = ({ workout }: { workout: IworkOuts }) => {
  const { savedLater, setSavedLater } = useContext(WorkOutContext);
  const handleAddLater = () => {
    setSavedLater([...savedLater, workout]);
    alert(`you have saved "${workout.name}" for later`);
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
