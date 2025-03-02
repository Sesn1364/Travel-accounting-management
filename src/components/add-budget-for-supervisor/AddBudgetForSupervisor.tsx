import { useState } from "react";
import Button from "../button/Button";
import InputField from "../field/InputField";

interface Passenger {
  id: string;
  name: string;
  depositGeneralBudget: string;
}

const AddBudget = ({ passengers, updatePassengers }: { passengers: Passenger[], updatePassengers: () => void }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const currentDate = new Date().toISOString().split("T")[0];

  const handleAddBudget = async () => {
    if (!name || !date || !amount) {
      setError("لطفا تمام فیلدها را مقداردهی نمایید");
      return;
    }

    const passenger = passengers.find((p) => p.name === name);
    if (!passenger) {
      setError("این سرپرست در این سفر وجود ندارد");
      return;
    }

    if (date < currentDate) {
      setError("این تاریخ گذشته است");
      return;
    }

    const parsedAmount = Number(amount);
    if (parsedAmount <= 0) {
      setError("مبلغ واریزی نباید 0 یا منفی باشد.");
      return;
    }

    const updatedBudget = Number(passenger.depositGeneralBudget) + parsedAmount;

    try {
      // ارسال درخواست PATCH برای به‌روزرسانی بودجه سرپرست در db.json
      await fetch(`http://localhost:5000/passengers/${passenger.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ depositGeneralBudget: updatedBudget.toString() })
      });

      // بعد از بروزرسانی در دیتابیس، مجدداً لیست مسافران را دریافت کنیم
      updatePassengers();

      // پاک کردن فیلدهای ورودی
      setError("");
      setName("");
      setDate("");
      setAmount("");
    } catch (error) {
      setError("خطا در ذخیره‌سازی اطلاعات");
      console.error("خطا در بروزرسانی بودجه:", error);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md w-80">
      <h2 className="text-lg font-bold mb-4">اضافه کردن بودجه برای سرپرست</h2>
      <InputField label="نام سرپرست" value={name} onChange={(e) => setName(e.target.value)} />
      <InputField label="تاریخ واریزی" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <InputField label="مبلغ واریزی" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />

      {error && <p className="text-red-500 mt-2">{error}</p>}
      <Button label="اضافه کردن به بودجه" onClick={handleAddBudget} backgroundColor="bg-green-500" />
    </div>
  );
};

export default AddBudget;
