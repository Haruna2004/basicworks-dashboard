"use client";
import { AreaChart } from "@tremor/react";
const chartdata = [
  {
    date: "Jan 22",
    "Load History": 2890,
    "Energy Efficency": 2338,
  },
  {
    date: "Feb 22",
    "Load History": 2756,
    "Energy Efficency": 2103,
  },
  {
    date: "Mar 22",
    "Load History": 3322,
    "Energy Efficency": 2194,
  },
  {
    date: "Apr 22",
    "Load History": 3470,
    "Energy Efficency": 2108,
  },
  {
    date: "May 22",
    "Load History": 3475,
    "Energy Efficency": 1812,
  },
  {
    date: "Jun 22",
    "Load History": 3129,
    "Energy Efficency": 1726,
  },
  {
    date: "Jul 22",
    "Load History": 3490,
    "Energy Efficency": 1982,
  },
  {
    date: "Aug 22",
    "Load History": 2903,
    "Energy Efficency": 2012,
  },
  {
    date: "Sep 22",
    "Load History": 2643,
    "Energy Efficency": 2342,
  },
  {
    date: "Oct 22",
    "Load History": 2837,
    "Energy Efficency": 2473,
  },
  {
    date: "Nov 22",
    "Load History": 2954,
    "Energy Efficency": 3848,
  },
  {
    date: "Dec 22",
    "Load History": 3239,
    "Energy Efficency": 3736,
  },
];

const valueFormatter = function (number) {
  return "" + new Intl.NumberFormat("us").format(number).toString() + " KW/H";
};

const Chart = () => {
  return (
    <>
      {/* <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Newsletter Revenue
      </h3>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        $34,567
      </p> */}

      <AreaChart
        className="mt-4 h-72 ml-3"
        data={chartdata}
        index="date"
        yAxisWidth={65}
        categories={["Load History", "Energy Efficency"]}
        colors={["blue", "purple"]}
        valueFormatter={valueFormatter}
      />
    </>
  );
};

export default Chart;
