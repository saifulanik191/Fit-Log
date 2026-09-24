"use client";
import { IworkOuts } from "@/type/WorkOutsType";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IworkOutContextType {
  todaysPlan: IworkOuts[];
  setTodaysPlan: Dispatch<SetStateAction<IworkOuts[]>>;
  savedLater: IworkOuts[];
  setSavedLater: Dispatch<SetStateAction<IworkOuts[]>>;
}

export const WorkOutContext = createContext<IworkOutContextType>({
  todaysPlan: [],
  setTodaysPlan: () => {},
  savedLater: [],
  setSavedLater: () => {},
});

const WorkOutProvider = ({ children }: { children: ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<IworkOuts[]>([]);
  const [savedLater, setSavedLater] = useState<IworkOuts[]>([]);

  const sharedData = {
    todaysPlan,
    setTodaysPlan,
    savedLater,
    setSavedLater,
  };

  return (
    <WorkOutContext.Provider value={sharedData}>
      {children}
    </WorkOutContext.Provider>
  );
};

export default WorkOutProvider;
