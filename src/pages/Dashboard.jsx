import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Daily Loss Level</h2>
        <Progress value={50} />
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Maximum Loss Level</h2>
        <Progress value={30} />
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Daily Target Level</h2>
        <Progress value={70} />
      </div>
    </div>
  );
};

export default Dashboard;