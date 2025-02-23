import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setTripName, setTripDate } from "../../store/slices/tripSlice";
import InputField from "../../components/field/InputField";
import Button from "../../components/button/Button";

const RegisterTrip: React.FC = () => {
  const dispatch = useDispatch();
  const tripName = useSelector((state: RootState) => state.trip.tripName);
  const tripDate = useSelector((state: RootState) => state.trip.tripDate);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">صفحه‌ی ثبت سفر</h1>

      {/* فیلد نام سفر */}
      <InputField
        label="نام سفر"
        value={tripName}
        onChange={(e) => dispatch(setTripName(e.target.value))}
      />

      {/* فیلد تاریخ سفر */}
      <InputField
        label="تاریخ سفر"
        type="date"
        value={tripDate}
        onChange={(e) => dispatch(setTripDate(e.target.value))}
      />
      <Button label="ثبت سفر" onClick={() => console.log("سفر ثبت شد!")} />
    </div>
  );
};

export default RegisterTrip;
