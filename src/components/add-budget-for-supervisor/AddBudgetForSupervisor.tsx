import useBudgetManager from "../../hooks/useBudgetManager";
import Button from "../button/Button";
import InputField from "../field/InputField";
import { Passenger } from "../../types/Accounting/accountingTypes";

const AddBudgetForSupervisor = ({
  passengers,
  updatePassengers,
}: {
  passengers: Passenger[];
  updatePassengers: () => void;
}) => {
  const { name, setName, date, setDate, amount, setAmount, error, handleAddBudget } =
    useBudgetManager(passengers, updatePassengers);

  return (
    <div className="max-w-3xl w-full bg-[#0f172a]/60 backdrop-blur-lg p-8 mx-auto mt-10 rounded-2xl shadow-2xl border border-white/20">
      <h2 className="text-2xl font-semibold text-gray-100 text-center mb-8 drop-shadow-lg">
        اضافه کردن به بودجه سرپرست
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InputField
          label="نام سرپرست"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 text-gray-200 border border-white/30 rounded-lg p-3 backdrop-blur-lg focus:ring-2 focus:ring-blue-500"
        />

        <InputField
          label="تاریخ واریزی"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-white/10 text-gray-200 border border-white/30 rounded-lg p-3 backdrop-blur-lg focus:ring-2 focus:ring-blue-500"
        />

        <InputField
          label="مبلغ واریزی"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-white/10 text-gray-200 border border-white/30 rounded-lg p-3 backdrop-blur-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      <div className="mt-8 flex justify-center">
        <Button
          label="اضافه کردن به بودجه"
          onClick={handleAddBudget}
          className="bg-green-500 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md py-3 px-8 transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AddBudgetForSupervisor;
