import { useEffect } from "react";
import useBookings from "../store/useBookings";

const BookingList = () => {
    const { bookings, fetchBookings } = useBookings();

    useEffect(() => {
        fetchBookings();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Список бронювань</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id} className="border p-2 mb-2">
                        {booking.name} - {booking.email} - {booking.date} {booking.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingList;
