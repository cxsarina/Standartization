import { useEffect } from "react";
import useBookings from "../store/useBookings";

/**
 * Компонент для відображення списку бронювань.
 * Використовує глобальний стан для отримання і відображення бронювань.
 *
 * @component
 * @example
 * return (
 *   <BookingList />
 * )
 */
const BookingList = () => {
    const { bookings, fetchBookings } = useBookings();

    /**
     * Викликається при монтуванні компонента для завантаження списку бронювань.
     * Викликає функцію `fetchBookings` для отримання даних.
     *
     * @returns {void}
     */
    useEffect(() => {
        fetchBookings();
    }, []); // Пустий масив вказує на те, що хук виконується лише один раз при монтуванні компонента.

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
