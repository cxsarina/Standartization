const pool = require("../config/db");

/**
 * Функція для отримання всіх записів про бронювання з бази даних.
 * Відповідь на запит надається у форматі JSON з усіма даними, відсортованими за датою та часом.
 *
 * @async
 * @function getBookings
 * @param {Object} req - Об'єкт запиту Express.
 * @param {Object} res - Об'єкт відповіді Express.
 * @returns {void}
 */
const getBookings = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM bookings ORDER BY date, time");
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

/**
 * Функція для створення нового бронювання в базі даних.
 * При успішному створенні повертається повідомлення та ідентифікатор нового бронювання.
 *
 * @async
 * @function createBooking
 * @param {Object} req - Об'єкт запиту Express, що містить дані бронювання в тілі запиту.
 * @param {Object} res - Об'єкт відповіді Express.
 * @returns {void}
 * @throws {Error} Викидає помилку, якщо не всі обов'язкові поля присутні у запиті або при помилці в процесі створення бронювання.
 */
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
