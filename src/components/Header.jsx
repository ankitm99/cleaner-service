import { Link } from "react-router-dom";
import HomeIcon from "../icons/HomeIcon";
import SidebarToggle from "./SidebarToggle";

export default function Header() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-between items-center top-0 fixed w-full h-17 text-green-800 bg-inherit p-4 text-center shadow-md">
        <Link to="cleaner-service">
          <HomeIcon />
        </Link>
        <h1 className="text-2xl font-bold">My App</h1>
        <div className="w-16"></div>
      </div>
      <SidebarToggle />
    </div>
  );
}
