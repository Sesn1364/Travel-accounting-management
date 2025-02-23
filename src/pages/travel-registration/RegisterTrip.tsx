// import React from "react";
// import { useTrips } from "../../hooks/useTrips";
// import { useDeleteTripPopup } from "../../hooks/useDeleteTripPopup";  // ایمپورت hook جدید
// import InputField from "../../components/field/InputField";
// import Button from "../../components/button/Button";
// import Popup from "../../components/popup/Popup";

// const RegisterTrip: React.FC = () => {
//   const { tripName, tripDate, trips, error, setTripName, setTripDate, handleRegisterTrip, handleDeleteTrip } = useTrips();
//   const {
//     showPopup,
//     handleDeleteClick,
//     handleConfirmDelete,
//     handleCancelDelete,
//   } = useDeleteTripPopup(handleDeleteTrip);  // استفاده از hook جدید

//   return (
//     <div className="p-4 space-y-4">
//       <h1 className="text-xl font-bold">صفحه‌ی ثبت سفر</h1>

//       {/* فیلد نام سفر */}
//       <InputField label="نام سفر" value={tripName} onChange={(e) => setTripName(e.target.value)} />

//       {/* فیلد تاریخ سفر */}
//       <InputField label="تاریخ سفر" type="date" value={tripDate} onChange={(e) => setTripDate(e.target.value)} />

//       {/* پیام خطا در صورت خالی بودن فیلدها */}
//       {error && <p className="text-red-500">{error}</p>}

//       {/* دکمه ثبت سفر */}
//       <Button label="ثبت سفر" onClick={handleRegisterTrip} />

//       {/* نمایش لیست سفرها */}
//       {trips.length > 0 && (
//         <div className="mt-4 p-4 border rounded-lg">
//           <h2 className="text-lg font-semibold">لیست سفرها</h2>
//           <table className="w-full border-collapse border border-gray-300 mt-2">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="border border-gray-300 px-4 py-2">نام سفر</th>
//                 <th className="border border-gray-300 px-4 py-2">تاریخ سفر</th>
//                 <th className="border border-gray-300 px-4 py-2">عملیات</th>
//               </tr>
//             </thead>
//             <tbody>
//               {trips.map((trip) => (
//                 <tr key={trip.id}>
//                   <td className="border border-gray-300 px-4 py-2">{trip.name}</td>
//                   <td className="border border-gray-300 px-4 py-2">{trip.date}</td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {/* دکمه حذف سفر */}
//                     <Button label="حذف سفر" onClick={() => handleDeleteClick(trip.id)} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* نمایش Popup برای تایید حذف */}
//       {showPopup && (
//         <Popup
//           message="آیا از حذف این سفر اطمینان دارید؟"
//           onConfirm={handleConfirmDelete}
//           onCancel={handleCancelDelete}
//         />
//       )}
//     </div>
//   );
// };

// export default RegisterTrip;



import React from "react";
import { Link } from "react-router-dom"; // وارد کردن Link برای مسیریابی
import { useTrips } from "../../hooks/useTrips";
import { useDeleteTripPopup } from "../../hooks/useDeleteTripPopup";
import InputField from "../../components/field/InputField";
import Button from "../../components/button/Button";
import Popup from "../../components/popup/Popup";

const RegisterTrip: React.FC = () => {
  const { tripName, tripDate, trips, error, setTripName, setTripDate, handleRegisterTrip, handleDeleteTrip } = useTrips();
  const {
    showPopup,
    handleDeleteClick,
    handleConfirmDelete,
    handleCancelDelete,
  } = useDeleteTripPopup(handleDeleteTrip);

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
                <th className="border border-gray-300 px-4 py-2">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {trips.map((trip) => (
                <tr key={trip.id}>
                  <td className="border border-gray-300 px-4 py-2">{trip.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{trip.date}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {/* لینک به صفحه مدیریت حسابداری */}
                    <Link to={`/accounting-management/${trip.id}`}>
                    <Button label="مدیریت حسابداری" onClick={() => {}} />
                    </Link>
                    {/* دکمه حذف سفر */}
                    <Button label="حذف سفر" onClick={() => handleDeleteClick(trip.id)} />
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
  );
};

export default RegisterTrip;
