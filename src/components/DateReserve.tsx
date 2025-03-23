"use client";
import { useState, useEffect } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

export default function DateReserve({ onChange }: { onChange: Function }) {
  // State for form fields
  const [nameLastname, setNameLastname] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState<Dayjs | null>(null);

  // ส่งค่ากลับไปยัง parent (Booking)
  useEffect(() => {
    onChange({
      nameLastname,
      tel: contactNumber,
      venue,
      bookDate: date ? date.format("YYYY-MM-DD") : "",
    });
  }, [nameLastname, contactNumber, venue, date]);

  // Event handlers
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameLastname(event.target.value);
  };

  const handleContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactNumber(event.target.value);
  };

  const handleVenueChange = (event: any) => {
    setVenue(event.target.value);
  };

  const handleDateChange = (newDate: Dayjs | null) => {
    setDate(newDate);
  };

  return (
    <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 justify-center">
      <div className="w-fit space-y-2">
        <div className="sm:col-span-3">
          <label htmlFor="Name-Lastname" className="block text-md text-left text-gray-600">
            Name-Lastname
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="Name-Lastname"
              name="Name-Lastname"
              value={nameLastname}
              onChange={handleNameChange}
              placeholder="Your Name"
              className="MuiInput-input"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="Contact-Number" className="block text-md text-left text-gray-600">
            Contact-Number
          </label>
          <div className="mt-2">
            <input
              id="Contact-Number"
              name="Contact-Number"
              type="text"
              value={contactNumber}
              onChange={handleContactChange}
              placeholder="Your Contact Number"
              className="MuiInput-input"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="Pick-Venue" className="block text-md text-left text-gray-600">
            Pick Venue
          </label>
          <Select
            variant="standard"
            name="venue"
            id="venue"
            value={venue}
            onChange={handleVenueChange}
            className="h-[2em] w-[200px]"
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="Pick-Date" className="block text-md text-left text-gray-600">
            Pick Date
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className="bg-white" value={date} onChange={handleDateChange} />
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
}
