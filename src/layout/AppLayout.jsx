import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import MobileDrawer from "./MobileDrawer";

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");

    const handleChange = () => {
      setIsMobile(mq.matches);
      if (mq.matches) {
        setCollapsed(false);
      }
    };

    handleChange();
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="flex min-h-dvh bg-slate-50">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <MobileDrawer
          visible={drawerOpen}
          onHide={() => setDrawerOpen(false)}
        />
      )}

      <div className="flex flex-col flex-1 min-h-0">
        <Topbar
          isMobile={isMobile}
          collapsed={collapsed}
          onToggle={() =>
            isMobile ? setDrawerOpen(true) : setCollapsed((v) => !v)
          }
        />

        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
