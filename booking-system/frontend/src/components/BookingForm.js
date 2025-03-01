import { useState } from "react";
import useBookings from "../store/useBookings";

const BookingForm = () => {
    const { addBooking } = useBookings();
    const [form, setForm] = useState({ name: "", email: "", date: "", time: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addBooking(form); // Додайте await тут
            setForm({ name: "", email: "", date: "", time: "" });
        } catch (error) {
            console.error("Error adding booking:", error); // Обробка помилки
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border">
            <h2 className="text-xl font-bold mb-2">Додати бронювання</h2>
            <input className="border p-2 mb-2 w-full" name="name" value={form.name} onChange={handleChange} placeholder="Ім'я" required />
            <input className="border p-2 mb-2 w-full" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
            <input className="border p-2 mb-2 w-full" type="date" name="date" value={form.date} onChange={handleChange} required />
            <input className="border p-2 mb-2 w-full" type="time" name="time" value={form.time} onChange={handleChange} required />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Забронювати</button>
        </form>
    );
};

export default BookingForm;