import { create } from "zustand";
import axios from "axios";

const useBookings = create((set) => ({
    bookings: [],
    fetchBookings: async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/bookings");
            set({ bookings: response.data });
        } catch (error) {
            console.error("Error fetching bookings:", error);
        }
    },
    addBooking: async (booking) => {
        try {
            const response = await axios.post("http://localhost:5000/api/bookings", booking);
            set((state) => ({ bookings: [...state.bookings, { ...booking, id: response.data.id }] }));
        } catch (error) {
            console.error("Error adding booking:", error);
        }
    },
}));

export default useBookings;
