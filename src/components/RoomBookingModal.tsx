
import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import BookingForm from "./BookingForm";

interface RoomBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomId: string;
  roomName: string;
  price: number;
}

const RoomBookingModal = ({
  isOpen,
  onClose,
  roomId,
  roomName,
  price,
}: RoomBookingModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="font-serif text-2xl font-bold">Book {roomName}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full"
          >
            <X size={20} />
          </Button>
        </div>
        <div className="p-6">
          <BookingForm roomId={roomId} roomName={roomName} price={price} />
        </div>
      </div>
    </div>
  );
};

export default RoomBookingModal;
