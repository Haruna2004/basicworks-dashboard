import { Bell, PlusIcon, Search } from "lucide-react";
import { Input } from "../ui/input";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center  p-4">
      <p className="text-xl font-semibold">Overview</p>
      <div className="flex gap-3 items-center">
        {/* search */}
        <div className="flex items-center bg-white/80 p-1.5 rounded-xl gap-2 border">
          <Search className="text-muted-foreground" size={15} />
          <input
            type="text"
            placeholder="search..."
            className=" text-sm bg-transparent outline-none "
          />
        </div>

        <Bell size={17} className="cursor-pointer text-black/70 " />

        <div className=" rounded-2xl p-2 flex items-center justify-center gap-1 bg-black text-white text-xs font-semibold cursor-pointer">
          <PlusIcon size={15} />
          <p>Add Device</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
