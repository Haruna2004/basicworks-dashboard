import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuHome } from "react-icons/lu";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { LuActivity } from "react-icons/lu";
import { HiOutlineDeviceTablet } from "react-icons/hi";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  const sidebar_items = [
    { title: "Dashboard", svg: <LuHome /> },
    { title: "Cost", svg: <FaMoneyBillTrendUp /> },
    { title: "Usage", svg: <LuActivity /> },
    { title: "Devices", svg: <HiOutlineDeviceTablet /> },
    { title: "Billing", svg: <BsCurrencyDollar /> },
    { title: "Setting", svg: <IoSettingsOutline /> },
  ];
  return (
    <div className="lg:flex-[0.2] md:flex-[0.3] md:flex hidden w-full h-full relative bg-[rgba(33,33,33,255)] ">
      {/* Logo */}

      {/* middle-section */}
      <div className="h-full ml-10 my-10 fixed">
        <div className="flex gap-x-2.5">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="fw-600">
            <h3 className="text-white text-xl">JOHN DOTUN</h3>
            <p className="text-[rgba(139,139,139,255)] text-base">My House</p>
          </div>
        </div>
        <div className="my-14 flex flex-col gap-y-10">
          {sidebar_items.map((item, index) => (
            <div
              className={`flex items-center gap-x-3 cursor-pointer ${
                item.title == "Dashboard"
                  ? "text-white"
                  : "text-[rgba(102,102,102,255)]"
              }  `}
              key={index}
            >
              {item.svg}
              <h4 className="">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
