import { Flex, ProgressCircle } from "@tremor/react";
import { Settings } from "lucide-react";

export const Efficiency = () => {
  return (
    <>
      <div className="flex justify-between text-xs font-medium items-center">
        <p>Energy Efficency</p>
        <Settings size={12} />
      </div>

      <div className="flex items-center justify-center gap-3 w-full text-xs mt-2 opacity-50">
        <p className="">Highest 83% </p>
        <p>Lowest 27%</p>
      </div>

      <Flex className="space-x-5" justifyContent="center">
        <ProgressCircle value={75} size="xl" strokeWidth={8} color="violet">
          <span className="text-base font-bold text-slate-700">75%</span>
        </ProgressCircle>
      </Flex>

      <p className="text-xs text-center opacity-50">
        Based on the past 1 hour usage
      </p>
    </>
  );
};

export const UsageLoad = () => {
  return (
    <>
      <div className="flex justify-between text-xs font-medium items-center">
        <p>Live Usage Load</p>
        <Settings size={12} />
      </div>

      <div className="flex items-center justify-center gap-3 w-full text-xs mt-2 opacity-50">
        <p className="">Highest 83% </p>
        <p>Lowest 27%</p>
      </div>

      <Flex className="space-x-5" justifyContent="center">
        <ProgressCircle value={65} size="xl" strokeWidth={8} color="violet">
          <span className="text-sm font-bold text-slate-700">376 kw/h</span>
        </ProgressCircle>
      </Flex>

      <p className="text-xs text-center opacity-50">
        Based on the past 1 hour usage
      </p>
    </>
  );
};
