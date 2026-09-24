import React from "react";

const MyPlanPage = () => {
  return (
    <div className="container mx-auto mb-10">
      <h2 className="text-2xl font-bold uppercase mt-5">my plan</h2>
      <p>Cap of five lifts for today. Finish them, then load more.</p>
      <div className=" grid grid-cols-3  items-center rounded-2xl border-white bg-[#323741] my-10 h-30 ">
        <div className=" border-r p-5  border-white/10">
          <p>Exercises</p>
          <h2 className="text-4xl  font-bold text-[#B2DA00]">3</h2>
        </div>
        <div className=" border-r p-5  border-white/10">
          <p>Minutes</p>
          <h2 className="text-4xl  font-bold">3</h2>
        </div>
        <div className="p-5">
          <p>Calories</p>
          <h2 className="text-4xl  font-bold">3</h2>
        </div>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today's Plan"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
