import React from "react";
import { Link } from "react-router-dom"; // وارد کردن Link برای مسیریابی
import { useTrips } from "../../hooks/useTrips";
import { useDeleteTripPopup } from "../../hooks/useDeleteTripPopup";
import InputField from "../../components/field/InputField";
import Button from "../../components/button/Button";
import Popup from "../../components/popup/Popup";
import registerTripBackground from "../../assets/images/pexels-freestockpro-1008155.jpg"

const RegisterTrip: React.FC = () => {
  const { tripName, tripDate, trips, error, setTripName, setTripDate, handleRegisterTrip, handleDeleteTrip } = useTrips();
  const {
    showPopup,
    handleDeleteClick,
    handleConfirmDelete,
    handleCancelDelete,
  } = useDeleteTripPopup(handleDeleteTrip);

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${registerTripBackground})` }}>
          <div className="bg-black/30 backdrop-invert backdrop-opacity-20 p-4 w-1/2">
            <div className="p-4 space-y-4">
              <h1 className="text-xl font-bold text-center text-white">صفحه‌ی ثبت سفر</h1>

              {/* فیلد نام سفر */}
              <InputField label="نام سفر" value={tripName} onChange={(e) => setTripName(e.target.value)} width="w-1/3"/>

              {/* فیلد تاریخ سفر */}
              <InputField label="تاریخ سفر" type="date" value={tripDate} onChange={(e) => setTripDate(e.target.value)} width="w-1/3"/>

              {/* پیام خطا در صورت خالی بودن فیلدها */}
              {/* {error && <p className="text-red-500">{error}</p>} */}
              {error && <p className="text-red-500 text-center">{error}</p>}

              {/* دکمه ثبت سفر */}
              <Button label="ثبت سفر" onClick={handleRegisterTrip} backgroundColor="bg-green-400" hoverColor="hover:bg-green-700"/>

              {/* نمایش لیست سفرها */}
              {trips.length > 0 && (
                <div className="mt-4 p-4 border rounded-lg border-purple-400">
                  <h2 className="text-lg font-semibold text-white">لیست سفرها</h2>
                  <table className="w-full border-collapse border border-gray-300 mt-2">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">نام سفر</th>
                        <th className="border border-gray-300 px-4 py-2">تاریخ سفر</th>
                        <th className="border border-gray-300 px-4 py-2">عملیات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trips.map((trip) => (
                        <tr key={trip.id}>
                          <td className="border border-gray-300 px-4 py-2 text-center text-white">{trip.name}</td>
                          <td className="border border-gray-300 px-4 py-2 text-center text-white">{trip.date}</td>
                          <td className="border border-gray-300 px-4 py-2 flex justify-between">
                            {/* لینک به صفحه مدیریت حسابداری */}
                            <Link to={`/accounting-management/${trip.id}`}>
                            <Button label="مدیریت حسابداری" onClick={() => {}} />
                            </Link>
                            {/* دکمه حذف سفر */}
                            <Button label="حذف سفر" onClick={() => handleDeleteClick(trip.id)} backgroundColor="bg-red-400" hoverColor="hover:bg-red-700"/>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* نمایش Popup برای تایید حذف */}
              {showPopup && (
                <Popup
                  message="آیا از حذف این سفر اطمینان دارید؟"
                  onConfirm={handleConfirmDelete}
                  onCancel={handleCancelDelete}
                />
              )}
            </div>
      </div>
    </div>
  );
};

export default RegisterTrip;
