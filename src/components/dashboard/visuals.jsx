"use client";
import React from "react";
import Chart from "@/components/dashboard/area-chart";
import { Current, Energy, Voltage } from "@/components/dashboard/visual-cards";
import { useEffect, useState } from "react";

const Visuals = () => {
  // const SERVER_IP = "http://192.168.43.152";
  // for esp32
  const SERVER_IP = "";
  const REFRESH_CYCLE = 10000;

  const [voltage, setVoltage] = useState(0);
  const [current, setCurrent] = useState(0);
  const [energy, setEnergy] = useState(0);

  useEffect(() => {
    const intervalVoltage = setInterval(getVoltage, REFRESH_CYCLE);
    const intervalCurrent = setInterval(getCurrent, REFRESH_CYCLE);
    const intervalEnergy = setInterval(getEnergy, REFRESH_CYCLE);

    // Cleanup the interval on component unmount
    return () =>
      clearInterval(intervalVoltage, intervalCurrent, intervalEnergy);
  }, []);

  const getVoltage = async () => {
    try {
      const res = await fetch(`${SERVER_IP}/Voltage`);

      if (res.status === 404) return;

      const data = await res.text();
      setVoltage(data);
      // console.log(data, "volatge data");
    } catch (error) {
      return;
    }
  };

  const getCurrent = async () => {
    try {
      const res = await fetch(`${SERVER_IP}/Current`);

      if (res.status === 404) return;

      const data = await res.text();
      setCurrent(data);
      // console.log(data, "current data");
    } catch (error) {
      return;
    }
  };

  const getEnergy = async () => {
    try {
      const res = await fetch(`${SERVER_IP}/Energy`);

      if (res.status === 404) return;

      const data = await res.text();
      setEnergy(data);
      // console.log(data, "energy data");
    } catch (error) {
      return;
    }
  };

  return (
    <div className=" flex flex-col gap-3 w-full">
      <div className="flex">
        <Chart />
      </div>

      {/* buttom cards */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between w-full p-3">
        {/* Card2 */}
        <div className="sm:flex-[0.5] w-full h-auto border rounded-md p-3 space-y-5">
          <Voltage volt={voltage} />
        </div>
        <div className="sm:flex-[0.5] w-full h-auto border rounded-md p-3 space-y-5">
          <Energy energy={energy} />
        </div>
        {/* Card3 */}
        <div className="sm:flex-[0.5] w-full h-auto border rounded-md p-3 space-y-5">
          <Current current={current} />
        </div>
      </div>
    </div>
  );
};

export default Visuals;
