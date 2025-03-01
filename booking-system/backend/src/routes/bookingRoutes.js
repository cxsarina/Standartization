const express = require("express");
const router = express.Router();
const { getBookings, createBooking } = require("../controllers/bookingController");

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Отримати всі бронювання
 *     description: Повертає список усіх бронювань
 *     responses:
 *       200:
 *         description: Список бронювань отримано успішно
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   date:
 *                     type: string
 *                     format: date
 *                   time:
 *                     type: string
 *                     format: time
 *       500:
 *         description: Внутрішня помилка сервера
 */
router.get("/", getBookings);

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Створити нове бронювання
 *     description: Додає нове бронювання в базу
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "cxsarina0"
 *               email:
 *                 type: string
 *                 example: "cxsarina@gmail.com"
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2025-03-01"
 *               time:
 *                 type: string
 *                 format: time
 *                 example: "14:00"
 *     responses:
 *       201:
 *         description: Бронювання створено успішно
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 id:
 *                   type: integer
 *       400:
 *         description: Неправильні вхідні дані
 *       500:
 *         description: Внутрішня помилка сервера
 */
router.post("/", createBooking);

module.exports = router;
