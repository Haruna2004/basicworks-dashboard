import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Sidebar = () => {
  const sidebar_items = [
    { title: "Dashboard" },
    { title: "Cost" },
    { title: "Usage" },
    { title: "Devices" },
    { title: "Billing" },
    { title: "Setting" },
  ];
  return (
    <div className="flex-[0.3] w-full h-full bg-black/70 hidden md:flex lg:flex-[0.2]">
      {/* Logo */}
      <div className="bg-black/70 flex flex-col w-full p-2">
        <h1 className="text-xl text-white/90 font-semibold font-mono text-amber-600 ">
          BASICWORKS
        </h1>
        <p className="text-white/70 -mt-1 text-sm">Energy Dashboard</p>
      </div>
      {/* middle-section */}
      <div className="h-full">{/* <Avatar /> */}</div>
    </div>
  );
};

export default Sidebar;
