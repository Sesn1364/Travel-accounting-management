import { useState } from "react";

export const useDeleteTripPopup = (handleDeleteTrip: (id: number) => void) => {
  const [showPopup, setShowPopup] = useState(false);
  const [tripIdToDelete, setTripIdToDelete] = useState<number | null>(null);

  const handleDeleteClick = (tripId: number) => {
    setTripIdToDelete(tripId);
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    if (tripIdToDelete !== null) {
      handleDeleteTrip(tripIdToDelete);
    }
    setShowPopup(false);
  };

  const handleCancelDelete = () => {
    setShowPopup(false);
  };

  return {
    showPopup,
    handleDeleteClick,
    handleConfirmDelete,
    handleCancelDelete,
  };
};
