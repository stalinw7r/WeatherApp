import React from "react";

const MainCard = () => {
  return (
    <>
      <div className=" p-2 md:p-5 container mx-auto  md:h-[350px] flex-col text-white ">
        <div className="flex-col">
          <p className="text-xl font-semibold ">Kitchener, ON</p>
          <p className="text-sm font-semibold">Updated 6 mins ago</p>
        </div>
        <div className=" mt-3   gap-2 flex flex-col md:flex-row flex-wrap md:flex-nowrap">
          <div className="md:w-1/2 rounded-2xl  p-3 flex gap-1 shadow-md shadow-teal-400">
            <div className="flex-col  w-2/3 ">
              <div className="flex">
                <div className="flex  w-1/2 ">
                  <div>
                    <p className="text-4xl">18&deg;C</p>
                    <p>Feels like 1&deg;</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm  h-[45px] mt-1">
                    Moderate or heavy snow
                  </p>
                </div>
              </div>
              <div className=" flex  md:mt-7  items-center">
                <div className="w-1/2">
                  <img
                    src="//cdn.weatherapi.com/weather/128x128/night/248.png"
                    alt=""
                  />
                </div>
                <div className="text-sm ">
                  <p>Prep: 50%</p>
                  <p>Prep: 50%</p>
                  <p>Prep: 50%</p>
                  <p>Prep: 50%</p>
                </div>
              </div>
            </div>

            <div className="flex-col w-1/3">
              <div className="h-1/2">
                <p className="font-semibold text-2xl">MONDAY</p>
                <p>April 19</p>
              </div>
              <div className=" flex gap-2 justify-around">
                <div className="flex-col">
                  <p>High</p>
                  <p>6&deg;C</p>
                </div>
                <div className="flex-col">
                  <p>Low</p>
                  <p>6&deg;C</p>
                </div>
              </div>
              <div className=" flex gap-2 justify-around">
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
            <div className="w-1/2 rounded-2xl  p-3 flex-col shadow-md shadow-teal-400">
              <div className="text-center">
                <p className="font-semibold text-2xl">TOMORROW</p>
                <p>April 19</p>
              </div>
              <div className=" flex justify-center">
                <div>
                  <img
                    src="//cdn.weatherapi.com/weather/64x64/night/248.png"
                    alt=""
                  />
                </div>
              </div>
              <div className=" flex-col gap-2">
                <div className=" flex gap-2 justify-around">
                  <div className="flex-col">
                    <p>High</p>
                    <p>6&deg;C</p>
                  </div>
                  <div className="flex-col">
                    <p>Low</p>
                    <p>6&deg;C</p>
                  </div>
                </div>
                <div className=" flex gap-2 justify-around">
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
            <div className="w-1/2 rounded-2xl  p-3 flex-col  shadow-md shadow-teal-400">
              <div className="text-center">
                <p className="font-semibold text-2xl">DAY AFTER</p>
                <p>April 19</p>
              </div>
              <div className=" flex justify-center">
                <div>
                  <img
                    src="//cdn.weatherapi.com/weather/64x64/night/248.png"
                    alt=""
                  />
                </div>
              </div>
              <div className=" flex-col gap-2">
                <div className=" flex gap-2 justify-around">
                  <div className="flex-col">
                    <p>High</p>
                    <p>6&deg;C</p>
                  </div>
                  <div className="flex-col">
                    <p>Low</p>
                    <p>6&deg;C</p>
                  </div>
                </div>
                <div className=" flex gap-2 justify-around">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
