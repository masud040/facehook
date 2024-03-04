import { Link } from "react-router-dom";
import Home from "../../assets/icons/home.svg";
import Notification from "../../assets/icons/notification.svg";
import Logo from "../../assets/images/logo.svg";
import useAuth from "../../hooks/useAuth";
import useProfile from "../../hooks/useProfile";
import Logout from "../auth/Logout";
export default function Header() {
  const { state } = useProfile();
  const { auth } = useAuth();
  const user = state?.user ?? auth.user;
  return (
    <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Link to="/">
          <img
            className="max-w-[100px] lg:max-w-[130px] rounded-full"
            src={Logo}
          />
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/" className="btn-primary">
            <img src={Home} alt="Home" />
            Home
          </Link>
          <button className="icon-btn">
            <img src={Notification} alt="Notification" />
          </button>
          <Logout />
          <button className="flex-center !ml-8 gap-3">
            <span className="text-lg font-medium lg:text-xl">
              {user.firstName} {user.lastName}
            </span>
            <img
              className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px] rounded-full"
              src={`${import.meta.env.VITE_BASE_SERVER_URL}/${user.avatar}`}
              alt="avatar"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
