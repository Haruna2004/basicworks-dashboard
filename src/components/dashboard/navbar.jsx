import { LucideLightbulb, Search } from "lucide-react";
import React from "react";
// import { Switch } from "@tremor/react";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center  p-4">
      <p className="text-xl font-semibold">Overview</p>
      <div className="flex gap-3 items-center">
        {/* search */}
        <div className="sm:flex items-center bg-white/80 p-1.5 rounded-xl gap-2 border hidden">
          <Search className="text-muted-foreground" size={15} />
          <input
            type="text"
            placeholder="search..."
            className=" text-sm bg-transparent outline-none "
          />
        </div>

        {/* <Switch className="" />
        <LucideLightbulb
          color="orange"
          fill="orange"
          size={25}
          className="cursor-pointer "
        /> */}
        <div className="flex items-center space-x-2">
          <Switch id="light-switch" className="scale-125" />
          {/* <Label htmlFor="light-switch " className="text-base">
            Main Power
          </Label> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
