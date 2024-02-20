"use client";
import React from "react";
import { Card } from "../ui/card";
import Chart from "@/components/dashboard/area-chart";
import { Settings } from "lucide-react";
import { ProgressCircle } from "@tremor/react";
import { Efficiency, UsageLoad } from "@/components/dashboard/visual-cards";

const Visuals = () => {
  return (
    <div className=" flex flex-col gap-3 w-full">
      <div className="flex">
        <Chart />
      </div>

      {/* buttom cards */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between w-full p-3">
        {/* Card2 */}
        <div className="sm:flex-[0.5] w-full h-auto border rounded-md p-3 space-y-5">
          <UsageLoad />
        </div>
        {/* Card3 */}
        <div className="sm:flex-[0.5] w-full h-auto border rounded-md p-3 space-y-5">
          <Efficiency />
        </div>
      </div>
    </div>
  );
};

export default Visuals;
