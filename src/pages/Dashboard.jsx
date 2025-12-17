import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      {/* Page title */}
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-slate-500 mt-1">Tổng quan hệ thống</p>
      </div>
    </div>
  );
}
