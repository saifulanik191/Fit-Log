import React from "react";
import WorkOutCard from "../shared/WorkOutCard";
import { IworkOuts } from "@/type/WorkOutsType";

const getWorkOutLibrary = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = response.json();
  return data;
};

const WorkOutLibrary = async () => {
  const workOutData = await getWorkOutLibrary();
  return (
    <div className="container mx-auto mb-20">
      <div className="mb-7 mt-15">
        <h2 className="text-3xl font-semibold">THE LIBRARY</h2>
        <p>Twelve lifts covering every major muscle group.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {workOutData.map((workout: IworkOuts, ind: number) => {
          return (
            <div id="library" key={ind}>
              <WorkOutCard workout={workout} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkOutLibrary;
