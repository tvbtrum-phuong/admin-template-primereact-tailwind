import { OverlayPanel } from "primereact/overlaypanel";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { useRef } from "react";

export default function UserMenu({ username = "admin", onLogout }) {
  const op = useRef(null);

  return (
    <>
      {/* Avatar button */}
      <button
        onClick={(e) => op.current.toggle(e)}
        className="focus:outline-none"
      >
        <Avatar
          icon="pi pi-user"
          style={{
            backgroundColor: "#06b6d4",
            color: "#ffffff",
          }}
          shape="circle"
          className="cursor-pointer"
        />
      </button>

      {/* Overlay panel */}
      <OverlayPanel ref={op} className="w-64">
        <div className="flex flex-col gap-3">
          {/* User info */}
          <div className="flex items-center gap-3">
            <Avatar
              icon="pi pi-user"
              style={{
                backgroundColor: "#06b6d4",
                color: "#ffffff",
              }}
              shape="circle"
              size="large"
            />
            <div>
              <div className="font-semibold">{username}</div>
              <div className="text-sm text-gray-500">Administrator</div>
            </div>
          </div>

          <hr />

          <div className="ml-auto">
            <Button
              label="Logout"
              icon="pi pi-sign-out"
              severity="danger"
              onClick={onLogout}
              outlined
              size="small"
            />
          </div>
        </div>
      </OverlayPanel>
    </>
  );
}
