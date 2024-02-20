import Navbar from "@/components/dashboard/navbar";
import Visuals from "@/components/dashboard/visuals";
const Dashboard = () => {
  return (
    <div className="flex-[0.7] w-full h-full  ">
      <Navbar />
      <Visuals />
    </div>
  );
};

export default Dashboard;
