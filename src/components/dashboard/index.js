import Navbar from "@/components/dashboard/navbar";
import Visuals from "@/components/dashboard/visuals";
const Dashboard = () => {
  return (
    <div className=" w-full h-full md:flex-[0.7] lg:flex-[0.8] ">
      <Navbar />
      <Visuals />
    </div>
  );
};

export default Dashboard;
