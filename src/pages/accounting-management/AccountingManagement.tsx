import React from "react";
import { useAccounting } from "../../hooks/useAccounting";
import InputField from "../../components/field/InputField"; // 📌 مسیر را چک کن
import Button from "../../components/button/Button"; // 📌 مسیر را چک کن

const AccountingManagement: React.FC = () => {
  const { trip, passengerName, setPassengerName, passengers, handleRegisterPassenger } = useAccounting();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">مدیریت حسابداری</h1>

      {trip ? (
        <div>
          {/* اطلاعات سفر */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">🛫 نام سفر: {trip.name}</h2>
            <h3 className="text-lg font-medium text-gray-700">📅 تاریخ سفر: {trip.date}</h3>
          </div>

          {/* استفاده از InputField و Button */}
          <div className="flex gap-2 mb-4">
            <InputField
              label="نام مسافر"
              type="text"
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
              backgroundColor="bg-white"
              textColor="text-gray-700"
              width="flex-1"
            />
            <Button label="ثبت مسافر" onClick={handleRegisterPassenger} backgroundColor="bg-green-400" hoverColor="hover:bg-green-700"/>
          </div>

          {/* لیست مسافران */}
          <h3 className="text-lg font-semibold mb-2">🧳 مسافران:</h3>
          <ul className="list-disc pl-5">
            {passengers.map((passenger) => (
              <li key={passenger.id} className="text-gray-700">{passenger.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-600 text-center">⏳ در حال بارگذاری...</p>
      )}
    </div>
  );
};

export default AccountingManagement;

