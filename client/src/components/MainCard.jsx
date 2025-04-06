import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ForecastSummary from "./ForecastSummary";

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
          "undesd"
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
                        <p className="bg-gray-900 text-center gap-2 flex justify-center items-center rounded-2xl p-[1px] m-[3px] text-sm">
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
                        </p>
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
    </>
  );
};

export default MainCard;
