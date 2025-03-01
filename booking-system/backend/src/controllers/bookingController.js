const pool = require("../config/db");

const getBookings = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM bookings ORDER BY date, time");
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const createBooking = async (req, res) => {
    try {
        const { name, email, date, time } = req.body;
        if (!name || !email || !date || !time) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const [result] = await pool.query(
            "INSERT INTO bookings (name, email, date, time) VALUES (?, ?, ?, ?)",
            [name, email, date, time]
        );

        res.status(201).json({ message: "Booking created successfully", id: result.insertId });
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { getBookings, createBooking };
