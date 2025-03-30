import React from "react";

const HourlyCard = () => {
  return (
    <div className=" p-2 md:p-5 container mx-auto  md:h-[350px] flex-col text-white ">
      <div className="w-full rounded-2xl  p-3 flex flex-col gap-1 shadow-md shadow-teal-400">
        <div>
          current temp <hr />
        </div>
        <div className="flex p-3 border  snap-x ">
          <div className="flex-col w-[500px]  items-center border snap-start">
            <div className="text-center">1 am</div>
            <div>
              <img
                src="//cdn.weatherapi.com/weather/64x64/night/122.png"
                alt=""
              />
            </div>
            <div className="text-center">
              <p>1&deg;C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyCard;
