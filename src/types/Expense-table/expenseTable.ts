export interface Expense {
    id: string;
    type: string;
    date: string;
    amount: number;
  }
  
  export interface ExpenseTableProps {
    expenses: Expense[];
    setSelectedExpense: (id: string | null) => void;
    handleDeleteExpense: (id: string) => void;
  }
  