import { Link, useNavigate } from "react-router-dom";
import {
  Home,
  Heart,
  Wallet,
  User,
  LogOut,
} from "lucide-react";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="border-b bg-white px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        <Link
          to="/dashboard"
          className="text-xl font-bold"
        >
          FundConnect
        </Link>

        <div className="flex items-center gap-6">

          <Link to="/dashboard">
            <Home size={20} />
          </Link>

          <Link to="/campaigns">
            <Heart size={20} />
          </Link>

          <Link to="/donations">
            <Wallet size={20} />
          </Link>

          <Link to="/profile">
            <User size={20} />
          </Link>

          <button onClick={logout}>
            <LogOut size={20} />
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;