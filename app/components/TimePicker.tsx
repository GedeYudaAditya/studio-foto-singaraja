import { useState } from "react";

export default function TimePicker() {
  const timeOptions = [];
  for (let hour = 10; hour <= 22; hour++) {
    const start = hour;
    const end = hour + 1;
    const label = `${start}:00 - ${end}:00 ${end < 12 ? "AM" : "PM"}`;
    timeOptions.push({ value: `${start}:00`, label });
  }

  const [selectedTime, setSelectedTime] = useState(timeOptions[0].value);

  return (
    <div>
      <label htmlFor="jam" className="block text-sm font-medium text-gray-700">
        Pilih Jam
      </label>
      <select
        id="jam"
        className="border p-2 rounded w-full"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
      >
        {timeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
