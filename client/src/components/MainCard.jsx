import React from "react";

const MainCard = () => {
  return (
    <>
      <div className=" p-2 md:p-5 container mx-auto  md:h-[350px] flex-col text-white">
        <div className="flex-col">
          <p className="text-xl font-semibold ">Kitchener, ON</p>
          <p className="text-sm font-semibold">Updated 6 mins ago</p>
        </div>
        <div className=" mt-3   gap-2 flex flex-col md:flex-row flex-wrap md:flex-nowrap">
          <div className="md:w-1/2 rounded-2xl border p-3 flex gap-1 bg-black/20 backdrop-blur-md">
            <div className="flex-col w-1/3">
              <div className="">
                <p className="text-4xl">18&deg;C</p>
                <p>partly cloudy</p>
                <p className="text-sm">6&deg;/2&deg; Feels like 1&deg;</p>
              </div>
              <div className="">
                <img
                  src="//cdn.weatherapi.com/weather/128x128/night/248.png"
                  alt=""
                />
                {/* <p>Monday</p>
                <p>April 18</p> */}
              </div>
            </div>
            <div className="flex-col w-1/3">
              <div className="h-1/2 flex-col text-xs lg:text-sm">
                <p>precipitation : 59%</p>
                <p>Humidity : 59%</p>
                <p>Wind : 59%</p>
                <p>Wind dir: SW</p>
                <p>UV : 59%</p>
              </div>
              <div className="h-1/2 flex-col text-xs lg:text-sm">
                <p>dewpoint : 59%</p>
                <p>pressure : 59%</p>
                <p>visibility : 59%</p>
                <p>Wind dir: SW</p>
                <p>UV : 59%</p>
              </div>
            </div>
            <div className="flex-col w-1/3">
              <div className="h-1/2">
                <p className="font-semibold text-2xl">MONDAY</p>
                <p>April 19</p>
              </div>
              <div className="h-1/2 flex gap-2">
                <div className="flex-col">
                  <p>Sunrise</p>
                  <p>730AM</p>
                </div>
                <div className="flex-col">
                  <p>Sunset</p>
                  <p>730PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex gap-2">
            <div className="w-1/2 rounded-2xl border p-3">tomorrow</div>
            <div className="w-1/2 rounded-2xl border p-3">day after</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
