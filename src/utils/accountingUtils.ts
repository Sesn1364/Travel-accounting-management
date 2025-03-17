import { Passenger } from "../types/Accounting/accountingTypes"; // ایمپورت Passenger از فایل types

export const calculateTotalFamilyMembers = (passengers: Passenger[]): number =>
  passengers.reduce((acc: number, passenger: Passenger) => acc + parseInt(passenger.numberFamilyMembers, 10), 0);

export const calculateTotalDeposit = (passengers: Passenger[]): number =>
  passengers.reduce((acc: number, passenger: Passenger) => acc + parseFloat(passenger.depositGeneralBudget || "0"), 0);

export const calculateRemainingBudget = (passengers: Passenger[], totalExpenses: number): number =>
  calculateTotalDeposit(passengers) - totalExpenses;
