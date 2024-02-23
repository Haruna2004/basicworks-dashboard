"use client";

import { Search } from "lucide-react";
import React, { useState } from "react";
import { Switch } from "../ui/switch";

const Navbar = () => {
  const [relayOn, setRelayOn] = useState(true);
  const SERVER_IP = "http://192.168.43.152";

  const switchLight = async () => {
    try {
      const res = await fetch(`${SERVER_IP}/toggle-relay`);
      setRelayOn(!relayOn);
    } catch (error) {
      // console.log("error: ", error);s
      return;
    }
  };

  return (
    <div className="w-full flex justify-between items-center shadow-lg p-4">
      <p className="text-xl font-semibold ">BASIC WORKS</p>
      <div className="flex gap-3 items-center">
        {/* search */}
        <div className="sm:flex items-center bg-white/80 p-1.5 rounded-xl gap-2 border border-black hidden">
          <Search className="text-muted-foreground" size={15} />
          <input
            type="text"
            placeholder="search..."
            className=" text-sm bg-transparent outline-none"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="light-switch"
            className="scale-125"
            onClick={() => switchLight()}
            checked={relayOn}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
