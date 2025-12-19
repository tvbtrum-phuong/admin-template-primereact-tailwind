import React, { useState } from "react";

import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import dayjs from "dayjs";

export default function Users() {
  const [datetime24h, setDateTime24h] = useState(dayjs().toDate());

  const handleClick = () => {
    const formattedDateTime = dayjs(datetime24h).format("DD/MM/YYYY HH:mm");
    console.log("Selected DateTime (24h):", formattedDateTime);
  };
  return (
    <div className="flex flex-col gap-4 ">
      {/* Page title */}
      <div>
        <h1 className="text-2xl font-semibold">Users</h1>
      </div>
      <div>
        <label className="block text-xs mb-1">Chọn ngày:</label>
        <Calendar
          value={datetime24h}
          onChange={(e) => setDateTime24h(e.value)}
          showTime
          hourFormat="24"
          dateFormat="dd/mm/yy"
        />
      </div>
      <div>
        <Button label="Submit" onClick={handleClick} />
      </div>
    </div>
  );
}
