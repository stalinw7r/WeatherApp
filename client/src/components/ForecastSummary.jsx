import React from "react";

const ForecastSummary = () => {
  return (
    <>
      <div className=" p-2 md:p-5 container mx-auto  md:h-[300px] flex gap-2 flex-col md:flex-row text-white ">
        <div className="md:w-1/2 rounded-2xl  p-3  flex-col gap-1 shadow-md shadow-teal-400">
          <div className="text-2xl font-bold py-2">Today's Weather Summary</div>
          <hr />
          <div className="p-3">
            <p>
              Weather today in Toronto will be moderate rain. The daytime
              temperature is going to reach 2.8 °c and the temperature is going
              to dip to 0.2 °c at night. We expect around 7.7 mm of
              precipitation to fall, the humidity will be around 98%.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 rounded-2xl  p-3  flex-col gap-1 shadow-md shadow-teal-400">
          <div className="text-2xl font-bold py-2">
            Tomorrow Weather Summary
          </div>
          <hr />
          <div className="p-3">
            <p>
              Weather today in Toronto will be moderate rain. The daytime
              temperature is going to reach 2.8 °c and the temperature is going
              to dip to 0.2 °c at night. We expect around 7.7 mm of
              precipitation to fall, the humidity will be around 98%.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForecastSummary;
