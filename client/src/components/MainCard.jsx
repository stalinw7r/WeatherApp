import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ForecastSummary from "./ForecastSummary";
import Observations from "./Observations";

const MainCard = (props) => {
  const [currentdata, setcurrentdata] = useState();
  const [today, settoday] = useState();
  const [tomorrow, settomorrow] = useState();
  const [dayafter, setdayafter] = useState();
  const [weekday, setweekday] = useState();

  const value = props.city;

  useEffect(() => {
    axios
      .get("https://weatherapi-com.p.rapidapi.com/forecast.json", {
        params: { q: value, days: 3 },
        headers: {
          "X-RapidAPI-Key":
            "7355025e0fmsh174ca144463768cp155490jsn7c4009339930",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      })
      .then((res) => {
        setcurrentdata(res.data);
        settoday(new Date(res.data.location.localtime_epoch * 1000).getMonth());
        setweekday(new Date(res.data.location.localtime_epoch * 1000).getDay());
        let day2 = new Date(
          res.data.forecast.forecastday[1].date_epoch * 1000 + 14400000
        );
        settomorrow(day2);
        let day3 = new Date(
          res.data.forecast.forecastday[2].date_epoch * 1000 + 14400000
        );
        setdayafter(day3);
      })
      .catch((err) => console.log(err));
  }, [value]);

  const fore = currentdata;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      <div>
        {fore === undefined ? (
          <div className=" p-2 md:p-5 container mx-auto lg:w-[50%] md:h-[350px] flex-col text-white ">
            <div role="status" className="text-center mt-15">
              <svg
                aria-hidden="true"
                className="inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-teal-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div>
            <div className=" p-2 md:p-5 container mx-auto lg:w-[50%] md:h-[350px] flex-col text-white ">
              <div className="flex justify-between">
                <div className="flex-col">
                  <p className="text-xl font-semibold ">
                    {fore.location.name}, {fore.location.region},{" "}
                    {fore.location.country}
                  </p>
                  <p className="text-lg font-semibold ">
                    Lat: {fore.location.lat}, Lon: {fore.location.lon}
                  </p>
                  <p className="text-sm font-semibold">
                    Last Updated: {fore.current.last_updated}
                  </p>
                </div>
              </div>
              <div className=" mt-3   gap-2 flex flex-col md:flex-row flex-wrap md:flex-nowrap">
                <div
                  className={`md:w-1/2 rounded-2xl  p-3 flex gap-1 shadow-md ${
                    fore.current.is_day === 0
                      ? "shadow-teal-400"
                      : "shadow-amber-400 "
                  }  `}
                >
                  <div className="flex-col  w-2/3 ">
                    <div className="flex">
                      <div className="flex  w-1/2 ">
                        <div>
                          <p className="text-4xl">
                            {Math.floor(fore.current.temp_c)}&deg;C
                          </p>
                          <p>
                            Feels like {Math.floor(fore.current.feelslike_c)}
                            &deg;
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm  h-[45px] mt-1">
                          {fore.current.condition.text}
                        </p>
                      </div>
                    </div>
                    <div className=" flex  md:mt-7  items-center">
                      <div className="w-1/2">
                        <img
                          src={fore.current.condition.icon}
                          alt=""
                          width={"128px"}
                        />
                      </div>
                      <div className="text-sm ">
                        <p>Precipitation: {fore.current.precip_mm}%</p>
                        <p>Humidity: {fore.current.humidity}%</p>
                        <p className="text-xs">
                          Wind: {Math.floor(fore.current.wind_kph)} Km/h{" "}
                        </p>
                        <p className="text-xs">
                          Direction: {fore.current.wind_dir}
                        </p>
                        <p>Current UV: {Math.floor(fore.current.uv)}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-col w-1/3">
                    <div className="h-1/2">
                      <p className="font-semibold text-2xl">
                        {daysOfWeek[weekday].toUpperCase()}
                      </p>
                      <p>
                        {months[today]}{" "}
                        {new Date(
                          fore.location.localtime_epoch * 1000
                        ).getDate()}
                      </p>
                      {fore.current.is_day === 0 && (
                        <div className="bg-gray-800 text-center gap-2 flex justify-center items-center rounded-2xl p-[1px] m-[3px] text-sm">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                              />
                            </svg>
                          </div>
                          <div>Night</div>
                        </div>
                      )}
                      {fore.current.is_day === 1 && (
                        <p className="bg-amber-300 text-center flex justify-center items-center gap-2 text-black rounded-2xl p-[1px] m-[3px] text-sm">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                              />
                            </svg>
                          </div>
                          <div>Day</div>
                        </p>
                      )}
                    </div>
                    <div className=" flex gap-2 justify-around">
                      <div className="flex-col">
                        <p>High</p>
                        <p>
                          {Math.floor(
                            fore.forecast.forecastday[0].day.maxtemp_c
                          )}
                          &deg;C
                        </p>
                      </div>
                      <div className="flex-col">
                        <p>Low</p>
                        <p>
                          {Math.floor(
                            fore.forecast.forecastday[0].day.mintemp_c
                          )}
                          &deg;C
                        </p>
                      </div>
                    </div>
                    <div className=" flex gap-2 justify-around">
                      <div className="flex-col">
                        <p>Sunrise</p>
                        <p className="text-xs ">
                          {fore.forecast.forecastday[0].astro.sunrise}
                        </p>
                      </div>
                      <div className="flex-col">
                        <p>Sunset</p>
                        <p className="text-xs ">
                          {fore.forecast.forecastday[0].astro.sunset}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 flex gap-2">
                  <div className="w-1/2 rounded-2xl  p-3 flex-col shadow-md shadow-teal-400">
                    <div className="text-center">
                      <p className="font-semibold text-2xl">
                        {daysOfWeek[tomorrow.getDay()].toUpperCase()}
                      </p>
                      <p>
                        {months[tomorrow.getMonth()]} {tomorrow.getDate()}
                      </p>
                    </div>
                    <div className=" flex justify-center">
                      <div>
                        <img
                          src={fore.forecast.forecastday[1].day.condition.icon}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className=" flex-col gap-2">
                      <div className=" flex gap-2 justify-around">
                        <div className="flex-col">
                          <p>High</p>
                          <p>
                            {Math.floor(
                              fore.forecast.forecastday[1].day.maxtemp_c
                            )}
                            &deg;C
                          </p>
                        </div>
                        <div className="flex-col">
                          <p>Low</p>
                          <p>
                            {Math.floor(
                              fore.forecast.forecastday[1].day.mintemp_c
                            )}
                            &deg;C
                          </p>
                        </div>
                      </div>
                      <div className=" flex gap-2 justify-around">
                        <div className="flex-col">
                          <p>Sunrise</p>
                          <p className="text-xs ">
                            {fore.forecast.forecastday[1].astro.sunrise}
                          </p>
                        </div>
                        <div className="flex-col">
                          <p>Sunset</p>
                          <p className="text-xs ">
                            {fore.forecast.forecastday[1].astro.sunset}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 rounded-2xl  p-3 flex-col  shadow-md shadow-teal-400">
                    <div className="text-center">
                      <p className="font-semibold text-2xl">
                        {daysOfWeek[dayafter.getDay()].toUpperCase()}
                      </p>
                      <p>
                        {months[dayafter.getMonth()]} {dayafter.getDate()}
                      </p>
                    </div>
                    <div className=" flex justify-center">
                      <div>
                        <img
                          src={fore.forecast.forecastday[2].day.condition.icon}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className=" flex-col gap-2">
                      <div className=" flex gap-2 justify-around">
                        <div className="flex-col">
                          <p>High</p>
                          <p>
                            {Math.floor(
                              fore.forecast.forecastday[2].day.maxtemp_c
                            )}
                            &deg;C
                          </p>
                        </div>
                        <div className="flex-col">
                          <p>Low</p>
                          <p>
                            {Math.floor(
                              fore.forecast.forecastday[2].day.mintemp_c
                            )}
                            &deg;C
                          </p>
                        </div>
                      </div>
                      <div className=" flex gap-2 justify-around">
                        <div className="flex-col">
                          <p>Sunrise</p>
                          <p className="text-xs ">
                            {fore.forecast.forecastday[2].astro.sunrise}
                          </p>
                        </div>
                        <div className="flex-col">
                          <p>Sunset</p>
                          <p className="text-xs ">
                            {fore.forecast.forecastday[2].astro.sunset}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <ForecastSummary data={fore} />
      <Observations data={fore} />
    </>
  );
};

export default MainCard;
