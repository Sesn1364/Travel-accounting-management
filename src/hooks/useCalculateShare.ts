import { useMemo } from "react";
import { Passenger, Expense } from "../types/Accounting/accountingTypes"; // فرض بر این است که این نوع‌ها را دارید

export const useShareCalculation = (passengers: Passenger[], expenses: Expense[]) => {
  const calculateShare = (passengerName: string) => {
    let totalShare = 0;

    passengers.forEach(passenger => {
      const filteredExpenses = expenses.filter(
        expense => new Date(expense.date) >= new Date(passenger.dateArrival)
      );

      filteredExpenses.forEach(expense => {
        const totalFamilyMembers = passengers
          .filter(p => new Date(p.dateArrival) <= new Date(expense.date))
          .reduce((sum, p) => sum + Number(p.numberFamilyMembers), 0);

        if (passenger.name === passengerName) {
          const passengerFamilyMembers = Number(passenger.numberFamilyMembers);
          const sharePerHead = totalFamilyMembers > 0 ? Number(expense.amount) / totalFamilyMembers : 0;
          totalShare += sharePerHead * passengerFamilyMembers;
        }
      });
    });

    return totalShare.toFixed(2);
  };

  return useMemo(() => calculateShare, [passengers, expenses]);
};
