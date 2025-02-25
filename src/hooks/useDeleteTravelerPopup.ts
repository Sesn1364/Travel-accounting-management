import { useState } from "react";

export const useDeleteTravelerPopup = (deleteTraveler: (id: string) => void) => {
  const [selectedTraveler, setSelectedTraveler] = useState<string | null>(null);

  const confirmDelete = () => {
    if (selectedTraveler) {
      deleteTraveler(selectedTraveler);
      setSelectedTraveler(null);
    }
  };

  const cancelDelete = () => {
    setSelectedTraveler(null);
  };

  return {
    selectedTraveler,
    setSelectedTraveler,
    confirmDelete,
    cancelDelete,
  };
};
