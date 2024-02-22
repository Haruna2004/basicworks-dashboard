"use client";
import React from "react";
import { Card } from "../ui/card";
import Chart from "@/components/dashboard/area-chart";
import { Settings } from "lucide-react";
import { ProgressCircle } from "@tremor/react";
import {
  Current,
  Energy,
  Voltage,
} from "@/components/dashboard/visual-cards";
import { useEffect, useState } from "react";

const Visuals = () => {
 const [voltage, setVoltage] = useState(0)
 const [current, setCurrent] = useState(0)
 const [energy, setEnergy] = useState(0)
  useEffect(() => {
    const intervalVoltage = setInterval(getVoltage, 1000);
    const intervalCurrent = setInterval(getCurrent, 1000);
    const intervalEnergy = setInterval(getEnergy, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalVoltage, intervalCurrent, intervalEnergy);
    getVoltage()
    getCurrent()
    getEnergy()
  }, [])

   const getVoltage = async() =>  {
    const res = await fetch('http://192.168.43.152/Voltage')
    const data = await res.text()
    setVoltage(data)
    console.log(data, "volatge data")
  }

  const getCurrent = async() =>  {
    const res = await fetch('http://192.168.43.152/Current')
    const data = await res.text()
    setCurrent(data)
    console.log(data, "current data")
  }

  const getEnergy = async() =>  {
    const res = await fetch('http://192.168.43.152/Energy')
    const data = await res.text()
    setEnergy(data)
    console.log(data, "energy data")
  }

  

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
