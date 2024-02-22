"use client"

import { LucideLightbulb, Search } from "lucide-react";
import { IoIosMenu } from "react-icons/io";
import React, { useState } from "react";
// import { Switch } from "@tremor/react";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

const Navbar = () => {
  const [relayOn,setRelayOn] = useState(true)
  const switchLight = async () => {
      const res  = await fetch('http://192.168.43.152/toggle-relay')
      // const data = await req.text()
      setRelayOn(!relayOn)
      //console.log(data)

  }

  return (
    <div className="w-full flex justify-between items-center shadow-lg p-4">
      <p className="text-xl font-semibold">Basic Works</p>
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

        {/* <Switch className="" />
        <LucideLightbulb
          color="orange"
          fill="orange"
          size={25}
          className="cursor-pointer "
        /> */}
        <div className="flex items-center space-x-2">
          <Switch id="light-switch"  className="scale-125" onClick={() =>  switchLight() } checked={relayOn}/>
          <IoIosMenu className="text-3xl md:hidden" />
          {/* <Label htmlFor="light-switch " className="text-base">
            Main Power
          </Label> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
