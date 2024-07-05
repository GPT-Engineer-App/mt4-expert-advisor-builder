import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="mb-4">
        <p><strong>Username:</strong> user</p>
        <p><strong>Email:</strong> user@example.com</p>
      </div>
      <Button onClick={handleLogout} className="w-full">Logout</Button>
    </div>
  );
};

export default Profile;