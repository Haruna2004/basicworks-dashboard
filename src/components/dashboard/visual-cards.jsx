import { Flex, ProgressCircle } from "@tremor/react";
import { Settings } from "lucide-react";

export const Voltage = ({volt}) => {

  return (
    <>
      <div className="flex justify-between text-xs font-medium items-center">
        <p>Mains Voltage</p>
        <Settings size={12} />
      </div>

      <div className="flex items-center justify-center gap-3 w-full text-xs mt-2 opacity-50">
        <p className="">Highest 270V </p>
        <p>Lowest 0V</p>
      </div>

      <Flex className="space-x-5" justifyContent="center">
        <ProgressCircle
          value={0.37 * volt}
          size="xl"
          strokeWidth={8}
          color="violet"
        >
          <span className="text-base font-bold text-slate-700">{volt}V</span>
        </ProgressCircle>
      </Flex>

      <p className="text-xs text-center opacity-50">Based on Live Feed</p>
    </>
  );
};

export const Current = ({current}) => {
  return (
    <>
      <div className="flex justify-between text-xs font-medium items-center">
        <p>Load Current</p>
        <Settings size={12} />
      </div>

      <div className="flex items-center justify-center gap-3 w-full text-xs mt-2 opacity-50">
        <p className="">Highest 10A </p>
        <p>Lowest 0A</p>
      </div>

      <Flex className="space-x-5" justifyContent="center">
        <ProgressCircle
          value={1000 * current}
          size="xl"
          strokeWidth={8}
          color="violet"
        >
          <span className="text-sm font-bold text-slate-700">{current}A</span>
        </ProgressCircle>
      </Flex>

      <p className="text-xs text-center opacity-50">Based on Live Feed</p>
    </>
  );
};

export const Energy = ({energy}) => {
  return (
    <>
      <div className="flex justify-between text-xs font-medium items-center">
        <p>Energy</p>
        <Settings size={12} />
      </div>

      <div className="flex items-center justify-center gap-3 w-full text-xs mt-2 opacity-50">
        <p className="">Highest 10kwh </p>
        <p>Lowest 0</p>
      </div>

      <Flex className="space-x-5" justifyContent="center">
        <ProgressCircle
          value={energy * 1000}
          size="xl"
          strokeWidth={8}
          color="violet"
        >
          <span className="text-sm font-bold text-slate-700">{energy}Kwh</span>
        </ProgressCircle>
      </Flex>

      <p className="text-xs text-center opacity-50">Based on Live Feed</p>
    </>
  );
};
