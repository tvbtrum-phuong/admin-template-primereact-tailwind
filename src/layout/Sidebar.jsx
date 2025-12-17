import { Menu } from "primereact/menu";
import { Tooltip } from "primereact/tooltip";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar({ collapsed }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const items = [
    { label: "Dashboard", icon: "pi pi-home", path: "/" },
    { label: "Users", icon: "pi pi-users", path: "/users" },
    { label: "Roles", icon: "pi pi-users", path: "/roles" },
  ];

  return (
    <aside
      className={`
        transition-all duration-300
        bg-white border-r border-r-gray-200
        ${collapsed ? "w-16" : "w-64"}
      `}
    >
      <div className="h-14 flex items-center justify-center border-b border-b-gray-200 font-semibold">
        {/* {collapsed ? "UDC" : "Admin"} */}
        UDC
      </div>

      {/* Expanded */}
      {!collapsed && (
        <Menu
          model={items.map((item) => ({
            label: item.label,
            icon: item.icon,
            className: isActive(item.path) ? "bg-slate-200 font-medium" : "",
            command: () => navigate(item.path),
          }))}
          style={{ border: "none", width: "100%" }}
        />
      )}

      {/* Collapsed (icon-only + tooltip) */}
      {collapsed && (
        <>
          {items.map((item) => (
            <div key={item.path}>
              {/* Tooltip */}
              <Tooltip
                target={`.menu-icon-${item.path.replace("/", "") || "root"}`}
                content={item.label}
                position="right"
              />

              <button
                onClick={() => navigate(item.path)}
                className={`
                  menu-icon-${item.path.replace("/", "") || "root"}
                  w-10 h-10 mx-auto mt-2
                  flex items-center justify-center rounded
                  transition-colors
                  ${isActive(item.path) ? "bg-slate-200" : "hover:bg-slate-100"}
                `}
              >
                <i className={`${item.icon} text-lg`} />
              </button>
            </div>
          ))}
        </>
      )}
    </aside>
  );
}
