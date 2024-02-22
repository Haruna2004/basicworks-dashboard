import { Flex, ProgressCircle } from "@tremor/react";
import { Settings } from "lucide-react";

export const Voltage = () => {
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
          value={0.37 * 190}
          size="xl"
          strokeWidth={8}
          color="violet"
        >
          <span className="text-base font-bold text-slate-700">190V</span>
        </ProgressCircle>
      </Flex>

      <p className="text-xs text-center opacity-50">Based on Live Feed</p>
    </>
  );
};

export const Current = () => {
  return (
    <>
      <div className="flex justify-between text-xs font-medium items-center">
        <p>Load Current</p>
        <Settings size={12} />
      </div>

      <div className="flex items-center justify-center gap-3 w-full text-xs mt-2 opacity-50">
        <p className="">Highest 1000A </p>
        <p>Lowest 0A</p>
      </div>

      <Flex className="space-x-5" justifyContent="center">
        <ProgressCircle
          value={0.1 * 400}
          size="xl"
          strokeWidth={8}
          color="violet"
        >
          <span className="text-sm font-bold text-slate-700">400A</span>
        </ProgressCircle>
      </Flex>

      <p className="text-xs text-center opacity-50">Based on Live Feed</p>
    </>
  );
};

export const PowerFactor = () => {
  return (
    <>
      <div className="flex justify-between text-xs font-medium items-center">
        <p>Power factor</p>
        <Settings size={12} />
      </div>

      <div className="flex items-center justify-center gap-3 w-full text-xs mt-2 opacity-50">
        <p className="">Highest 1 </p>
        <p>Lowest 0</p>
      </div>

      <Flex className="space-x-5" justifyContent="center">
        <ProgressCircle
          value={0.4 * 100}
          size="xl"
          strokeWidth={8}
          color="violet"
        >
          <span className="text-sm font-bold text-slate-700">0.4</span>
        </ProgressCircle>
      </Flex>

      <p className="text-xs text-center opacity-50">Based on Live Feed</p>
    </>
  );
};
