export interface Trip {
    id: string;
    name: string;
    date: string;
  }
  
  export interface Passenger {
    id?: string; // هنگام ثبت نیازی به id نیست، ولی هنگام نمایش هست
    name: string;
    tripId: string;
    dateArrival: string; // اضافه کردن فیلد تاریخ ورود
    numberFamilyMembers: string; // اضافه کردن فیلد تعداد اعضای خانواده
    depositGeneralBudget: string; // اضافه کردن فیلد واریزی به بودجه کل
  }

  export interface Expense {
    id: string;
    tripId: string;
    type: string;
    date: string;
    amount: string;
  }

  export interface UseAccountingReturn {
    trip: Trip | null;
    passengerName: string;
    setPassengerName: React.Dispatch<React.SetStateAction<string>>;
    dateArrival: string;
    setDateArrival: React.Dispatch<React.SetStateAction<string>>;
    numberFamilyMembers: string;
    setNumberFamilyMembers: React.Dispatch<React.SetStateAction<string>>;
    depositGeneralBudget: string;
    setDepositGeneralBudget: React.Dispatch<React.SetStateAction<string>>;
    passengers: Passenger[];
    handleRegisterPassenger: () => void;
    handleDeletePassenger: (id: string) => void;
    expenses: Expense[];
    expenseType: string;
    setExpenseType: React.Dispatch<React.SetStateAction<string>>;
    expenseDate: string;
    setExpenseDate: React.Dispatch<React.SetStateAction<string>>;
    expenseAmount: string;
    setExpenseAmount: React.Dispatch<React.SetStateAction<string>>;
    handleRegisterExpense: () => void;
  }
  
  export interface ExpenseFormProps {
    expenseType: string;
    setExpenseType: (value: string) => void;
    expenseDate: string;
    setExpenseDate: (value: string) => void;
    expenseAmount: string;
    setExpenseAmount: (value: string) => void;
    handleRegisterExpense: () => void;
  }

  export interface PassengerFormProps {
    passengerName: string;
    dateArrival: string;
    numberFamilyMembers: string;
    depositGeneralBudget: string;
    setPassengerName: (value: string) => void;
    setDateArrival: (value: string) => void;
    setNumberFamilyMembers: (value: string) => void;
    setDepositGeneralBudget: (value: string) => void;
    handleRegisterPassenger: () => void;
  }

  export interface PassengerTableProps {
    passengers: Passenger[];
    setSelectedTraveler: (id: string | null) => void;
  }

  export interface ShareTableProps {
    passengers: Passenger[];
    expenses: Expense[];
  }

  export interface SummaryTableProps {
    totalFamilyMembers: number;
    totalDeposit: number;
  }

  export interface SummaryTableExpenseProps {
    totalExpenses: number;
    title : string;
    label : string;
  }