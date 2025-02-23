import React from "react";
import { useTrips } from "../../hooks/useTrips";
import InputField from "../../components/field/InputField";
import Button from "../../components/button/Button";

const RegisterTrip: React.FC = () => {
  const { tripName, tripDate, trips, error, setTripName, setTripDate, handleRegisterTrip } = useTrips();

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">صفحه‌ی ثبت سفر</h1>

      {/* فیلد نام سفر */}
      <InputField label="نام سفر" value={tripName} onChange={(e) => setTripName(e.target.value)} />

      {/* فیلد تاریخ سفر */}
      <InputField label="تاریخ سفر" type="date" value={tripDate} onChange={(e) => setTripDate(e.target.value)} />

      {/* پیام خطا در صورت خالی بودن فیلدها */}
      {error && <p className="text-red-500">{error}</p>}

      {/* دکمه ثبت سفر */}
      <Button label="ثبت سفر" onClick={handleRegisterTrip} />

      {/* نمایش لیست سفرها */}
      {trips.length > 0 && (
        <div className="mt-4 p-4 border rounded-lg">
          <h2 className="text-lg font-semibold">لیست سفرها</h2>
          <table className="w-full border-collapse border border-gray-300 mt-2">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">نام سفر</th>
                <th className="border border-gray-300 px-4 py-2">تاریخ سفر</th>
              </tr>
            </thead>
            <tbody>
              {trips.map((trip, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{trip.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{trip.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RegisterTrip;
