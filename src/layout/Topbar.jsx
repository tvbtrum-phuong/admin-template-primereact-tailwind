import { Button } from "primereact/button";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
// import { Avatar } from "primereact/avatar";
import UserMenu from "../components/UserMenu";

export default function Topbar({ isMobile, onToggle, collapsed }) {
  const icon = isMobile ? (
    <MdMenu size={24} />
  ) : collapsed ? (
    <RiMenuUnfoldLine size={24} />
  ) : (
    <RiMenuFoldLine size={24} />
  );
  return (
    <header className="h-14 bg-white border-b border-b-gray-200 flex items-center px-3 gap-2">
      <Button icon={icon} text onClick={onToggle} />
      <span className="text-lg font-semibold">Admin Panel</span>
      {/* <div className="ml-auto">
        <Avatar
          icon="pi pi-user"
          className="mr-2"
          style={{ backgroundColor: "#06b6d4", color: "#ffffff" }}
          shape="circle"
        />
      </div> */}

      {/* Right */}
      <div className="ml-auto">
        <UserMenu
          username="admin"
          onLogout={() => {
            console.log("logout");
          }}
        />
      </div>
    </header>
  );
}
