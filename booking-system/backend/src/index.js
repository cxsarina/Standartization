require("dotenv").config();
const express = require("express");
const cors = require("cors");
const setupSwagger = require("./swagger");

const app = express();

// Використовуємо middleware для обробки JSON запитів
app.use(express.json());

// Додаємо middleware для підтримки CORS
app.use(cors());

/**
 * Основний маршрут, який відправляє повідомлення про статус сервера.
 *
 * @function
 * @name GET /
 * @param {Object} req - Об'єкт запиту Express.
 * @param {Object} res - Об'єкт відповіді Express.
 * @returns {void}
 */
app.get("/", (req, res) => {
    res.send("Booking System API is running...");
});

// Підключення маршрутів для бронювань
const bookingRoutes = require("./routes/bookingRoutes");
app.use("/api/bookings", bookingRoutes);

/**
 * Запуск сервера на вказаному порту.
 * Якщо порт не визначений в середовищі, використовується 5000.
 *
 * @function
 * @name app.listen
 * @param {number} PORT - Порт для запуску сервера.
 * @returns {void}
 */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Налаштування Swagger для автоматичної генерації документації API
setupSwagger(app);
