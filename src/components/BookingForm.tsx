
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Check, CreditCard, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const BookingForm = ({ roomId, roomName, price }: { roomId?: string; roomName?: string; price?: number }) => {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [step, setStep] = useState(1);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handleDateSelect = (date: Date | undefined, type: "checkIn" | "checkOut") => {
    if (type === "checkIn") {
      setCheckInDate(date);
      // If check-out date is earlier than the new check-in date, reset it
      if (checkOutDate && date && checkOutDate < date) {
        setCheckOutDate(undefined);
      }
    } else {
      setCheckOutDate(date);
    }
  };

  const calculateTotalPrice = () => {
    if (!checkInDate || !checkOutDate || !price) return 0;
    
    const dayDifference = Math.max(
      1,
      Math.ceil(
        (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
      )
    );
    
    return price * dayDifference;
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!checkInDate || !checkOutDate) {
      toast.error("Please select both check-in and check-out dates");
      return;
    }
    
    if (!name || !email || !phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setStep(2);
  };

  const handlePayment = async () => {
    // Simulate payment processing
    toast.info("Processing payment...");
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsPaymentSuccessful(true);
      toast.success("Payment successful!");
      
      // Simulate sending WhatsApp message and email notification
      toast.info("Sending booking confirmation via WhatsApp...");
      toast.info("Sending booking confirmation email...");
      
      // In a real implementation, you would call your actual API endpoints here
    }, 2000);
  };

  const handleWhatsAppBooking = () => {
    // Create WhatsApp message with booking details
    const message = `Hello! I'd like to book ${roomName || "a room"} at RD Hotels.\n\n` +
      `Check-in: ${checkInDate ? format(checkInDate, 'PP') : 'Not specified'}\n` +
      `Check-out: ${checkOutDate ? format(checkOutDate, 'PP') : 'Not specified'}\n` +
      `Guests: ${guests}\n` +
      `Name: ${name}\n` +
      `Special requests: ${specialRequests || 'None'}\n`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, "_blank");
  };

  if (isPaymentSuccessful) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
        <p className="mb-6 text-gray-600">
          Thank you for booking with RD Hotels. A confirmation has been sent to your email and WhatsApp.
        </p>
        <div className="bg-ivory p-6 rounded-lg mb-6">
          <h3 className="font-medium mb-3">Booking Summary</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span className="text-gray-500">Room:</span>
            <span>{roomName || "Standard Room"}</span>
            <span className="text-gray-500">Check-in:</span>
            <span>{checkInDate ? format(checkInDate, 'PP') : 'Not specified'}</span>
            <span className="text-gray-500">Check-out:</span>
            <span>{checkOutDate ? format(checkOutDate, 'PP') : 'Not specified'}</span>
            <span className="text-gray-500">Guests:</span>
            <span>{guests}</span>
            <span className="text-gray-500">Total:</span>
            <span className="font-bold">₹{calculateTotalPrice().toLocaleString()}</span>
          </div>
        </div>
        <Button
          className="bg-maroon text-white hover:bg-maroon/90"
          onClick={() => window.location.href = "/"}
        >
          Return to Homepage
        </Button>
      </div>
    );
  }

  if (step === 1) {
    return (
      <form onSubmit={handleNextStep} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Check-in Date *</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !checkInDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkInDate ? format(checkInDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkInDate}
                  onSelect={(date) => handleDateSelect(date, "checkIn")}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Check-out Date *</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !checkOutDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOutDate ? format(checkOutDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkOutDate}
                  onSelect={(date) => handleDateSelect(date, "checkOut")}
                  disabled={(date) => date < (checkInDate || new Date())}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Number of Guests *</label>
          <Input 
            type="number"
            value={guests}
            onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
            min="1"
            className="w-full"
          />
        </div>
      
        <div>
          <label className="block text-sm font-medium mb-1">Full Name *</label>
          <Input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <Input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Phone *</label>
            <Input 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number"
              className="w-full"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Special Requests</label>
          <Textarea 
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            placeholder="Any special requests or notes for your stay"
            rows={3}
            className="w-full"
          />
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            className="flex-1 bg-maroon hover:bg-maroon/90 text-white"
          >
            Continue to Payment
          </Button>
          
          <Button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white"
            onClick={handleWhatsAppBooking}
          >
            <MessageSquare size={18} /> Book via WhatsApp
          </Button>
        </div>
      </form>
    );
  } else {
    // Payment step
    return (
      <div className="space-y-6">
        <div className="bg-ivory p-6 rounded-lg mb-4">
          <h3 className="font-medium mb-3">Booking Summary</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span className="text-gray-500">Room:</span>
            <span>{roomName || "Standard Room"}</span>
            <span className="text-gray-500">Check-in:</span>
            <span>{checkInDate ? format(checkInDate, 'PP') : 'Not specified'}</span>
            <span className="text-gray-500">Check-out:</span>
            <span>{checkOutDate ? format(checkOutDate, 'PP') : 'Not specified'}</span>
            <span className="text-gray-500">Guests:</span>
            <span>{guests}</span>
            <span className="text-gray-500">Total:</span>
            <span className="font-bold">₹{calculateTotalPrice().toLocaleString()}</span>
          </div>
        </div>
        
        <div className="border p-6 rounded-lg">
          <h3 className="font-medium mb-4 flex items-center gap-2">
            <CreditCard size={20} /> Payment Information
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Card Number</label>
              <Input placeholder="1234 5678 9012 3456" className="w-full" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Expiry Date</label>
                <Input placeholder="MM/YY" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVC</label>
                <Input placeholder="123" className="w-full" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Cardholder Name</label>
              <Input placeholder="Name on card" className="w-full" />
            </div>
          </div>
        </div>
        
        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => setStep(1)}
            className="flex-1"
          >
            Back
          </Button>
          
          <Button
            type="button"
            onClick={handlePayment}
            className="flex-1 bg-maroon hover:bg-maroon/90 text-white"
          >
            Complete Booking
          </Button>
        </div>
      </div>
    );
  }
};

export default BookingForm;
