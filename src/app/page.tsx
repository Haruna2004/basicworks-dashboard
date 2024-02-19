"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const IP = "192.168.230.22";

  const [voltage, setVoltage] = useState("0.00");

  const getVoltage = async () => {
    // const response = await fetch(`http://${IP}:80/Voltage`, {
    //   mode: "no-cors",
    // });
    // const data = await response.json();
    // console.log(data);
    const res = await axios.get(`http://${IP}:80/Voltage`);
    console.log(res);

    // console.log(data)
  };
  return (
    <main className="p-4">
      <div>
        <div>
          <button
            className=" font-bold p-2 rounded-md bg-blue-600 text-white"
            onClick={getVoltage}
          >
            Voltage
          </button>
          <p>{voltage}</p>
        </div>
      </div>
    </main>
  );
}
