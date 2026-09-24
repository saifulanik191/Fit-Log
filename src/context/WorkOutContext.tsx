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
}

export const WorkOutContext = createContext<IworkOutContextType>({
  todaysPlan: [],
  setTodaysPlan: () => {},
});

const WorkOutProvider = ({ children }: { children: ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<IworkOuts[]>([]);

  const sharedData = {
    todaysPlan,
    setTodaysPlan,
  };

  return (
    <WorkOutContext.Provider value={sharedData}>
      {children}
    </WorkOutContext.Provider>
  );
};

export default WorkOutProvider;
