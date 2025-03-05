import React from "react";
import { Link } from "react-router-dom";
import { useTrips } from "../../hooks/useTrips";
import { useDeleteTripPopup } from "../../hooks/useDeleteTripPopup";
import InputField from "../../components/field/InputField";
import Button from "../../components/button/Button";
import Popup from "../../components/popup/Popup";
import registerTripBackground from "../../assets/images/pexels-freestockpro-1008155.jpg";
import { motion } from "framer-motion";

const RegisterTrip: React.FC = () => {
  const {
    tripName,
    tripDate,
    trips,
    error,
    setTripName,
    setTripDate,
    handleRegisterTrip,
    handleDeleteTrip,
  } = useTrips();
  const {
    showPopup,
    handleDeleteClick,
    handleConfirmDelete,
    handleCancelDelete,
  } = useDeleteTripPopup(handleDeleteTrip);

  const currentDate = new Date().toLocaleDateString();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${registerTripBackground})` }}
    >
      <motion.div
        className="bg-black/50 backdrop-blur-xs shadow-lg rounded-2xl p-6 w-full max-w-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {error && (
          <motion.div
            className="bg-red-500/90 text-white text-sm font-semibold rounded-lg p-3 flex items-center gap-2 shadow-lg mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M5 12h14"></path>
            </svg>
            {error}
          </motion.div>
        )}
        <p className="text-white text-sm text-right mb-4">{currentDate}</p>

        <h1 className="text-2xl font-bold text-center text-white mb-6">ثبت سفر</h1>

        <div className="space-y-4">
          <InputField
            label="نام سفر"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
            width="w-1/3"
          />

          <InputField
            label="تاریخ سفر"
            type="date"
            value={tripDate}
            onChange={(e) => setTripDate(e.target.value)}
            width="w-1/3"
          />

          <Button
            label="ثبت سفر"
            onClick={handleRegisterTrip}
            backgroundColor="bg-gradient-to-r from-green-400 to-green-600"
            hoverColor="hover:from-green-500 hover:to-green-700"
            className="w-1/5 text-lg py-2 rounded-xl"
          />
        </div>

        {trips.length > 0 && (
          <div className="mt-6 p-4 bg-white/10 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-white mb-3">لیست سفرها</h2>
            <table className="w-full text-white text-center">
              <thead>
                <tr className="bg-white/20">
                  <th className="p-2">نام سفر</th>
                  <th className="p-2">تاریخ سفر</th>
                  <th className="p-2">عملیات</th>
                </tr>
              </thead>
              <tbody>
                {trips.map((trip) => (
                  <tr key={trip.id} className="border-b border-gray-500/50">
                    <td className="p-3">{trip.name}</td>
                    <td className="p-3">{trip.date}</td>
                    <td className="p-3 flex justify-center gap-3">
                      <Link to={`/accounting-management/${trip.id}`}>
                        <Button
                          label="مدیریت حسابداری"
                          onClick={() => { }}
                          className="bg-blue-500 hover:bg-blue-700 text-sm px-3 py-2 rounded-xl"
                        />
                      </Link>
                      <Button
                        label="حذف"
                        onClick={() => handleDeleteClick(trip.id)}
                        backgroundColor="bg-red-500"
                        hoverColor="hover:bg-red-700"
                        className="text-sm px-3 py-2 rounded-xl"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showPopup && (
          <Popup
            message="آیا از حذف این سفر اطمینان دارید؟"
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        )}
      </motion.div>
    </div>
  );
};

export default RegisterTrip;
