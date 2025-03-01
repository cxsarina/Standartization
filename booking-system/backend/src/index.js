require("dotenv").config();
const express = require("express");
const cors = require("cors");
const setupSwagger = require("./swagger");


const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Booking System API is running...");
});
const bookingRoutes = require("./routes/bookingRoutes");
app.use("/api/bookings", bookingRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
setupSwagger(app);
