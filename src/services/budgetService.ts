// services/budgetService.ts
export const updatePassengerBudget = async (passengerId: string, updatedBudget: number) => {
    try {
      const response = await fetch(`http://localhost:5000/passengers/${passengerId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ depositGeneralBudget: updatedBudget.toString() }),
      });
  
      if (!response.ok) {
        throw new Error("خطا در بروزرسانی بودجه");
      }
  
      return true; // موفقیت‌آمیز بود
    } catch (error) {
      console.error("خطا در بروزرسانی بودجه:", error);
      throw error;
    }
  };
  